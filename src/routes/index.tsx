import { A } from 'solid-start';

import Counter from '~/components/Counter';

export default function Home() {
  return (
    <main class='mt-4 text-neutral-50  '>
      <section class='relative isolate mb-12 overflow-hidden'>
        {/* bg image */}
        <img
          src='https://ik.imagekit.io/s2mf0sfxw/Drumcrafter/Hero.png'
          alt=''
          class='absolute inset-0 -z-10 h-full  w-full object-cover opacity-50'
        />
        <div class='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950' />

        <div class='container mx-auto'>
          <div class='flex flex-col items-center justify-center  py-32 sm:py-48 lg:py-56'>
            <div class='text-center text-neutral-50'>
              <h1 class='text-5xl font-medium md:text-7xl'>
                Your Virtual <br /> Drum Machine
              </h1>
              <p class='text-md  text-neutral-300 mt-8'>
                Design your drum samples on-the-go for free!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How it Works Section */}
      <div class='container mx-auto'>
        <section
          id='audio-engine'
          class=' mx-auto  flex flex-col items-center justify-center text-center'>
          <h2 class='text-4xl font-medium text-neutral-50'>
            Choose Audio Engine
          </h2>
          <div class=''>
            <div class='py-24 sm:px-2 sm:py-32 lg:px-4'></div>
          </div>
        </section>
      </div>
    </main>
  );
}
