import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { PageHeader } from '../components/page-header';
import PostPreview from '../components/post-preview';
import { ProseContainer } from '../components/prose-container';
import { compareDesc } from 'date-fns';
import NewsletterSignup from '../components/newsletter';

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
          <PageHeader
            heading="Hi, I'm Jules!"
            subheading={
              <>
                <span>
                  I am a professional musician turned coder from Germany. I love
                  tech, and am fascinated with many new technologies. Too much,
                  maybe.
                </span>
                <br />
                <br />
                My goal is to build helpful applications for musicians, bring
                them to market and earn money. Everything about that fascinates
                me.
                <br />
                <br />
                So, I write about my journey, and about everything I learn along
                the way - my products, validation, marketing, tech,
                productivity, maybe even music.
              </>
            }
          />
          <div className="mt-12">
            <NewsletterSignup type="large" />
          </div>
          <ul className="mt-8 divide-y lg:divide-y-0">
            {allPosts.map(post => (
              <PostPreview post={post} key={post.slug} />
            ))}
          </ul>
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
