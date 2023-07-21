/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-21 19:14:13
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 19:35:44
 * @Description: 
 */
export default function Photo({url}: {url: string}) {
    return <>
        <div className="flex flex-col">
            <img src={url} width={'100%'} alt="" />
            <div className="p-3 bg-white text-black">
                <h3>Samina</h3>                
                <p>Taken by @saminacodes</p>
            </div>
        </div>
    </>
}