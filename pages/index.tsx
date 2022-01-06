import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';


export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Thomas Maximini
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Lead Developer at at{' '}
              <span className="font-semibold">Crowdcast</span>
            </h2>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
