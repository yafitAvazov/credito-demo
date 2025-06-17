const StatsCard = ({ icon, title, value, color = 'text-blue-600' }) => {
  return (
    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard