import { For } from 'solid-js';
import { A } from 'solid-start';

const audioEngines = [
  {
    title: 'Kick',
    href: '/kick',
  },
  {
    title: 'Snare',
    href: '/snare',
  },
  {
    title: 'Hi-Hat',
    href: '/hihat',
  },
];
export default function Home() {
  return (
    <main class='mt-4 text-neutral-50   '>
      <section class='relative isolate mb-12 overflow-hidden min-h-screen'>
        {/* bg image */}
        <img
          src='https://ik.imagekit.io/s2mf0sfxw/Drumcrafter/Hero.png'
          alt=''
          class='absolute inset-0 -z-10 h-full  w-full object-cover opacity-50'
        />
        <div class='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950' />
        <div class='absolute inset-0 -z-10 h-full w-full  bg-grain' />

        <div class='container mx-auto'>
          <div class='flex flex-col items-center justify-center  py-32 sm:py-48 lg:py-56'>
            <div class='text-center text-neutral-50'>
              <h1 class='text-6xl font-medium md:text-9xl bg-grain-dark bg-clip-text text-transparent bg-neutral-50'>
                Your Virtual <br /> Drum Machine
              </h1>
              <p class='text-xl sm:text-2xl  text-neutral-300 mt-8'>
                Design your drum samples on-the-go for free!
              </p>
            </div>
            <div class='mt-24'>
              <A
                href='/choose-engine'
                class='mt-6 rounded-lg border border-neutral-50 px-8 py-4 hover:border-neutral-400 hover:text-neutral-400 font-bold'>
                Get Started
              </A>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
