/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import Link from "next/link";
import Container from '../components/Container';


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            maxi.io
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-6 text-black dark:text-white">
            Thomas Maximini
            </h1>
            
            <p className="text-gray-600 dark:text-white mb-16 text-lg font-bold">
            Software Engineer at <a href="https://crowdcast.io">Crowdcast</a>. Based in Limburg, Germany. <br />
            </p>

          </div>
          <div className="w-[80px] md:w-[200px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Thomas Maximini"
              height={400}
              width={400}
              src="/tom_berlin.png"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start">
          <Link href='/blog'>
          <a title="Blog" className="mr-4">Blog</a>
          </Link>
          <a target="_blank" title="Github" className="mr-4" href='https://github.com/tmaximini' rel="noreferrer">Github</a>
          <a target="_blank" title="Twitter" className="mr-4" href='https://twitter.com/tmaximini' rel="noreferrer">Twitter</a>
          <a target="_blank" title="Instagram" className="mr-4" href='https://instagram.com/mxmn82' rel="noreferrer">Instagram</a>
          <a target="_blank" title="Soundcloud" className="mr-4" href='https://soundcloud.com/maximini' rel="noreferrer">Soundcloud</a>
      </div>
      </div>
    </Container>
  );
}
