export enum ToastLevel {
  Success = 'success',
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
}

export type Toast = {
  id: string;
  title: string;
  description: string;
  type: ToastLevel;
  dismissAfter: number;
};

export type ToastContextData = {
  addToast: (toast: Partial<Toast>) => void;
  removeToast: (id: string) => void;
};
