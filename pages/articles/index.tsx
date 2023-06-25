import Layout from '../../components/layout';
import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import Post from '../../interfaces/post';
import PostPreview from '../../components/post-preview';
import { ProseContainer } from '../../components/prose-container';
import { compareDesc } from 'date-fns';
import { PageHeader } from '../../components/page-header';
import SearchBar from '../../components/search';
import { useState } from 'react';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  function filterPosts(searchInput: string) {
    const filtered = allPosts.filter(post => {
      const title = post.title.toLowerCase();
      return title.includes(searchInput.toLowerCase());
    });

    setFilteredPosts(filtered);
  }

  return (
    <>
      <Layout>
        <Head>
          <title>All Articles | JulesWritesCode</title>
        </Head>
        <ProseContainer>
          {/* Just a div to make sure the width never expands below max. */}
          <div className="w-screen"></div>
          <PageHeader
            heading="All Articles"
            subheading="Here you go. Everything I've come up with so far."
          />
          <div className="mt-12">
            <SearchBar
              labelText="Find Articles"
              onSearchInput={filterPosts}
              placeholder="That one article I read lately"
            />
          </div>
          <div className="mt-8">
            {filteredPosts.length ? (
              <ul className="divide-y lg:divide-y-0">
                {filteredPosts.map(post => (
                  <PostPreview post={post} key={post.slug} />
                ))}
              </ul>
            ) : (
              <div className="min-w-full">
                <p className="text-gray-600 font-light">
                  No posts matching your search.
                </p>
              </div>
            )}
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
  ]);

  const sortedByDate = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return {
    props: { allPosts: sortedByDate },
  };
};
