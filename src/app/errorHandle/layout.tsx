'use client'
import React, { useEffect } from "react";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    useEffect(() => {
        throw new Error("1212212")
    })
    return <>
        <section className="w-full h-full flex justify-center items-center">
            {children}
        </section>
    </>
}