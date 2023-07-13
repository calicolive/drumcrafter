import { A } from '@solidjs/router';
import { Component, Show, createSignal } from 'solid-js';

const Header: Component<{}> = (props) => {
  return (
    <header class='sticky top-0 z-30 flex h-16 w-full bg-neutral-950 bg-grain items-center justify-between px-6 text-neutral-50  md:relative '>
      <div class='flex-1'></div>
      <div class='flex items-center space-x-2'>
        <a href={'/'} class='text-2xl font-bold tracking-tight '>
          <p class='bg-grain-dark bg-clip-text text-transparent bg-neutral-50'>
            DRUMCRAFTER
          </p>
        </a>
      </div>
      {/* desktop Nav */}
      <nav class=' hidden flex-1 space-x-2 text-right md:block'>
        <A href='/' class=' px-4 py-2 hover:text-neutral-400'>
          Home
        </A>
        <A href='/choose-engine' class=' px-4 py-2 hover:text-neutral-400'>
          Drum Designer
        </A>
      </nav>
      {/* mobile nav */}
      <div class='flex-1 text-right md:hidden'> </div>
    </header>
  );
};

export default Header;
