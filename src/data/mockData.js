// Mock data for notification templates
export const initialTemplates = [
  {
    id: 1,
    name: 'Application Approved',
    category: 'Status Change',
    channels: ['email', 'sms'],
    status: 'active',
    lastModified: '2025-06-15',
    content: {
      subject: 'Great news! Your application has been approved',
      email: 'Dear {customer_name}, your application #{application_id} has been approved for ${amount}.',
      sms: 'Approved! App #{application_id} for ${amount}. Check email for details.'
    }
  },
  {
    id: 2,
    name: 'Document Required',
    category: 'Document Request',
    channels: ['email'],
    status: 'active',
    lastModified: '2025-06-14',
    content: {
      subject: 'Additional documents needed for your application',
      email: 'Hi {customer_name}, we need additional documents for application #{application_id}. Please upload by {due_date}.',
      sms: ''
    }
  },
  {
    id: 3,
    name: 'Payment Due Reminder',
    category: 'Payment Due',
    channels: ['email', 'sms'],
    status: 'inactive',
    lastModified: '2025-06-10',
    content: {
      subject: 'Payment reminder for your account',
      email: 'Dear {customer_name}, your payment of ${amount} is due on {due_date}.',
      sms: 'Payment of ${amount} due {due_date}. Pay now to avoid late fees.'
    }
  }
]

export const categories = ['Status Change', 'Document Request', 'Payment Due']

export const currentUser = {
  name: 'admin@credito.com',
  role: 'Customer Success Manager'
}