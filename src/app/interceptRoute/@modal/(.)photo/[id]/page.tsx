/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-21 16:59:06
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 20:27:53
 * @Description: 
 */
import Photo from "../../../components/Photo"
import Modal from "../../../components/Modal"
export default function Page({params}: {params: { id: number }}) {
    const largeImageList = [
        'https://c.53326.com/d/file/lan20191114/1djnz3cdry5.jpg',
        'https://c.53326.com/d/file/lan20191114/0qfhbcy4goo.jpg',
        'https://c.53326.com/d/file/lan20200407/q21ftur3ew2.jpg',
        'https://c.53326.com/d/file/lan20220101/uz2il0bcw3t.jpg',
        'https://c.53326.com/d/file/lan20221010/qrfzoufy1dh.jpg',
        'https://c.53326.com/d/file/lan20191114/atjm2wz3fap.jpg'
    ]
    const currentUrl = largeImageList[params.id]
    return <>
        <Modal>
            <div className="shadow-md w-5/6">
                <Photo url={currentUrl}/>
            </div>
        </Modal>
    </>
}