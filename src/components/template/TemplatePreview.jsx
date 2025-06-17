const TemplatePreview = ({ template }) => {
  if (!template) return null

  return (
    <div className="space-y-4">
      <div>
        <strong>Name:</strong> {template.name}
      </div>
      <div>
        <strong>Category:</strong> {template.category}
      </div>
      <div>
        <strong>Channels:</strong> {template.channels.join(', ')}
      </div>
      <div>
        <strong>Status:</strong> {template.status}
      </div>
      
      {template.channels.includes('email') && (
        <div className="border rounded-lg p-4">
          <div className="font-medium mb-2">Email</div>
          <div className="border-b pb-2 mb-2">
            <strong>Subject:</strong> {template.content.subject}
          </div>
          <div className="text-sm">{template.content.email}</div>
        </div>
      )}

      {template.channels.includes('sms') && template.content.sms && (
        <div className="border rounded-lg p-4">
          <div className="font-medium mb-2">SMS</div>
          <div className="font-mono bg-gray-50 p-2 rounded text-sm">
            {template.content.sms}
          </div>
        </div>
      )}
    </div>
  )
}

export default TemplatePreview