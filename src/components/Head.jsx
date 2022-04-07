/**
 * @param {object} props
 * @param {boolean} props.robots
 * @param {string} props.pageDesc
 * @param {string} props.pageTitle
 * @param {string} props.seoImage
 */
const Head = (props) => (
  <>
    <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
    <meta name='robots' content={props.robots ? 'index,follow' : 'none'} />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='description' content={props.pageDesc} />

    <title>{props.pageTitle}</title>

    <link href='./assets/images/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
    <link href='./assets/images/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />

    <link href={props.seoImage} rel='image_src' />

    <meta property='og:title' content={props.pageTitle} />
    <meta property='og:description' content={props.pageDesc} />
    <meta property='og:url' content={props.pageUrl} />
    <meta property='og:image' content={props.seoImage} />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={props.pageTitle} />
    <meta name='twitter:description' content={props.pageUrl} />
    <meta name='twitter:image' content={props.seoImage} />
  </>
);

export default Head;
