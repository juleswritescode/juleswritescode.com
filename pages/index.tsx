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
          <title>Welcome to my blog.</title>
        </Head>
        <ProseContainer>
          <PageHeader
            heading="Hi, I'm Jules!"
            subheading={`If you're a Junior Indie Hacker, this is the blog for you. If you're like me, you have a mountain of questions. I want to share my answers, and talk about problems and stumbling blocks that you will encounter, to make it easy for you to learn and grow.`}
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
  ]);

  const sortedByDate = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return {
    props: { allPosts: sortedByDate.slice(0, 5) },
  };
};
