export async function getMarsPhotos(
  rover = "curiosity",
  perPage = 12
) {
  const res = await fetch(
    `https://api.marsvista.dev/api/v2/photos?rovers=${rover}&per_page=${perPage}&include=rover,camera`,
    {
      headers: {
        "X-API-Key": process.env.MARS_VISTA_API_KEY || "",
      },
    }
  );

  if (!res.ok) {
    const text = await res.text();

    throw new Error(
      `Mars Vista Error ${res.status}: ${text}`
    );
  }

  return res.json();
}