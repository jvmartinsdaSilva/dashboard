"use client"

import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '@/Themes/Dark'
import { GlobalStyle } from '@/Themes/Global'
import { Inter } from 'next/font/google'
import { usePathname } from "next/navigation"
import { checkIsPublicRouter } from '@/Functions/isPublicRouter'
import { PrivateRouter } from '@/components/PrivateRouter/PrivateRouter'
import { UserProvider } from '../context/User/UserContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DashBoard App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = usePathname()
  const isPublicRouter = checkIsPublicRouter(router)

  return (
    <html lang="en">
      <ThemeProvider theme={DarkTheme}>
        <body className={inter.className} suppressHydrationWarning={true}>
          {isPublicRouter && children}
          
          {!isPublicRouter && (
            <UserProvider>
              <PrivateRouter>{children}</PrivateRouter>
            </UserProvider>
          )}
        </body>
        <GlobalStyle />
      </ThemeProvider>
    </html>
  )
}
