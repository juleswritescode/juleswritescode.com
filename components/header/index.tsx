import Link from 'next/link';
import { ProseContainer } from '../prose-container';
import { HeaderLinks } from './header-links';

const links = [
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  return (
    <div className="mb-12 lg:mb-16 bg-white z-50 sticky top-0 w-full flex justify-center">
      <ProseContainer>
        <div className="relative w-full">
          <div className="absolute bg-white lg:rounded-md border-b lg:border-0 lg:shadow w-auto -inset-x-12 lg:-inset-x-20 -inset-y-2 -z-10"></div>
          <div className="w-full flex flex-row justify-between items-baseline pt-4 pb-2 space-y-2">
            <h2 className="font-medium text-2xl md:text-2xl text-gray-300 tracking-tight hover:text-brand-accent transition">
              <Link href="/">JulesWritesCode</Link>
            </h2>
            <HeaderLinks links={links} />
          </div>
        </div>
      </ProseContainer>
    </div>
  );
};

export default Header;
