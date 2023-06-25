import Image from 'next/image';
import Layout from '../components/layout';
import Head from 'next/head';
import Post from '../interfaces/post';
import { PageHeader } from '../components/page-header';
import { ProseContainer } from '../components/prose-container';
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
          <title>About Me. | JulesWritesCode</title>
        </Head>
        <ProseContainer>
          <div className="flex justify-start gap-x-4 items-baseline">
            <div>
              <Image
                src="/myself.png"
                alt="Image of myself."
                height={180}
                width={180}
                className="-mb-2"
              />
            </div>
            <PageHeader heading="About Me" />
          </div>
          <div className="py-8">
            <style jsx scoped>
              {`
                strong {
                  font-weight: 500;
                }
              `}
            </style>
            <p className="text-gray-600 font-light leading-7">
              Before Covid, I was a professional musician. I{' '}
              <strong>studied bass guitar</strong> in the Netherlands. Being a
              musician taught me a lot about{' '}
              <strong>learning and practicing</strong>, because that's what you
              do - you sit in your little room, no sunlight, practice your
              instrument, and try to get better.
              <br />
              <br />
              Covid left every musician in Germany pretty much workless. A great
              opportunity to pick up some new skills! So, I started{' '}
              <strong>learning to code in March 2020.</strong> It's been my new
              passion ever since.
              <br />
              <br />
              There are a couple of ideas that I took from studying bass guitar,
              and applied them to coding, which helped me to learn quickly:
              <br />
              <br />I like to learn about <strong>first principles.</strong>
              <br />I want to completely master my <strong>vocabulary.</strong>
              <br />I try to learn by <strong>imitating others.</strong>
              <br />
              <br />
              With this blog, I want to share{' '}
              <strong>
                what I did and what I'm doing, explain my challenges, archive my
                learnings and answer questions that I had on my journey.
              </strong>
              <br />
              <br />
              If you like that, and you want to read about it, just visit
              regularly!
              <br />I try to write one post a week.
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
