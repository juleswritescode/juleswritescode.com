import { createContext, useState } from 'react';
import { ToastMessage } from './toast-message';
import { Toast, ToastContextData, ToastLevel } from './toasts.interface';

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(toast: Partial<Toast>) {
    const completeToast: Toast = {
      id: Math.random().toString(36).substr(2, 9),
      type: ToastLevel.Success,
      title: 'Ups, forgot to toast',
      description: 'No description provided',
      dismissAfter: 5000,
      ...toast,
    };
    setToasts([...toasts, completeToast]);

    if (completeToast.dismissAfter) {
      setTimeout(() => {
        removeToast(completeToast.id);
      }, completeToast.dismissAfter);
    }
  }

  function removeToast(id: string) {
    setToasts(toasts => toasts.filter(t => t.id !== id));
  }

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {children}
      <div className="z-50 fixed w-full flex justify-center h-0 top-0">
        <ul className="absolute flex flex-col space-y-4 top-0 justify-center pt-8">
          {toasts.map(toast => (
            <ToastMessage toast={toast} key={toast.id} />
          ))}
        </ul>
      </div>
    </ToastContext.Provider>
  );
}
