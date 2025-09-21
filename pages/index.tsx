/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import Link from 'next/link';
import Container from '../components/Container';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start pb-16 mx-auto max-w-3xl border-gray-200 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="my-6 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              Thomas Maximini
            </h1>

            <p className="mb-8 text-lg font-bold text-gray-600 dark:text-white">
              Software Engineer.
            </p>
            <p className="mb-16 text-sm font-normal text-gray-600 dark:text-white prose">
              Thanks for stopping by! ✌️
              <br />
              <br />
              Here I write about software development, lifestyle and personal things.
              I work at at <a href="https://crowdcast.io">Crowdcast</a>.
              <br />
              <br />
              As a self-improvement enthusiast, I am interested in using technology as a means to improve our daily lives.
              That's why I'm currently working on a new project called <a href="https://maxi.io">Maxi.io</a>, an AI companion and habit tracker. Check it out!
              <br />
              <br />
              When I am not working you can find me traveling to new places, spending time outside
              with my dog or making music.
              Check out some of my DJ Mixes below or head over to my <a href="https://soundcloud.com/maximini">Soundcloud</a>.
              <br /><br />

              Hit me up on <a href="https://x.com/tmaximini">Twitter / X</a> or shoot me an email if you want to connect! 🤝
              <br />
            </p>
          </div>
          <div className="w-[80px] md:w-[200px] hidden md:block relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Thomas Maximini"
              height={400}
              width={400}
              src="/nepal.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
        </div>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1549664008&color=%239a2b2b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>

        <Footer />
      </div>
    </Container>
  );
}
