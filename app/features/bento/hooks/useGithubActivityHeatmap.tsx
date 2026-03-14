"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import type { SVGProps } from "@uiw/react-heat-map";
import type { GithubContributionData } from "@/lib/types/github-types";
import { formatMonthDay, formatNumber } from "@/lib/formatters";

const RECT_SIZE = 16;
const SPACE = 4;
const HEATMAP_LEFT_PAD = 5;

const getDateRange = () => {
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);

  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 364);
  startDate.setHours(0, 0, 0, 0);

  const displayStartDate = new Date(startDate);
  displayStartDate.setDate(startDate.getDate() - startDate.getDay());

  return { startDate: displayStartDate, endDate };
};

const toLocalDateKey = (date: Date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

const toLocalDateFromIso = (date: string) => new Date(`${date}T00:00:00`);

const createRectRenderer =
  (handleMouseEnter: (value: string) => void): SVGProps["rectRender"] =>
  // just to shut the error up, will find better solution
  // eslint-disable-next-line react/display-name
  (props, data) => {
    const date = new Date(data.date);
    const formattedDate = `${formatMonthDay(date)}`;
    const tileInfo = `${data.count ? formatNumber(data.count) : "No"} contributions on ${formattedDate}`;

    return (
      <rect
        {...props}
        style={{ transition: "filter 200ms ease", cursor: "pointer" }}
        onMouseEnter={() => handleMouseEnter(tileInfo)}
      />
    );
  };

export function useGithubActivityHeatmap(data: GithubContributionData) {
  const theme = useTheme();
  const { startDate, endDate } = React.useMemo(() => getDateRange(), []);

  const filledContributions = React.useMemo(() => {
    const contributions = data.contributions ?? [];
    const map = new Map(
      contributions.map((day) => [
        toLocalDateKey(toLocalDateFromIso(day.date)),
        day.count,
      ]),
    );
    const items: GithubContributionData["contributions"] = [];
    const cursor = new Date(startDate);

    while (cursor <= endDate) {
      const date = toLocalDateKey(cursor);
      items.push({ date, count: map.get(date) ?? 0 });
      cursor.setDate(cursor.getDate() + 1);
    }

    return items;
  }, [data.contributions, startDate, endDate]);

  const dayCount = filledContributions.length;
  const weekColumns = Math.max(1, Math.ceil(dayCount / 7));
  const heatmapMinWidth = Math.max(
    HEATMAP_LEFT_PAD + weekColumns * (RECT_SIZE + SPACE),
    640,
  );

  const defaultLabel = React.useMemo(
    () => `${formatNumber(data.totalContributions)} contributions in the last year`,
    [data.totalContributions],
  );
  const [hoveredTile, setHoveredTile] = React.useState<string>(defaultLabel);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setHoveredTile(defaultLabel);
  }, [defaultLabel]);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [filledContributions.length]);

  const rectRender = React.useMemo(
    () => createRectRenderer((value) => setHoveredTile(value)),
    [],
  );

  const handleMouseLeave = React.useCallback(() => {
    setHoveredTile(defaultLabel);
  }, [defaultLabel]);

  return {
    startDate,
    endDate,
    filledContributions,
    hoveredTile,
    defaultLabel,
    rectRender,
    handleMouseLeave,
    heatmapMinWidth,
    heatmapColors: theme.palette.bento.heatmap,
    scrollRef,
    rectSize: RECT_SIZE,
    space: SPACE,
  };
}
