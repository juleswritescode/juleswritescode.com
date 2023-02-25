import {
  FaBug,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaCheckCircle,
} from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { IconType } from './typedef';

// https://react-icons.github.io/react-icons

type Props = {
  icon: IconType;
};

export function BaseIcon({ icon }: Props) {
  switch (icon) {
    case IconType.Facebook:
      return <FaFacebook />;
    case IconType.Instagram:
      return <FaInstagram />;
    case IconType.Github:
      return <FaGithub />;
    case IconType.Twitter:
      return <FaTwitter />;
    case IconType.Loading:
      return <AiOutlineLoading3Quarters />;
    case IconType.Check:
      return <FaCheckCircle />;
    case IconType.Error:
      return <MdError />;
    default:
      return <FaBug />;
  }
}
