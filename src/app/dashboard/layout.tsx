/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 15:04:31
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-20 10:04:18
 * @Description: 
 */
import React, { Suspense } from "react";
import Loading from "./loading"
// children 可以是子layout或者子页面
export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return <>
        <section>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </section>
    </>
}