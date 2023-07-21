'use client'
import { useEffect } from "react";

interface IErrorProps {
    error: Error;
    reset: () => void;
}
export default function Error(props: IErrorProps) {
    
    const { error, reset } = props

    useEffect(() => {
        console.log("出现了一点点小问题", error)
    }, [error])

    return <>
        <div className="flex flex-col justify-center items-center">
            <h2>出现了一点点小问题</h2><br />
            <button className="p-5 rounded bg-cyan-400 text-white" onClick={() => reset()}>再试试捏</button>
        </div>
    </>
}