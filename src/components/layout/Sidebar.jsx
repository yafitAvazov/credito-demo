import { Bell, BarChart3, Users, Settings } from 'lucide-react'
import { currentUser } from '../../data/mockData'

const Sidebar = ({ activeView, onViewChange }) => {
  const navigationItems = [
    { id: 'dashboard', icon: Bell, label: 'Templates' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'users', icon: Users, label: 'User Management' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <Bell className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="font-bold text-gray-900">Credito</h2>
          <p className="text-xs text-gray-500">Notification System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map(({ id, icon: Icon, label }) => (
          <button 
            key={id}
            onClick={() => onViewChange(id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
              activeView === id 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>

      {/* User Info */}
      <div className="mt-8 p-3 bg-gray-50 rounded-lg">
        <div className="text-sm font-medium text-gray-900">Current User</div>
        <div className="text-xs text-gray-500">{currentUser.name}</div>
        <div className="text-xs text-blue-600">{currentUser.role}</div>
      </div>
    </div>
  )
}

export default Sidebar