import markdownStyles from '../components/markdown-styles.module.css';

import Image from 'next/image';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { PageHeader } from '../components/page-header';
import PostPreview from '../components/post-preview';
import { ProseContainer } from '../components/prose-container';
import { compareDesc } from 'date-fns';
import NewsletterSignup from '../components/newsletter';
import { IconType } from '../components/icons/typedef';
import { SocialLinks } from '../lib/links';
import { FollowButton } from '../components/FollowButton';
import SectionSeparator from '../components/section-separator';
import Link from 'next/link';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Well, hello there! | JulesWritesCode</title>
        </Head>
        <ProseContainer>
          <div>
            <div>
              <Image
                src="/myself.png"
                alt="Image of myself."
                height={180}
                width={180}
                className="-mb-2 -ml-2"
              />
            </div>
            <PageHeader heading="Hi, I'm Jules!" />
          </div>
          <div className={'mt-12'}>
            <div className={markdownStyles['markdown']}>
              <p>
                I am a professional musician turned coder from Germany. I love
                tech, and am fascinated with many new technologies. Too much,
                maybe.
              </p>
              <p>
                My goal is to build helpful applications for musicians, bring
                them to market and earn money. Everything about that fascinates
                me.
              </p>
              <p>
                So, I write about my journey, and about everything I learn along
                the way - my products, validation, marketing, tech,
                productivity, maybe even music.
              </p>
            </div>
          </div>
          <SectionSeparator />
          <ul className="divide-y lg:divide-y-0">
            {allPosts.map(post => (
              <PostPreview post={post} key={post.slug} />
            ))}
          </ul>
          <div className="text-right mt-6">
            <Link
              href="/articles"
              className="text-brand-accent hover:text-blue-700"
            >
              More Articles &rarr;
            </Link>
          </div>
          <SectionSeparator />
          <div className="mt-16">
            <ul className="space-y-1">
              {[
                {
                  icon: IconType.Github,
                  text: 'Follow on Github',
                  href: SocialLinks.Github,
                },
                {
                  icon: IconType.Twitter,
                  text: 'Follow on X',
                  href: SocialLinks.Twitter,
                },
                {
                  icon: IconType.Instagram,
                  text: 'Follow on Instagram',
                  href: SocialLinks.Instagram,
                },
                {
                  icon: IconType.Medium,
                  text: 'Follow on Medium',
                  href: SocialLinks.Medium,
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

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'language',
  ]);

  const sortedByDate = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return {
    props: { allPosts: sortedByDate.slice(0, 5) },
  };
};
