import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import TemplateEditor from './components/template/TemplateEditor'
import TemplatePreview from './components/template/TemplatePreview'
import Modal from './components/ui/Modal'
import { initialTemplates } from './data/mockData'
import './App.css'

function App() {
  const [templates, setTemplates] = useState(initialTemplates)
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [editingTemplate, setEditingTemplate] = useState(null)
  const [showPreview, setShowPreview] = useState(false)

  // Handle template editing
  const handleEditTemplate = (template) => {
    setEditingTemplate({ ...template })
    setActiveView('edit')
  }

  // Handle new template creation
  const handleNewTemplate = () => {
    const newTemplate = {
      id: Date.now(), // Simple ID for mockup
      name: '',
      category: 'Status Change',
      channels: ['email'],
      status: 'active',
      lastModified: new Date().toISOString().split('T')[0],
      content: {
        subject: '',
        email: '',
        sms: ''
      }
    }
    setEditingTemplate(newTemplate)
    setActiveView('edit')
  }

  const handleSaveTemplate = () => {
    if (editingTemplate) {
      const updatedTemplate = {
        ...editingTemplate,
        lastModified: new Date().toISOString().split('T')[0]
      }

      // Check if it's a new template (no existing ID in templates array)
      const isNewTemplate = !templates.find(t => t.id === editingTemplate.id)
      
      if (isNewTemplate) {
        // Add new template
        setTemplates(prev => [...prev, updatedTemplate])
      } else {
        // Update existing template
        setTemplates(prev => 
          prev.map(t => t.id === editingTemplate.id ? updatedTemplate : t)
        )
      }
      
      setActiveView('dashboard')
      setEditingTemplate(null)
    }
  }

  const handleCancelEdit = () => {
    setActiveView('dashboard')
    setEditingTemplate(null)
  }

  // Handle template preview
  const handlePreviewTemplate = (template) => {
    setSelectedTemplate(template)
    setShowPreview(true)
  }

  const handleClosePreview = () => {
    setShowPreview(false)
    setSelectedTemplate(null)
  }

  // Render current view
  const renderCurrentView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <Dashboard
            templates={templates}
            onEditTemplate={handleEditTemplate}
            onPreviewTemplate={handlePreviewTemplate}
            onNewTemplate={handleNewTemplate}
          />
        )
      case 'edit':
        return (
          <TemplateEditor
            template={editingTemplate}
            onSave={handleSaveTemplate}
            onCancel={handleCancelEdit}
            onChange={setEditingTemplate}
          />
        )
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">Coming Soon</h2>
              <p className="text-gray-600">This feature is under development</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
      
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {renderCurrentView()}
        </main>
      </div>

      {/* Preview Modal */}
      <Modal
        isOpen={showPreview}
        onClose={handleClosePreview}
        title="Template Preview"
      >
        <TemplatePreview template={selectedTemplate} />
      </Modal>
    </div>
  )
}

export default App