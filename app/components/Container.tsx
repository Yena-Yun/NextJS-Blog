import Head from 'next/head';
import Navbar from './Navbar';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>내 블로그</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Container;
