/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 15:04:31
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-24 21:42:16
 * @Description: 
 */
import React from "react";
import type { Metadata } from 'next'

interface IProps {
    children: React.ReactNode
    modal: React.ReactNode
}

export const metadata: Metadata = {
    title: '美艳动人',
    description: 'My fist next app',
  }
  

const getData = async () => {
   const res =  await fetch('http://localhost:3000/api/dynamicTest?id=123')
   const data = await res.json()
   return data
}

const fetchData = async () => {
    const formData = new FormData()
    formData.append("name", "特拉斯·罗")
    // NOTE body请求体
    // const res =  await fetch('http://localhost:3000/api/dynamicTest', {
    //     method: 'post',
    //     body: JSON.stringify({
    //         name: "特拉斯·罗"
    //     }),
    // })
    // NOTE 表单提交
    const res =  await fetch('http://localhost:3000/api/dynamicTest', {
        method: 'post',
        body: formData
    })
    const data = await res.json()
    return data
 }

export default async function InterceptRouteLayout(props: IProps) {
    const { children, modal } = props 
    const staticData = await getData()
    console.log("staticData --->>>", staticData)
    const dynamicData = await fetchData()
    console.log("dynamicData --->>>", dynamicData)
    return <> 
        <section className="w-full h-full flex flex-col justify-center items-center bg-white">
            {/* <Suspense fallback={<Loading />}> */}
                {children}
                {modal}
            {/* </Suspense> */}
        </section>
    </>
}