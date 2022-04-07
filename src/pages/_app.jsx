import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  // Once the page is rendered on the browser, add vendor scripts below.
  if (typeof window !== 'undefined') {
    require('bootstrap/js/dist/collapse');
  }
  return <Component {...pageProps} />;
}

export default MyApp;
