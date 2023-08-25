import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "@/components/menus/navbar";
import React from "react";
import Test from "@/components/test";
import {NextAuthProvider} from "@/app/provider";
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
          <Navbar />
          {children}
      </NextAuthProvider>
      </body>
    </html>
  )
}
