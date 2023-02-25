import { BaseIcon } from '../icons/base-icon';
import { IconType } from '../icons/typedef';
import { Toast, ToastLevel } from './toasts.interface';

type Props = {
  toast: Toast;
};

export function ToastMessage({ toast }: Props) {
  const toastWrapperColors = (() => {
    switch (toast.type) {
      case ToastLevel.Success:
        return 'bg-green-200';
      case ToastLevel.Error:
        return 'bg-red-600';
    }
  })();

  const toastHeadingColors = (() => {
    switch (toast.type) {
      case ToastLevel.Success:
        return 'text-green-800';
      case ToastLevel.Error:
        return 'text-red-50';
    }
  })();

  const toastTextColors = (() => {
    switch (toast.type) {
      case ToastLevel.Success:
        return 'text-green-700 font-light';
      case ToastLevel.Error:
        return 'text-red-100';
    }
  })();

  const ToastIcon = () => {
    switch (toast.type) {
      case ToastLevel.Success:
        return (
          <span className="text-base text-green-500/80">
            <BaseIcon icon={IconType.Check} />
          </span>
        );
      case ToastLevel.Error:
        return (
          <span className="text-base text-red-200">
            <BaseIcon icon={IconType.Error} />
          </span>
        );
    }
  };

  return (
    <div
      className={
        'w-96 py-4 px-6 rounded-md shadow-lg flex space-x-3 items-center' +
        ' ' +
        toastWrapperColors
      }
    >
      <ToastIcon />
      <div>
        <h3 className={'font-medium ' + toastHeadingColors}>{toast.title}</h3>
        <p className={'text-sm ' + toastTextColors}>{toast.description}</p>
      </div>
    </div>
  );
}
