/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-22 10:21:49
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-24 21:43:56
 * @Description: 
 */
// NOTE 静态路由处理器
import { NextRequest, NextResponse } from 'next/server'
import { cookies, headers } from 'next/headers'
// NOTE 1 GET与Request方法一起使用
// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     console.log(searchParams)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${searchParams.get('id') || 1}`)
//     const data = await res.json()
//     // const url = new URL(request.url)
//     // NOTE 重定向
//     // NextResponse.redirect(new URL(`${url.origin}/interceptRoute`))
//     // NextResponse.json({data})

//     return NextResponse.json({data})
// }
// NOTE 2 GET与Request方法一起使用
// export async function POST() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'post',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     const data = await res.json()
//     return NextResponse.json({data})
// }

// NOTE 3 动态方法Cookies和Headers
export  function GET() {
    const tokenFromCookies = cookies().get('token')
    const headerList = headers()
    const referer = headerList.get('referer') || 'refererreferer'
    return new Response(`Hello, I'll return a cookies and it name of token ${tokenFromCookies?.value}& headers cookies ${referer}`, {
        status: 200,
        headers: {
            'Set-Cookie': `token=1212; aaa=666;`,
            referer
        }
    })
}


export async function POST(request: NextRequest) {
    // NOTE 获取请求体内容
    // const data = await request.json()
    // NOTE 获取表单formData内容
    const formData = await request.formData()

    return NextResponse.json({data: formData.get('name')})
}