import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { PageHeader } from '../components/page-header';
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
              Before Corona, I was a professional musician. I studied bass
              guitar in the Netherlands. Being a musician taught me a lot about
              learning and practicing, because that's what you do - you sit in
              your little room, practice your instrument, and try to get better.
              <br />
              <br />
              Corona left every musician in Germany pretty much workless. What a
              nice opportunity to pick up some new skills! I started learning to
              code in March 2020. It's been my new passion ever since.
              <br />
              <br />
              There are a couple of ideas that I took from studying bass guitar,
              and applied them to coding, and they helped me to learn quickly. I
              want to learn about first principles. I want to completely master
              my "vocabulary". I want to learn by imitating others.
              <br />
              <br />
              With this blog, I'm going to share what I did, pose some
              challenges, give you references on what it takes to create a
              marketable application, and answer questions that I had on my
              journey.
              <br />
              <br />
              It's about making it possible for you to grow as quickly as you
              can.
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
