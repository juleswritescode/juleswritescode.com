import Link from 'next/link';

type Props = {
  links: { href: string; label: string }[];
};

export function HeaderLinks({ links }: Props) {
  return (
    <ul className="flex justify-between text-gray-500 tracking-tight font-medium">
      {links.map(link => (
        <li key={link.label} className="hover:text-brand-accent transition">
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
