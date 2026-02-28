import type { SxProps, Theme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { BentoCard } from "../../ui/bento-card";
import type { GithubContributionData } from "@/lib/types/github-types";
import GitHubActivityCard from "../github-activity-card";
import CardLabelWithIcon from "./card-label-with-icon";

interface GitHubActivityCardSectionProps {
  contributions: GithubContributionData | null;
  colSpan?: number;
  rowSpan?: number;
  sx?: SxProps<Theme>;
}

export default function GitHubActivityCardSection({
  contributions,
  colSpan,
  rowSpan,
  sx,
}: GitHubActivityCardSectionProps) {
  return (
    <BentoCard widthSize="md" heightSize="sm" colSpan={colSpan} rowSpan={rowSpan} sx={sx}>
      <CardLabelWithIcon
        icon={<GitHub fontSize="small" sx={{ fontSize: 18 }} />}
      >
        GitHub activity
      </CardLabelWithIcon>
      {contributions ? (
        <GitHubActivityCard data={contributions} />
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          Unable to load GitHub activity right now.
        </Typography>
      )}
    </BentoCard>
  );
}
