
import { lato } from '../../public/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br" className={`${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
