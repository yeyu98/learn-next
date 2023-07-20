/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 14:57:16
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-20 09:53:41
 * @Description: 
 */
'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function Page() {
    const pathName = usePathname()
    const router = useRouter()
    console.log("pathName --->>>", pathName)
    return <>
      <hr />
      <h3>prefetch</h3>
      <h1 onClick={() => {router.prefetch(`/dynamicRoutes/1`); router.push(`/dynamicRoutes/1`)}}>Hello, Dashboard page!</h1>
      <hr />
      <h3>单截动态路由</h3>
      {
        [1,2,3,4,5].map(route => {
          return <>
            <button onClick={() => router.push(`/dynamicRoutes/${route}`)}>动态路由{route}</button><br />
          </>
        })
      }
      <hr />
      <h3>多截动态路由</h3>
      <button onClick={() => router.push(`/dynamicRoutes/post/6/7/8/9`)}>动态路由6</button><br />
      <hr />
      <h3>可选参数动态路由</h3>
      <button onClick={() => router.push(`/dynamicRoutes/12/post/id`)}>动态路由6</button><br />
    </>
  }
  