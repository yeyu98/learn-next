/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 11:23:46
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 15:17:20
 * @Description: 
 */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn-next',
  description: 'My fist next app',
}

export default function RootLayout({
  children,
  analytics,
  team
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='flex-1'>{children}</div>
          <div className='flex-1'>{analytics}</div>
          <div className='flex-1'>{team}</div>
        </div>
      </body>
    </html>
  )
}
