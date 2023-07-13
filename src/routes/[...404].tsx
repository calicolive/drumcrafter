import { A } from 'solid-start';

export default function NotFound() {
  return (
    <main class='text-center mx-auto text-neutral-50 p-4'>
      <h1 class='max-6-xs text-6xl  font-thin uppercase my-16'>
        Page Not Found
      </h1>
      <p class='my-4'>
        <A href='/' class=' hover:underline'>
          Home
        </A>
      </p>
    </main>
  );
}
