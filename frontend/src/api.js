const base = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchWeather(location) {
    const res = await fetch(`${base}/api/weather?location=${encodeURIComponent(location)}`);
    if (!res.ok) throw new Error("Failed to fetch weather");
    const payload = await res.json();
    return payload.data;
}