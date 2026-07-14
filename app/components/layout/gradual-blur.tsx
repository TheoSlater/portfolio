"use client";
import React, { CSSProperties, useMemo, PropsWithChildren } from "react";

import "./GradualBlur.css";

type GradualBlurProps = {
  position?: "top" | "bottom" | "left" | "right";
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | "scroll";
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
  responsive?: boolean;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
  preset?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "subtle"
    | "intense"
    | "smooth"
    | "sharp"
    | "header"
    | "footer"
    | "sidebar"
    | "page-header"
    | "page-footer";
  gpuOptimized?: boolean;
  hoverIntensity?: number;
  target?: "parent" | "page";
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
};

const PRESETS: Record<string, Partial<GradualBlurProps>> = {
  top: { position: "top", height: "6rem" },
  bottom: { position: "bottom", height: "6rem" },
  left: { position: "left", height: "6rem" },
  right: { position: "right", height: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8 },
  intense: { height: "10rem", strength: 4, exponential: true },
  smooth: { height: "8rem", curve: "bezier" },
  sharp: { height: "5rem", curve: "linear" },
  header: { position: "top", height: "8rem", curve: "ease-out" },
  footer: { position: "bottom", height: "8rem", curve: "ease-out" },
  sidebar: { position: "left", height: "6rem", strength: 2.5 },
  "page-header": {
    position: "top",
    height: "10rem",
    target: "page",
    strength: 3,
  },
  "page-footer": {
    position: "bottom",
    height: "10rem",
    target: "page",
    strength: 3,
  },
};

const PAGE_BG = "#010000";

const GradualBlur: React.FC<PropsWithChildren<GradualBlurProps>> = (props) => {
  const config = useMemo(() => {
    const presetConfig =
      props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return { ...presetConfig, ...props } as Required<GradualBlurProps>;
  }, [props]);

  const containerStyle: CSSProperties = useMemo(() => {
    const position = config.position || "bottom";
    const isPageTarget = config.target === "page";
    const height = config.height || "6rem";
    const opacity = config.opacity ?? 1;

    const gradientDirection =
      position === "top"
        ? "to top"
        : position === "bottom"
          ? "to bottom"
          : position === "left"
            ? "to left"
            : "to right";

    const isVertical = position === "top" || position === "bottom";

    const baseStyle: CSSProperties = {
      position: isPageTarget ? "fixed" : "absolute",
      pointerEvents: "none",
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      background: `linear-gradient(${gradientDirection}, transparent 0%, ${PAGE_BG} 100%)`,
      opacity,
      ...config.style,
    };

    if (isVertical) {
      baseStyle.height = height;
      baseStyle.width = config.width || "100%";
      baseStyle[position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else {
      baseStyle.width = config.width || height;
      baseStyle.height = "100%";
      baseStyle[position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config]);

  return (
    <div
      className={`gradual-blur ${config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent"} ${config.className}`}
      style={containerStyle}
    />
  );
};

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = "GradualBlur";
(GradualBlurMemo as any).PRESETS = PRESETS;
export default GradualBlurMemo;
