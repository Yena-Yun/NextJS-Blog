import Head from 'next/head';
import Navbar from './Navbar';
import metaData from '@/data/metaData';
import Image from 'next/image';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      {/** max-w-3xl = max-width: 48rem; /* 768px */}
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div>
          <Image
            src={`/logo.jpg`}
            alt='로고'
            width={40}
            height={40}
            objectFit='cover'
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metaData.title}
          </span>
        </div>
        <Navbar />
      </header>
      <main className={`w-full max-w-3xl`}>{children}</main>
    </div>
  );
};

export default Container;
