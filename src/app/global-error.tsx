/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-21 14:02:02
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 14:16:00
 * @Description: 
 */
'use client'

interface IErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError(props: IErrorProps) {
    
    const { error, reset } = props

    return <>
        <html>
            <body>
                <div className="flex flex-col justify-center items-center">
                    <h2>出现了一点点小问题，我是root error</h2><br />
                    <button className="p-5 rounded bg-cyan-400 text-white" onClick={() => reset()}>再试试捏</button>
                </div>
            </body>
        </html>
    </>
}