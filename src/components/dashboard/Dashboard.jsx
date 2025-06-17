import { useState } from 'react'
import { Bell, Activity, Mail, MessageSquare, Plus } from 'lucide-react'
import Button from '../ui/Button'
import SearchFilter from '../ui/SearchFilter'
import StatsCard from './StatsCard'
import TemplateTable from './TemplateTable'
import { categories } from '../../data/mockData'

const Dashboard = ({ templates, onEditTemplate, onPreviewTemplate, onNewTemplate }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  // Filter templates based on search and category
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || template.category === filterCategory
    return matchesSearch && matchesCategory
  })

  // Calculate statistics
  const stats = {
    total: templates.length,
    active: templates.filter(t => t.status === 'active').length,
    email: templates.filter(t => t.channels.includes('email')).length,
    sms: templates.filter(t => t.channels.includes('sms')).length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notification Templates</h1>
          <p className="text-gray-600">Manage automated customer notifications</p>
        </div>
        <Button icon={<Plus />} onClick={onNewTemplate}>
          New Template
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard
          icon={<Bell />}
          title="Total Templates"
          value={stats.total}
          color="text-blue-600"
        />
        <StatsCard
          icon={<Activity />}
          title="Active"
          value={stats.active}
          color="text-green-600"
        />
        <StatsCard
          icon={<Mail />}
          title="Email Templates"
          value={stats.email}
          color="text-purple-600"
        />
        <StatsCard
          icon={<MessageSquare />}
          title="SMS Templates"
          value={stats.sms}
          color="text-orange-600"
        />
      </div>

      {/* Search and Filter */}
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterValue={filterCategory}
        onFilterChange={setFilterCategory}
        filterOptions={categories}
        placeholder="Search templates..."
      />

      {/* Templates Table */}
      <TemplateTable
        templates={filteredTemplates}
        onEdit={onEditTemplate}
        onPreview={onPreviewTemplate}
      />
    </div>
  )
}

export default Dashboard