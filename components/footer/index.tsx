import { ProseContainer } from '../prose-container';
import { BaseIcon } from '../icons/base-icon';
import { IconType } from '../icons/typedef';
import { SocialLinks } from '../../lib/links';
import NewsletterSignup from '../newsletter';

const icons = [
  {
    icon: IconType.Twitter,
    href: SocialLinks.Twitter,
  },
  {
    icon: IconType.Instagram,
    href: SocialLinks.Instagram,
  },
  { icon: IconType.Github, href: SocialLinks.Github },
  { icon: IconType.Medium, href: SocialLinks.Medium },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center">
      <ProseContainer>
        <div className="w-full relative py-4">
          <div className="absolute bg-white border-t w-auto -inset-x-12 lg:-inset-x-20 -inset-y-2 -z-10"></div>
          <NewsletterSignup type="large" />
          <div className="py-6 flex justify-between items-center">
            <p className="text-xs text-gray-400 hidden md:block">
              © Julian Domke, {year}
            </p>
            <p className="text-xs text-gray-400 md:hidden">
              © Julian Domke, {year}
            </p>
            <ul className="flex space-x-4 text-gray-500 opacity-90 text-lg">
              {icons.map(({ icon, href }) => (
                <SocialIcon icon={icon} key={icon} href={href} />
              ))}
            </ul>
          </div>
        </div>
      </ProseContainer>
    </div>
  );
};

function SocialIcon({ icon, href }: { icon: IconType; href: string }) {
  return (
    <li className="hover:text-brand-accent">
      <a href={href}>
        <BaseIcon icon={icon} />
      </a>
    </li>
  );
}

export default Footer;
