// i stole half this code from: https://github.com/jestsee/jestsee.com/blob/master/src/pages/_components/bento/BentoItemGithubActivity/BentoItemGithubActivityChart.tsx

"use client";

import { Box, Typography, useTheme } from "@mui/material";
import HeatMap from "@uiw/react-heat-map";

import { formatDate } from "@/lib/formatters";
import type { GithubContributionData } from "@/lib/types/github-types";
import { useGithubActivityHeatmap } from "@/app/features/bento/hooks/useGithubActivityHeatmap";

interface Props {
  data: GithubContributionData;
}

export default function GitHubActivityCard({ data }: Props) {
  const theme = useTheme();
  const {
    startDate,
    endDate,
    filledContributions,
    hoveredTile,
    rectRender,
    handleMouseLeave,
    heatmapMinWidth,
    heatmapColors,
    scrollRef,
    rectSize,
    space,
  } = useGithubActivityHeatmap(data);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body2" color="text.secondary" noWrap>
          {hoveredTile}
        </Typography>
      </Box>

      <Box sx={{ overflowX: "auto", width: "100%" }} ref={scrollRef}>
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          onMouseLeave={handleMouseLeave}
          value={filledContributions}
          weekLabels={false}
          monthLabels={false}
          legendCellSize={0}
          space={space}
          rectSize={rectSize}
          rectProps={{ rx: 4 }}
          rectRender={rectRender}
          panelColors={heatmapColors}
          style={{
            color: theme.palette.text.primary,
            width: "100%",
            minWidth: `${heatmapMinWidth}px`,
          }}
        />
      </Box>

      <Typography variant="caption" color="text.secondary">
        Last pushed on {formatDate(new Date(data.lastPushedAt))}
      </Typography>
    </Box>
  );
}
