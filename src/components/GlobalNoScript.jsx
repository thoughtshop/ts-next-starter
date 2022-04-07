/**
 * @returns Component containing <noscript> tags meant for all pages
 */
const GlobalNoScript = () => (
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-5689ZV2"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
);

export default GlobalNoScript;
