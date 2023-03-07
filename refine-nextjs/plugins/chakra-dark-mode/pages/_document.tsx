import { Html, Head, Main, NextScript } from 'next/document'
import {refineTheme,ColorModeScript} from '@refinedev/chakra-ui'

export default function Document() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript initialColorMode={refineTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}