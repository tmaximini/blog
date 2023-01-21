import { useState } from 'react';

import { InferGetStaticPropsType } from 'next';
import { pick } from '../lib/utils';
import { allBlogs } from '.contentlayer/data';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Link from 'next/link';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <div className="flex flex-col sm:flex-row items-start mt-8">
          <a
            target="_blank"
            title="Github"
            className="mr-4"
            href="https://github.com/tmaximini"
            rel="noreferrer"
          >
            Github
          </a>

          <a
            target="_blank"
            title="Instagram"
            className="mr-4"
            href="https://instagram.com/mxmn82"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            target="_blank"
            title="Soundcloud"
            className="mr-4"
            href="https://soundcloud.com/maximini"
            rel="noreferrer"
          >
            Soundcloud
          </a>
          <a
            target="_blank"
            title="Twitter"
            className="mr-4"
            href="https://twitter.com/tmaximini"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}
