import SearchSection from "./components/SearchSection";

export default function App() {
  return (
    <>
    <SearchSection/>
    <div className="relative min-h-screen w-full bg-[url('/Weather_Body_Background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content sits above the background */}
  <div className="relative z-10 p-10">
    
    <div className="grid border border-white/50 bg-white/20 backdrop-blur-sm rounded-lg w-64 h-40 p-4 text-white shadow-lg">
      Weather Data
    </div>
    <div className="grid border border-white/50 bg-white/20 backdrop-blur-sm rounded-lg w-64 h-40 mt-10 p-4 text-white shadow-lg">
      More Info
    </div>
  </div>
</div>
    
    </>
  );
}
