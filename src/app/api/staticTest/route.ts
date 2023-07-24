/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-22 10:21:49
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-24 20:23:25
 * @Description: 
 */
// NOTE 静态路由处理器
import { NextResponse } from 'next/server'
export async function GET() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
    return NextResponse.json({data})
}