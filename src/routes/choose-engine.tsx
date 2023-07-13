import { A } from '@solidjs/router';
import { For, Show } from 'solid-js';

const audioEngines = [
  {
    title: 'Kick',
    href: '/kick',
    comingSoon: false,
  },
  {
    title: 'Snare',
    href: '',
    comingSoon: true,
  },
  {
    title: 'Hi-Hat',
    href: '',
    comingSoon: true,
  },
];

export default function ChooseEngine() {
  return (
    <main class='mt-12 text-neutral-50 sm:py-64'>
      <div class='container mx-auto'>
        <section
          id='audio-engine'
          class='flex flex-col items-center text-center  sm:my-48'>
          <h2 class='text-4xl font-medium bg-grain-dark bg-clip-text text-transparent bg-neutral-50'>
            What do you want to design?
          </h2>
          <div class=''>
            <div class='mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              <For each={audioEngines}>
                {(audioEngine) => (
                  <div class='relative flex-1  w-96'>
                    <div class='overflow-hidden relative p-[2px] rounded-xl'>
                      <span class='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#f472b6_50%,#6366f1_100%)] ' />
                      <A href={audioEngine.href} class='relative h-full w-full'>
                        <div class='relative isolate overflow-hidden rounded-xl hover:brightness-125 bg-zinc-950  bg-grain px-6 py-24 shadow-2xl sm:px-24 xl:py-32'>
                          <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent '>
                            {audioEngine.title}
                          </h1>
                        </div>
                      </A>
                    </div>
                    <div class='px-6'>
                      <Show when={audioEngine.comingSoon} fallback={null}>
                        <p class='absolute top-0 bg-indigo-400 text-neutral-50 px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-sm -translate-y-1/2 overflow-auto bg-grain-dark'>
                          Coming Soon!
                        </p>
                      </Show>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
