import { Html, Head, Main, NextScript } from 'next/document'
import {refineTheme} from '@refinedev/chakra-ui'
import {ColorModeScript} from '@chakra-ui/react'

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