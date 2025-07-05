import { X, Info } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface CustomAlertProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

const CustomAlert = ({ isOpen, onClose, title = "Coming Soon!", message = "This feature is currently under development. Stay tuned for updates!" }: CustomAlertProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Alert Content */}
      <div className="relative w-full max-w-md mx-4">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black/90 backdrop-blur-xl shadow-2xl mt-40">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#a18cd1] via-[#393BB2] to-[#a18cd1] opacity-20 rounded-2xl" />
          
          {/* Content */}
          <div className="relative p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#a18cd1] to-[#393BB2]">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-400 hover:text-white" />
              </button>
            </div>
            
            {/* Message */}
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {message}
            </p>
            
            {/* Action Button */}
            <div className="flex justify-end">
              <Button
                onClick={onClose}
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  Got it!
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomAlert 