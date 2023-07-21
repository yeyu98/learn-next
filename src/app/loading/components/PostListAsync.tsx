/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-20 11:01:34
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-20 11:52:05
 * @Description:
 */
import React from 'react';

async function getData() {
    let p = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        name: "文章标题1",
                        id: 1
                    },
                    {
                        name: "文章标题2",
                        id: 2
                    },
                    {
                        name: "文章标题3",
                        id: 3
                    }
                ])
            }, 5000);
        })
    }
    const data = await p()
    return data
}

async function PostListAsync() {
    const data: any = await getData()
    return (
        <div>
            {
                data.map((item: any) => {
                    return item.name
                })
            }
        </div>
    );
}

export default PostListAsync;