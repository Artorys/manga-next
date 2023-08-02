import { lato } from '../../public/fonts'
import './globals.css'
import 'semantic-ui-css/semantic.min.css'
import "react-multi-carousel/lib/styles.css";

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br" className={`${lato.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
