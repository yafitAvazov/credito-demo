import { Save, X } from 'lucide-react'
import Button from '../ui/Button'
import { categories } from '../../data/mockData'

const TemplateEditor = ({ template, onSave, onCancel, onChange }) => {
  if (!template) return null

  const handleInputChange = (field, value) => {
    onChange({ ...template, [field]: value })
  }

  const handleContentChange = (field, value) => {
    onChange({
      ...template,
      content: { ...template.content, [field]: value }
    })
  }

  const handleChannelChange = (channel, checked) => {
    const channels = checked
      ? [...template.channels, channel]
      : template.channels.filter(c => c !== channel)
    handleInputChange('channels', channels)
  }

  const isNewTemplate = !template.name

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isNewTemplate ? 'Create New Template' : 'Edit Template'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isNewTemplate 
              ? 'Create a new notification template for your customers' 
              : 'Modify notification template content and settings'
            }
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" icon={<X />} onClick={onCancel}>
            Cancel
          </Button>
          <Button icon={<Save />} onClick={onSave}>
            {isNewTemplate ? 'Create Template' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Settings Panel */}
        <div className="xl:col-span-1">
          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Settings</h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Template Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={template.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={isNewTemplate ? "Enter template name (e.g., Payment Confirmation)" : "Enter template name"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={template.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Channels
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={template.channels.includes('email')}
                      onChange={(e) => handleChannelChange('email', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium">📧 Email</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={template.channels.includes('sms')}
                      onChange={(e) => handleChannelChange('sms', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium">📱 SMS</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={template.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <option value="active">✅ Active</option>
                  <option value="inactive">⏸️ Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="xl:col-span-2 space-y-6">
          {template.channels.includes('email') && (
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📧 Email Content</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={template.content.subject}
                    onChange={(e) => handleContentChange('subject', e.target.value)}
                    placeholder={isNewTemplate ? "Your notification subject (e.g., Your application has been approved!)" : "Your notification subject..."}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    value={template.content.email}
                    onChange={(e) => handleContentChange('email', e.target.value)}
                    placeholder={isNewTemplate ? "Dear {customer_name}, we wanted to let you know that your application #{application_id} has been processed..." : "Dear {customer_name}, we wanted to let you know..."}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Use variables: {'{customer_name}'}, {'{application_id}'}, {'{amount}'}, {'{due_date}'}
                  </p>
                </div>

                {/* Email Preview */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">📱 Email Preview</h4>
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      {template.content.subject.replace(/{(\w+)}/g, 'John Doe') || 'Subject preview...'}
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {template.content.email
                        .replace(/{customer_name}/g, 'John Doe')
                        .replace(/{application_id}/g, '12345')
                        .replace(/{amount}/g, '5,000')
                        .replace(/{due_date}/g, 'June 25, 2025') || 'Email content preview...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {template.channels.includes('sms') && (
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">📱 SMS Content</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SMS Message
                  <span className={`ml-2 text-xs ${
                    template.content.sms.length > 160 ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    ({template.content.sms.length}/160 characters)
                  </span>
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
                  value={template.content.sms}
                  onChange={(e) => handleContentChange('sms', e.target.value)}
                  maxLength={160}
                  placeholder={isNewTemplate ? "Keep it short: App #{application_id} approved for ${amount}. Details in email." : "Keep it short and sweet..."}
                />
                
                {/* SMS Preview */}
                <div className="mt-4 flex justify-center">
                  <div className="bg-blue-500 text-white rounded-2xl px-4 py-3 max-w-xs shadow-lg">
                    <div className="text-sm font-mono">
                      {template.content.sms
                        .replace(/{customer_name}/g, 'John')
                        .replace(/{application_id}/g, '12345')
                        .replace(/{amount}/g, '5,000')
                        .replace(/{due_date}/g, '6/25') || 'SMS preview...'}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TemplateEditor