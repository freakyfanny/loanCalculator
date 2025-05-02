import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sv">
        <Head>
         <meta
            name="description"
            content="En lånekalkyl för att räkna ut hur mycket månadskostnad blir beroende på återbetalningstid och summa att låna."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="description"
            content="En lånekalkyl för att räkna ut hur mycket månadskostnad blir beroende på återbetalningstid och summa att låna."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main /> {/* Main content */}
          <NextScript /> {/* Next.js scripts */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
