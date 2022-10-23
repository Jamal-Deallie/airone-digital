import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <link
        rel='preload'
        as='font'
        type='font/woff'
        href='font/Headline.woff'
        crossOrigin='anonymous'
      />
      <link rel='stylesheet' href='https://use.typekit.net/aqa8zgq.css' />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
