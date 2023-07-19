/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 15:04:31
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-19 15:24:54
 * @Description: 
 */
import React from "react";
// children 可以是子layout或者子页面
export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return <>
        <section>
            {children}
        </section>
    </>
}