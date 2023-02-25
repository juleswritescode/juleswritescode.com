import { BaseIcon } from '../icons/base-icon';
import { IconType } from '../icons/typedef';

export function LoadingSpinner() {
  return (
    <span className="animate-spin">
      <BaseIcon icon={IconType.Loading} />
    </span>
  );
}
