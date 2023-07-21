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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center flex-col">
            <h2>这里是interceptRoute但出现了一点点小问题</h2><br />
            <button className="p-5 rounded bg-cyan-400 text-white" onClick={() => reset()}>再试试捏</button>
        </div>
    </>
}