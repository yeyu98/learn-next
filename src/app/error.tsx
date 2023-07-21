'use client'

interface IErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError(props: IErrorProps) {
    
    const { error, reset } = props

    return <>
            <div className="flex flex-col justify-center items-center">
                <h2>出现了一点点小问题，我是error 捕获子路由中的组件或page的error</h2><br />
                <button className="p-5 rounded bg-cyan-400 text-white" onClick={() => reset()}>再试试捏</button>
            </div>
    </>
}