import { useState } from 'react';

import { allDocuments } from 'contentlayer/generated';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { Footer } from '../components/Footer';
import { Blog as BlogType } from 'types';
import { compareDesc } from 'date-fns';

export default function Blog({ posts }: { posts: BlogType[] }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Container title="Blog – Thomas Maximini" description="My personal ramblings">
      <div className="flex flex-col items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16">
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts: BlogType[] = allDocuments.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
  return { props: { posts } };
}
