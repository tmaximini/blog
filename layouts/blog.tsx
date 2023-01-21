import Image from 'next/image';
import { parseISO, format } from 'date-fns';


import type { PropsWithChildren } from 'react';
import type { Blog } from '../types';
import Container from '../components/Container';


export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Thomas Maximini`}
      description={post.summary}
      keywords={post.keywords}
      image={`https://maxi.io${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article">
      <article className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Thomas Maximini"
              height={24}
              width={24}
              src="/avatar.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-200">
              {'Thomas Maximini / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>


      </article>
    </Container>

  );
}
