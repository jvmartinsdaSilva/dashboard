"use client"

// import { ThemeContext, ThemeProvider } from 'styled-components'
import { ThemeProvider } from '@/context/ThemeProvider'
import { GlobalStyle } from '@/Themes/Global'
import { Inter } from 'next/font/google'
import { usePathname } from "next/navigation"
import { checkIsPublicRouter } from '@/Functions/Routes/isPublicRouter'
import { PrivateRouter } from '@/components/PrivateRouter/PrivateRouter'
import { UserProvider } from '../context/User/UserContext'



const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'DashBoard App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = usePathname()
  const isPublicRouter = checkIsPublicRouter(router)


  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          {isPublicRouter && children}
          {!isPublicRouter && (
            <UserProvider>
              <PrivateRouter>{children}</PrivateRouter>
            </UserProvider>
          )}
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  )
}
