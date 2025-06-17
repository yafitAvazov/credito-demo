import { Search, Filter } from 'lucide-react'

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  filterValue, 
  onFilterChange, 
  filterOptions,
  placeholder = "Search..." 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">All Categories</option>
            {filterOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter