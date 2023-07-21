import React from "react"
// import { useRouter } from "next/navigation"
interface ModalProps {
    children: React.ReactNode
}

export default function Modal(props: ModalProps) {
    const { children } = props
    // NOTE 这里只要用到了导航就会报无法找到某某导航问题
    // const router = useRouter()
    // const handleBack = useCallback(() => {
    //     console.log(router)
    //     router.back()
    // }, [router])
    return <>
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center"
        >
            {children}
        </div>
    </>
}