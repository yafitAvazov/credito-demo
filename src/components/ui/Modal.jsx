import { X } from 'lucide-react'
import Button from './Button'

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`bg-white rounded-lg ${maxWidth} w-full max-h-[80vh] overflow-auto`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Button
              variant="secondary"
              size="sm"
              icon={<X />}
              onClick={onClose}
              className="!p-2"
            />
          </div>
          
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal