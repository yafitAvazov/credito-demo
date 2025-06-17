import { Mail, MessageSquare, Eye, Edit } from 'lucide-react'
import Button from '../ui/Button'

const TemplateTable = ({ templates, onEdit, onPreview }) => {
  const getChannelIcon = (channel) => {
    return channel === 'email' ? <Mail className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />
  }

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Status Change': 'bg-blue-100 text-blue-800',
      'Document Request': 'bg-yellow-100 text-yellow-800',
      'Payment Due': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Template
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channels
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Modified
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {templates.map((template) => (
            <tr key={template.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{template.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(template.category)}`}>
                  {template.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-1">
                  {template.channels.map(channel => (
                    <span key={channel} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs">
                      {getChannelIcon(channel)}
                      {channel}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(template.status)}`}>
                  {template.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {template.lastModified}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Eye />}
                    onClick={() => onPreview(template)}
                    className="!p-2"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Edit />}
                    onClick={() => onEdit(template)}
                    className="!p-2 text-blue-600 hover:text-blue-900"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TemplateTable