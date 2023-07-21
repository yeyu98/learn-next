/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 14:57:16
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-20 11:55:36
 * @Description: 
 */
import { Suspense } from "react";
import PostListAsync from "./components/PostListAsync"
import WeatherSync from "./components/WeatherSync"

export default function Page() {
    return <>
      <Suspense fallback={<p>文章列表加载中（异步）...</p>}>
        <PostListAsync />
      </Suspense>
      <Suspense fallback={<p>天气加载中（同步）...</p>}>
        <WeatherSync />
      </Suspense>
    </>
  }
  