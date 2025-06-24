// app/api/weather/route.ts
import { NextResponse } from "next/server";

export const revalidate = 600; // re-fetch every 10 minutes

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing OPENWEATHER_API_KEY" },
      { status: 500 }
    );
  }

  // Fetch Montréal weather in metric units
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&units=metric&appid=${apiKey}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather" },
      { status: 502 }
    );
  }

  const { main } = await res.json();
  const temp = Math.round(main.temp); // e.g. 2.3 → 2

  return NextResponse.json({ temp });
}
