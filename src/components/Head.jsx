/**
 * @param {object} props
 * @param {boolean} props.robots whether or not to allow crawling
 * @param {string} props.pageDesc
 * @param {string} props.pageTitle
 * @param {string} props.pageUrl
 * @param {string} props.seoImage path to SEO image
 */
const Head = ({ pageDesc, pageTitle, pageUrl, robots, seoImage }) => (
  <>
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta name="robots" content={robots ? 'index,follow' : 'none'} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={pageDesc} />

    <title>{pageTitle}</title>

    <link
      href="/images/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="/images/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />

    <link href={seoImage} rel="image_src" />

    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDesc} />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:image" content={seoImage} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageUrl} />
    <meta name="twitter:image" content={seoImage} />
  </>
);

export default Head;
