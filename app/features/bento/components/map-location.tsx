"use client";

import type { Map as MapLeaflet } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { alpha, Box, useTheme } from "@mui/material";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);

const LATITUDE = 51.91;
const LONGITUDE = -2.58;

const MAX_ZOOM = 10;
const MIN_ZOOM = 8;

const MAP_URL = "/api/map/{z}/{x}/{y}.png";

interface Props {
  className?: string;
}

export default function MapLocation({ className }: Props) {
  const theme = useTheme();
  const mapRef = useRef<MapLeaflet | null>(null);

  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "100%",
        width: "100%",
        borderRadius: "inherit",
        "& .leaflet-container": {
          height: "100%",
          width: "100%",
          borderRadius: "inherit",
          filter: "brightness(0.64) hue-rotate(-24deg) saturate(0.86)",
        },
      }}
    >
      <MapContainer
        ref={mapRef}
        zoom={MAX_ZOOM}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        center={[LATITUDE, LONGITUDE]}
        dragging={false}
        touchZoom={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        trackResize
      >
        <TileLayer
          url={MAP_URL}
          zoomOffset={0}
          minZoom={1}
          tileSize={256}
          eventHandlers={{
            tileloadstart: (event) => {
              event.tile.setAttribute("loading", "lazy");
            },
          }}
        />
      </MapContainer>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 64,
            height: 64,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              bgcolor: alpha(theme.palette.success.main, 0.2),
              opacity: 0.65,
              filter: "blur(6px)",
              animation: "map-ping 1.8s ease-in-out infinite",
              "@keyframes map-ping": {
                "0%": { transform: "scale(0.8)", opacity: 0.6 },
                "70%": { transform: "scale(1.2)", opacity: 0 },
                "100%": { transform: "scale(1.2)", opacity: 0 },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              bgcolor: alpha(theme.palette.success.main, 0.35),
              boxShadow: `0 0 22px ${alpha(theme.palette.success.main, 0.45)}`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
