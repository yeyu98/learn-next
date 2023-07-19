/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 14:57:16
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-19 19:18:58
 * @Description: 
 */
'use client'
import { usePathname } from 'next/navigation'
export default function Page() {
    const pathName = usePathname()
    console.log("pathName --->>>", pathName)
    return <h1>Hello, Dashboard page!</h1>
  }
  