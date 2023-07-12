import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@ark-ui/solid';
import { Portal } from 'solid-js/web';

const Header: Component<{}> = (props) => {
  return (
    <header class='sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-neutral-950  px-6 text-neutral-50 shadow-lg md:relative '>
      <div class='flex-1'></div>
      <div class='flex items-center space-x-2'>
        <A href={'/'} class='text-2xl font-bold tracking-tight'>
          <p>DRUMCRAFTER</p>
        </A>
      </div>
      {/* desktop Nav */}
      <nav class=' hidden flex-1 space-x-12 text-right   md:block'>
        <A
          href='/'
          class='rounded-lg border border-neutral-50 px-4 py-2 hover:border-neutral-400 hover:text-neutral-400'>
          Get Started
        </A>
      </nav>
      {/* mobile nav */}
      <div class='flex-1 text-right md:hidden'>
        <Dialog>
          <DialogTrigger>
            <button>Open Dialog</button>
          </DialogTrigger>
          <Portal>
            <DialogBackdrop />
            <DialogContainer>
              <DialogContent>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog Description</DialogDescription>
                <DialogCloseTrigger>
                  <button>Close</button>
                </DialogCloseTrigger>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;