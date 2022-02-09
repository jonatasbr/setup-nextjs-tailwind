import Head from 'next/head';
import Image from 'next/image';
import Block from 'components/Block';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-2 min-h-screen">
      <Head>
        <title>Create Next App - Typescript + Tailwindcss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center px-20 w-full text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>{' '}
          with - Typescript + Tailwindcss
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap justify-around items-center mt-6 max-w-4xl sm:w-full">
          <Block
            href="https://nextjs.org/docs"
            title="NextJS"
            description="Find in-depth information about Next.js features and API."
          />

          <Block
            href="https://www.typescriptlang.org/docs/"
            title="Typescript Documentation"
            description="Learn about Typescript!"
          />

          <Block
            href="https://tailwindcss.com/"
            title="Tailwindcss"
            description="Rapidly build modern websites without ever leaving your HTML"
          />

          <Block
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>
    </div>
  );
}
