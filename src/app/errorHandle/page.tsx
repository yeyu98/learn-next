/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-21 13:31:05
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 13:32:45
 * @Description: 
 */
'use client'
import { useEffect } from "react"

export default function Page() {
    useEffect(() => {
        throw new Error("121")
    })
    return <>
        <h3>Now, I will show error handle for you.</h3>
    </>
}