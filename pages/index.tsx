/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Hi, I'm Thomas 👋
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-16">
            I am a software engineer based in Limburg, Germany. <br />
            I specialize in web and cloud technologies.<br />
            Currently I work at <a href="https://crowdcast.io">Crowdcast</a>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
            <Image
              alt="My dog Laika"
              width={400}
              height={400}
              src="/static/images/laika.jpg"
            /> <br />
            This is my dog Laika. <br />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
            In my free time I enjoy hiking, nature, travelling and producing music. <br />
            </p>
          </div>
          <div className="w-[80px] md:w-[120px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Thomas Maximini"
              height={200}
              width={200  }
              src="/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div>
          <BlogPostCard
            title="Serverless GraphQL on AWS Lambda"
            slug="serverless-graphql"
          />
        </div> */}
      </div>
    </Container>
  );
}
