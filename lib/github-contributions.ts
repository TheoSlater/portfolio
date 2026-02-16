import { GraphQLClient, gql } from "graphql-request";
import { getGithubUsername } from "./metadata";
import type { GithubContributionData } from "./types/github-types";
import { ONE_DAY_SECONDS } from "./cache";
import { createTimedCache } from "./simple-cache";

const GetGithubContributions = gql`
  query ($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      repositories(first: 1, orderBy: { direction: DESC, field: PUSHED_AT }) {
        nodes {
          pushedAt
        }
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const CACHE_TTL_MS = ONE_DAY_SECONDS * 1000;

type GithubContributionsResponse = {
  user: {
    repositories: {
      nodes: Array<{
        pushedAt: string | null;
      }>;
    };
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: Array<{
          contributionDays: Array<{
            contributionCount: number;
            date: string;
          }>;
        }>;
      };
    };
  };
};

const getGithubContributionsUncached =
  async (): Promise<GithubContributionData | null> => {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    if (!token) {
      console.warn("GITHUB_ACCESS_TOKEN is not defined");
      return null;
    }

    const username = getGithubUsername();
    if (!username) {
      console.warn("GitHub username is not set");
      return null;
    }

    const client = new GraphQLClient(GITHUB_GRAPHQL_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    try {
      const now = new Date();
      const to = now.toISOString();
      const fromDate = new Date(now);
      fromDate.setUTCFullYear(now.getUTCFullYear() - 1);
      const from = fromDate.toISOString();

      const response = await client.request<GithubContributionsResponse>(
        GetGithubContributions,
        {
          userName: username,
          from,
          to,
        },
      );

      const calendar =
        response.user.contributionsCollection.contributionCalendar;
      const lastRepo = response.user.repositories.nodes[0];

      return {
        totalContributions: calendar.totalContributions,
        lastPushedAt: lastRepo?.pushedAt ?? new Date().toISOString(),
        contributions: calendar.weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            count: day.contributionCount,
            date: day.date,
          })),
        ),
      };
    } catch (error) {
      console.error("Failed to load GitHub contributions", error);
      return null;
    }
  };

const contributionsCache = createTimedCache(
  getGithubContributionsUncached,
  CACHE_TTL_MS,
);

export function invalidateGithubContributionsCache() {
  contributionsCache.invalidate();
}

export function refreshGithubContributionsCache() {
  return contributionsCache.refresh();
}

export async function getGithubContributions() {
  return contributionsCache.get();
}
