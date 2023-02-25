import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { PageHeader } from '../components/welcome';
import PostPreview from '../components/post-preview';
import { ProseContainer } from '../components/prose-container';
import { compareDesc } from 'date-fns';
import NewsletterSignup from '../components/newsletter';
import { BaseIcon } from '../components/icons/base-icon';
import { IconType } from '../components/icons/typedef';
import { SocialLinks } from '../lib/links';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>About Me.</title>
        </Head>
        <ProseContainer>
          <PageHeader heading="About Me" />
          <div className="py-8">
            <p className="text-gray-600 font-light leading-7">
              Lorem The only thing I loved more than computers as a kid was
              space. When I was 8, I climbed the 40-foot oak tree at the back of
              our yard while wearing my older sister’s motorcycle helmet,
              counted down from three, and jumped — hoping the tree was tall
              enough that with just a bit of momentum I’d be able to get to
              orbit. I spent the next few summers indoors working on a rocket
              design, while I recovered from the multiple surgeries it took to
              fix my badly broken legs. It took nine iterations, but when I was
              15 I sent my dad’s Blackberry into orbit and was able to transmit
              a photo back down to our family computer from space. Today, I’m
              the founder of Planetaria, where we’re working on civilian space
              suits and manned shuttle kits you can assemble at home so that the
              next generation of kids really can make it to orbit — from the
              comfort of their own backyards.
            </p>
          </div>
          <div className="border-t py-8 flex justify-end">
            <ul className="space-y-2">
              {[
                {
                  icon: IconType.Github,
                  text: 'Follow on Github',
                  href: SocialLinks.Github,
                },
                {
                  icon: IconType.Twitter,
                  text: 'Follow on Twitter',
                  href: SocialLinks.Twitter,
                },
                {
                  icon: IconType.Instagram,
                  text: 'Follow on Instagram',
                  href: SocialLinks.Instagram,
                },
              ].map(props => (
                <FollowButton {...props} />
              ))}
            </ul>
          </div>
        </ProseContainer>
      </Layout>
    </>
  );
}

function FollowButton(props: { icon: IconType; text: string; href: string }) {
  return (
    <li>
      <a
        href={props.href}
        className="text-gray-500 font-semibold flex space-x-4 items-center transition hover:text-brand-accent"
      >
        <BaseIcon icon={props.icon} />
        <span>{props.text}</span>
      </a>
    </li>
  );
}
