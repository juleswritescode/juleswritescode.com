import { format } from 'date-fns';

type Props = {
  date: Date;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function BaseDateFormat({ date, size }: Props) {
  const sizeClass = (() => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
    }
  })();

  return (
    <div className={sizeClass}>
      <time dateTime={date.toISOString()} className="text-gray-500">
        {format(date, 'MMM do, yyyy')}
      </time>
    </div>
  );
}
