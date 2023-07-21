/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 15:04:31
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 20:13:32
 * @Description: 
 */
import React from "react";

interface IProps {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function InterceptRouteLayout(props: IProps) {
    const { children, modal } = props 
    return <> 
        <section className="w-full h-full flex flex-col justify-center items-center bg-white">
            {/* <Suspense fallback={<Loading />}> */}
                {children}
                {modal}
            {/* </Suspense> */}
        </section>
    </>
}