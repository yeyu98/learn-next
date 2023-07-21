/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-21 18:51:08
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 20:04:50
 * @Description: 
 */
'use client'

import { useRouter } from "next/navigation"

interface Props {
    imageList: String []
}

export default function ImageList(props: Props) {
    const { imageList } = props
    const router = useRouter()

    const handlePreview = (index: number) => {
        // router.prefetch(`interceptRoute/photo/${index}`)
        router.push(`/interceptRoute/photo/${index}`)
    }
    return <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-5 m-10'>
            {
                imageList.map((url: any, index: number) => {
                    return <div className='w-full h-full cursor-pointer' key={url} onClick={() => handlePreview(index)}>
                        <img
                            className="w-full h-full"
                            src={url}
                            alt="Picture of the author"
                        />
                    </div>
                })
            }
        </div>
    </>
}