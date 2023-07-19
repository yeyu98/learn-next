import React from "react";
export default function TestTemplate({children}: {children: React.ReactNode}) {
    return <>
        <section>
            {children}
        </section>
    </>
}