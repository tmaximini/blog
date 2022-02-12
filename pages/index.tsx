import Image from 'next/image';
import Link from 'next/link';

import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Thomas Maximini
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer and Product Manager
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
            I design and implement systems and services around web and cloud technologies.
            </p>
          </div>
          <div className="w-[80px] md:w-[120px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Thomas Maximini"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div>
          <BlogPostCard
            title="Serverless GraphQL on AWS Lambda"
            slug="serverless-graphql"
          />
          <BlogPostCard
            title="Rust Is The Future of JavaScript Infrastructure"
            slug="rust"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
          />
        </div>
      </div>
    </Container>
  );
}
