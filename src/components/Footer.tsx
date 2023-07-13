import { Component, For } from 'solid-js';

import { BsInstagram, BsGithub, BsYoutube } from 'solid-icons/bs';
import { A } from '@solidjs/router';

const navigation = {
  main: [
    { name: 'About', href: '/About' },
    { name: 'Contact', href: '/Contact' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'http://instagram.com/calicolive',
      icon: <BsInstagram class='w-8 h-8 text-neutral-300' />,
    },

    {
      name: 'GitHub',
      href: 'https://github.com/calicolive',
      icon: <BsGithub class='w-8 h-8 text-neutral-300' />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@calicolive',
      icon: <BsYoutube class='w-8 h-8 text-neutral-300' />,
    },
  ],
};

const Footer: Component<{}> = (props) => {
  return (
    <footer class='bg-neutral-950 bg-grain'>
      <div class='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <div class='mb-8 border border-t border-neutral-900' />
        <nav
          class='-mb-6 flex columns-2 justify-center space-x-12'
          aria-label='Footer'>
          <For each={navigation.main}>
            {(link) => (
              <A
                href={link.href}
                class='text-base text-neutral-50 hover:text-neutral-200'>
                {link.name}
              </A>
            )}
          </For>
        </nav>
        <div class='mt-24 flex justify-center space-x-10'>
          <For each={navigation.social}>
            {(link) => (
              <A href={link.href} class=''>
                <span class='sr-only'>{link.name}</span>
                {link.icon}
              </A>
            )}
          </For>
        </div>
        <p class='mt-10 text-center text-xs leading-5 text-neutral-500'>
          &copy; 2023 Drumcrafter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
