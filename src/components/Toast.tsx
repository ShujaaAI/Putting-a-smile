import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#1D3C6E] text-white rounded-xl p-4 shadow-2xl border border-[#689FF1]/40 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-[#FAEB8E] shrink-0 mt-0.5" />
      <div className="flex-1 text-xs sm:text-sm font-medium text-white">
        {message}
      </div>
      <button
        onClick={onDismiss}
        className="text-[#9ABDE3] hover:text-white p-1 rounded-md cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
