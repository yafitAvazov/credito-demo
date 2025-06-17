# Credito Notification Management System

A modern React-based mockup for managing automated customer notifications, built according to the Product Requirements Document.

## Features

- **Dashboard View**: Overview of all notification templates with statistics
- **Template Management**: Create, edit, and manage notification templates
- **Multi-Channel Support**: Email and SMS notification channels
- **Category Organization**: Templates organized by Status Change, Document Request, and Payment Due
- **Real-time Preview**: Live preview of template content with sample data
- **Search & Filter**: Find templates quickly with search and category filters
- **User Role Management**: Role-based access control simulation
- **Modern UI**: Clean, responsive design using Tailwind CSS

## Technology Stack

- **React 18.3.1** - Modern React with hooks
- **Vite 6.0.1** - Fast build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Inter Font** - Modern, readable typography

## Quick Start

```bash
# Create the project
npm create vite@latest credito-notification-system --template react

# Navigate to project directory
cd credito-notification-system

# Install dependencies
npm install

# Install additional dependencies
npm install lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm run dev
```

## Project Structure

```
credito-notification-system/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Tailwind CSS imports and custom styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Key Components

### Dashboard
- Template overview with statistics
- Search and filter functionality
- Quick actions for viewing and editing

### Template Editor
- Form-based editing interface
- Real-time content preview
- Channel-specific content management
- Character count for SMS templates

### User Management
- Role-based access simulation
- User profile display

## Features Implemented

✅ Template CRUD operations  
✅ Multi-channel support (Email/SMS)  
✅ Category-based organization  
✅ Real-time preview  
✅ Search and filtering  
✅ Responsive design  
✅ User role simulation  
✅ Modern React patterns  

## Best Practices Used

- **Functional Components**: Modern React with hooks
- **State Management**: Local state with useState
- **Component Structure**: Modular, reusable components
- **Accessibility**: Focus states and semantic HTML
- **Performance**: Efficient re-rendering patterns
- **Modern CSS**: Tailwind utility classes
- **Type Safety**: PropTypes-ready structure

## Future Enhancements

- TypeScript integration
- React Router for navigation
- State management with Zustand/Redux
- API integration
- Real-time notifications
- Advanced analytics
- A/B testing framework
- Multi-language support

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

The application will be available at `http://localhost:5173`