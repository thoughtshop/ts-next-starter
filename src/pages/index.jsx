import NextHead from 'next/Head';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <NextHead>
      <Head
        robots={false}
        pageTitle="A thoughtful title"
        pageDesc="A thoughtful description"
      />
    </NextHead>
    <Nav />
    <main></main>
    <Footer />
  </>
);

export default Home;
