
import { Search } from "lucide-react"

export default function SearchSection() {
  return (
  <div className="relative bg-[url('/Weather_App_Space.png')] bg-cover bg-center bg-no-repeat h-screen w-screen flex justify-center items-center">
      <form className="flex flex-col justify-center items-center pt-20" action="/search" method="get">
        <div className="relative w-72">
          {/* Search Icon inside input */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
          <input
            className="bg-gray-100 pl-10 pr-3 py-2 w-full rounded-lg border border-blue-400 focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-700 placeholder:italic shadow-sm"
            type="search"
            id="search-input"
            name="query"
            placeholder="Search city or location..."
          />
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center bg-sky-600 text-white rounded-lg mt-3 px-4 py-2 hover:bg-sky-500 transition duration-200 shadow-md"
          type="submit"
        >
          <Search size={16} className="mr-1" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
