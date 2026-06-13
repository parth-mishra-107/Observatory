export async function getApod() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch APOD");
  }

  return res.json();
}

export async function getAsteroids() {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed/today?api_key=${process.env.NASA_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch asteroids");
  }

  return res.json();
}

export async function searchNASAImages(query: string) {
  const res = await fetch(
    `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`
  );

  if (!res.ok) {
    throw new Error("Failed to search NASA images");
  }

  return res.json();
}