"use client";

import { Box, useTheme } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ElementType, ReactNode } from "react";

const toCssSize = (value?: number | string) =>
  typeof value === "number" ? `${value}px` : value;

const DEFAULT_MIN_HEIGHT = "160px";

interface BentoCardProps {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colSpan?: number;
  rowSpan?: number;
  widthSize?: "xs" | "sm" | "md" | "lg" | "xl";
  heightSize?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  aspectRatio?: string;
  padding?: number | string;
  sx?: SxProps<Theme>;
  component?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function BentoCard({
  children,
  size,
  colSpan,
  rowSpan,
  widthSize,
  heightSize,
  width,
  height,
  minHeight,
  aspectRatio,
  padding,
  sx,

  component,
  href,
  target,
  rel,
  ariaLabel,
}: BentoCardProps) {
  const theme = useTheme();
  const cardMinHeight = toCssSize(minHeight) ?? DEFAULT_MIN_HEIGHT;
  const cardPadding = toCssSize(padding) ?? "24px";
  const sizeToSpan = { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 } as const;
  const resolvedWidthSize = widthSize ?? size;
  const resolvedHeightSize = heightSize ?? size;
  const resolvedColSpan =
    colSpan ?? (resolvedWidthSize ? sizeToSpan[resolvedWidthSize] : 1);
  const resolvedRowSpan =
    rowSpan ?? (resolvedHeightSize ? sizeToSpan[resolvedHeightSize] : 1);
  const componentProps = component
    ? { component, href, target, rel, "aria-label": ariaLabel }
    : {};

  const cardStyles = {
    backgroundColor: theme.palette.bento.cardBackground,
    borderRadius: "24px",
    border: "1px solid",
    borderColor: theme.palette.bento.cardBorder,
    padding: cardPadding,
    minHeight: cardMinHeight,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  if (width !== undefined) {
    (cardStyles as any).width = toCssSize(width);
  }
  if (height !== undefined) {
    (cardStyles as any).height = toCssSize(height);
  }
  if (aspectRatio) {
    (cardStyles as any).aspectRatio = aspectRatio;
  }

  return (
    <Box
      {...componentProps}
      sx={[
        cardStyles,
        {
          gridColumn: {
            xs: "span 1",
            sm: `span ${Math.min(resolvedColSpan, 2)}`,
            md: `span ${resolvedColSpan}`,
          },
          gridRow: {
            xs: "span 1",
            sm: `span ${resolvedRowSpan}`,
            md: `span ${resolvedRowSpan}`,
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
