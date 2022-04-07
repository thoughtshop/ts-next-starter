import NextHead from 'next/Head';
import { Head, Nav, Footer } from '../components';

const Home = () => (
  <div>
    <NextHead>
      <Head
        robots={false}
        pageTitle='A thoughtful title'
        pageDesc='A thoughtful description'
      ></Head>
    </NextHead>
    <Nav />
    <main></main>
    <Footer />
  </div>
);

export default Home;
