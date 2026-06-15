import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
) {
  const rover =
    request.nextUrl.searchParams.get("rover") ||
    "perseverance";

  const perPage =
    request.nextUrl.searchParams.get("perPage") ||
    "12";

  const camera =
    request.nextUrl.searchParams.get("camera") ||
    "";

  const cameraQuery = camera
    ? `&cameras=${camera}`
    : "";

  const url =
    `https://api.marsvista.dev/api/v2/photos` +
    `?rovers=${rover}` +
    `&per_page=${perPage}` +
    `${cameraQuery}` +
    `&include=rover,camera` +
    `&min_width=1000` +
    `&min_height=500`;

  const res = await fetch(url, {
    headers: {
      "X-API-Key":
        process.env.MARS_VISTA_API_KEY!,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      {
        error: "Failed to fetch Mars photos",
      },
      {
        status: res.status,
      }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}