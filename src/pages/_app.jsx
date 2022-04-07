import GlobalNoScript from '../components/GlobalNoScript';

import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  // Once the page is rendered on the browser, add vendor scripts below.
  if (typeof window !== 'undefined') {
    require('bootstrap/js/dist/collapse');
  }
  return (
    <>
      {/* <GlobalNoScript /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
