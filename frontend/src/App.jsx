import { useState } from "react";
import SearchSection from "./components/SearchSection";

export default function App() {
  const [weather, setWeather] = useState(null); // store weather data here

  return (
    <>
      {/* Pass the setter to SearchSection */}
      <SearchSection setWeather={setWeather} />

      <div className="relative min-h-screen w-full bg-[url('/Weather_Body_Background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content sits above the background */}
        <div className="relative z-10 p-10 flex flex-col gap-10">
          
          {/* Weather Data Card */}
          <div className="grid border border-white/50 bg-white/20 backdrop-blur-sm rounded-lg w-64 h-40 p-4 text-white shadow-lg">
            {weather ? (
              <>
                <h2 className="font-bold text-lg">
                  {weather.resolvedAddress || weather.address || "Unknown location"}
                </h2>
                <p>Temp: {weather.currentConditions?.temp ?? "N/A"}°</p>
                <p>Conditions: {weather.currentConditions?.conditions ?? "N/A"}</p>
              </>
            ) : (
              <p>Search for a city to see weather data</p>
            )}
          </div>

          {/* More Info Card */}
          <div className="grid border border-white/50 bg-white/20 backdrop-blur-sm rounded-lg w-64 h-40 p-4 text-white shadow-lg">
            {weather ? (
              <>
                <p>Humidity: {weather.currentConditions?.humidity ?? "N/A"}%</p>
                <p>Wind Speed: {weather.currentConditions?.windspeed ?? "N/A"} km/h</p>
                <p>Source: {weather.source ?? "Visual Crossing"}</p>
              </>
            ) : (
              <p>Additional info will appear here</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

