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
];

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <ProseContainer>
        <div className="w-full relative py-4">
          <div className="absolute bg-white border-t w-auto -inset-x-12 lg:-inset-x-20 -inset-y-2 -z-10"></div>
          <NewsletterSignup type="small" />
          <div className="py-4 flex justify-between items-center">
            <p className="text-xs text-gray-400">
              © Julian Domke, 2023 &bull; jules@juleswritescode.com
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
