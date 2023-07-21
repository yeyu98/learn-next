
import React from "react";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return <>
        <section className="w-full h-full flex justify-center items-center">
            {children}
        </section>
    </>
}