/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-19 11:23:46
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-21 22:08:52
 * @Description: 
 */
import './page.css'
/* 
fr: 弹性尺寸类似于flex;
repeat(): 重复几次；
minmax()：设置每个网格项最大或最小；
grid
显示网格属性
grid-template-rows: 定义行，网格项就会纵向布局，此时就相当于设置了高度；
grid-template-columns: 定义列，使用该属性之后就会横向布局，此时就相当于设置了宽度；
column-gap：列的间距；
rows-gap: 行的间距；
grid-auto-flow：遵循先行后列算法，有点像flex里的wrap；

NOTE 后续处理
grid-template-areas：给每个网格项设置布局，设置了布局之后行和列的默认布局就会失效；
grid-area：每个网格项的名称，设置了网格名称若不设置template-areas样式就会消失；
隐示网格属性
间距属性
*/

export default function Page() {
  return <>
    <h1>Hello, Home page!</h1>
    <h2>About grid</h2>
    <div className="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </>
}
