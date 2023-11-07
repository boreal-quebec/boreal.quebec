import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from "react";
import {NextAuthProvider} from "@/app/provider";
import {Providers} from "@/components/providers";
import StickyHeader from "@/components/layout/stickyHeader";
import Navbar from "@/components/menus/navbar";
import Footer from "@/components/layout/footer";
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boreal Quebec',
  description: 'Bottin des restaurateurs alternatifs du Québec',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <Providers>
              <StickyHeader />
              <Navbar />
              <main className="flex min-h-screen flex-col">
                  {children}
              </main>
              <Footer />
          </Providers>
      </NextAuthProvider>
      </body>
    </html>
  )
}
