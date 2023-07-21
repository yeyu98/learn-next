/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 11:23:46
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 20:13:46
 * @Description: 
 */

import ImageList from "./components/ImageList"
export default function InterceptRoutePage() {

  const imageList = [
    'https://c.53326.com/d/file/newpc202302/1djnz3cdry5.jpg',
    'https://c.53326.com/d/file/newpc202302/0qfhbcy4goo.jpg',
    'https://c.53326.com/d/file/newpc202302/q21ftur3ew2.jpg',
    'https://c.53326.com/d/file/newpc202302/uz2il0bcw3t.jpg',
    'https://c.53326.com/d/file/newpc202302/qrfzoufy1dh.jpg',
    'https://c.53326.com/d/file/newpc202302/atjm2wz3fap.jpg'
  ]

  return <>
    <h1 className="text-black">interceptRoute</h1>
    <hr />
    <ImageList imageList={imageList} />
  </>
}
