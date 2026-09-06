"use client";

import { useToastStore } from '@/lib/store/useToastStore';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';


export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="pointer-events-auto flex items-center gap-3 bg-white text-black border border-gray-200 shadow-lg rounded-md p-4 min-w-[300px] animate-in slide-in-from-right-8 fade-in duration-300"
        >
          {toast.type === 'error' && <XCircle className="text-red-500 w-5 h-5 shrink-0" />}
          {toast.type === 'success' && <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />}
          {(!toast.type || toast.type === 'info') && <Info className="text-blue-500 w-5 h-5 shrink-0" />}
          <span className="flex-1 text-sm font-medium">{toast.message}</span>
          <button onClick={() => removeToast(toast.id)} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
