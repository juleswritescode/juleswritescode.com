import { IconType } from './icons/typedef';
import { BaseIcon } from './icons/base-icon';

export function FollowButton(props: {
  icon: IconType;
  text: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={props.href}
        className="text-gray-500 font-medium flex space-x-3 items-center transition group"
      >
        <span className="text-gray-500/80 group-hover:text-brand-accent">
          <BaseIcon icon={props.icon} />
        </span>
        <span className="group-hover:text-brand-accent">{props.text}</span>
      </a>
    </li>
  );
}
