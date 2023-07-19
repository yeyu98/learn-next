/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 14:57:16
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-19 23:29:18
 * @Description: 
 */
'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function Page() {
    const pathName = usePathname()
    const router = useRouter()
    console.log("pathName --->>>", pathName)
    return <>
      <h1 onClick={() => {router.prefetch(`/dynamicRoutes/1`); router.push(`/dynamicRoutes/1`)}}>Hello, Dashboard page!</h1>
      {
        [1,2,3,4,5].map(route => {
          return <>
            <button onClick={() => router.push(`/dynamicRoutes/${route}`)}>动态路由{route}</button><br />
          </>
        })
      }
    </>
  }
  