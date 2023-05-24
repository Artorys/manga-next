import { lato } from '../../public/fonts'
import './globals.css'
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
