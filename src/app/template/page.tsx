/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 14:57:16
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-19 19:31:06
 * @Description: 
 */
import Link from 'next/link'
export default function Page() {
    return <>
        <h1>Hello, Template page!</h1>
        <h3>Now, you will navigate to <Link className='text-blue-500' href={'/dashboard'}>Dashboard Layout</Link></h3>
        <h5><Link href="#title" className='text-blue-300'>跳转到title</Link></h5>
        <div style={{height:"1000px"}}></div>
        <h2 id='title'>title</h2>
    </>
  }
  