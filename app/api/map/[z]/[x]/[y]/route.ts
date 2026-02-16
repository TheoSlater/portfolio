import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAPTILER_STYLE = "streets-v2-dark";
const MAPTILER_TILE_BASE = "https://api.maptiler.com/maps";

function normalizeTileSegment(value: string) {
  return value.replace(/\.png$/i, "");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ z: string; x: string; y: string }> },
) {
  const { z: rawZ, x: rawX, y: rawY } = await params;
  const z = normalizeTileSegment(rawZ);
  const x = normalizeTileSegment(rawX);
  const y = normalizeTileSegment(rawY);

  const accessToken = process.env.MAPTILER_API_KEY;
  if (!accessToken) {
    return new NextResponse("Missing MAPTILER_API_KEY", { status: 500 });
  }

  const tileUrl = `${MAPTILER_TILE_BASE}/${MAPTILER_STYLE}/${z}/${x}/${y}.png?key=${accessToken}`;
  const tileResponse = await fetch(tileUrl);

  if (!tileResponse.ok) {
    return new NextResponse("Tile not found", { status: tileResponse.status });
  }

  const contentType =
    tileResponse.headers.get("content-type") || "image/png";

  return new NextResponse(tileResponse.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
