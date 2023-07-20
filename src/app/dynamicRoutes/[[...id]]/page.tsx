/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 20:29:42
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-20 09:53:24
 * @Description: 
 */
export default function Page({params}: {params: {id: string}}) {
    console.log(params)
    return <h1>Hello, {params.id} page!</h1>
}
  