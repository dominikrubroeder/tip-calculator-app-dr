import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../components/Logo';
import TipCalculatorCard from '../components/TipCalculatorCard';

const Home: NextPage = () => {
  return (
    <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-4 md:min-h-screen">
      <Head>
        <title>
          Tip calculator app – Splitter | Frontend challenge by
          frontendmentor.io developed by Dominik Rubröder
        </title>
        <meta
          name="description"
          content="Tip calculator app – Splitter | Frontend challenge by frontendmentor.io developed by Dominik Rubröder"
        />
        <link rel="icon" href="assets/favicon-32x32.png" type="image/png" />
      </Head>

      <header className="mx-auto my-10 md:my-16">
        <Logo />
      </header>

      <main>
        <section className="max-w-[57.5rem] w-full">
          <TipCalculatorCard />
        </section>

        <p className="my-8 text-xs text-app-neutral-blue-grayish px-4 w-full text-center text-app-teal-900 opacity-40">
          Frontend challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
            target="_blank"
            rel="noreferrer"
          >
            frontendmentor.io
          </a>
          , developed by Dominik Rubröder
        </p>
      </main>
    </div>
  );
};

export default Home;
