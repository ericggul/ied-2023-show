import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href={`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`} rel="stylesheet" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Bubbles&display=swap`}
          rel="stylesheet"
        />
        <link href={`https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap`} rel="stylesheet" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Futura+PT:wght@300;400;500;600;700;800;900&family=Caveat:wght@400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Abhaya+Libre&family=Cormorant&family=Cormorant+Unicase&family=Gloock&family=IM+Fell+French+Canon&family=Italiana&family=Libre+Baskerville&family=Roboto+Slab&family=Shippori+Mincho+B1&family=Slabo+13px&display=swap`}
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=Parisienne&family=Bebas+Neue&family=Genos:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`}
          rel="stylesheet"
        />
        <link
          href={"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
