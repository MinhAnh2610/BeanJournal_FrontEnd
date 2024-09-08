import { Search } from "lucide-react"

const SearchIcon = () => {
  return (
    <div className="flex items-center">
        <Search className="w-6 h-6 text-gray-500" />
        <p className="text-lg font-semibold pl-4 text-gray-400">Search diaries</p>
    </div>
  )
}

export default SearchIcon