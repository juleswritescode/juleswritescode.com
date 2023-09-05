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

  const invalid = Number.isNaN(date.getTime());

  const d = invalid ? new Date('1970-01-01') : date;

  return (
    <div className={sizeClass}>
      <time dateTime={d.toISOString()} className="text-gray-500">
        {format(d, 'MMM do, yyyy')}
      </time>
    </div>
  );
}
