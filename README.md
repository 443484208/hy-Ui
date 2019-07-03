### [GITHUB地址](https://github.com/443484208/hy-Ui)| [插件地址](https://www.npmjs.com/package/vue-hy) 
[![pluginunit](https://img.shields.io/npm/v/vue-hy.svg)](https://npmjs.org/package/vue-hy)
[![NPM all downloads](https://img.shields.io/npm/dt/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
[![NPM downloads](https://img.shields.io/npm/dm/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
[![NPM downloads](https://img.shields.io/npm/dw/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
## [试用演示]待续。。。
## 自己练手学习使用
## 如何使用？
```庆典
npm install vue-hy

import hy from "vue-hy"

Vue.use(hy);
```
## hy-input 
```
<hy-input></hy-input>
``` 
##### Input Attributes
<div>
    <table border="0">
	  <tr>
	    <th>参数</th>
	    <th>说明</th>
	    <th>类型</th>
	    <th>可选值</th>
	    <th>默认值</th>
	  </tr>
	  <tr>
	    <td>v-model</td>
	    <td>绑定值</td>
		<td>String/Number</td>
		<td>-</td>
		<td>-</td>
	  </tr>
	  <tr>
	    <td>type</td>
	    <td>类型</td>
	    <td>String</td>
	    <td>和原生一样</td>
	    <td>默认text</td>
	  </tr>
	  <tr>
	    <td>maxlength</td>
	    <td>原生属性，最大输入长度</td>
	    <td>Boolean</td>
	    <td>-</td>
	    <td>-</td>
	  </tr>
	  <tr>
	    <td>disabled</td>
	    <td>禁用</td>
	    <td>number</td>
	    <td>true,false</td>
	    <td>false</td>
	  </tr>
	  <tr>
	    <td>resize</td>
	    <td>控制是否能被用户缩放</td>
	    <td>String</td>
	    <td>none, both, horizontal, vertical</td>
	    <td>-</td>
	  </tr>
	  <tr>
	    <td>placeholder</td>
	    <td>输入框占位文本</td>
	    <td>String</td>
	    <td>-</td>
	    <td>-</td>
	  </tr>
	  <tr>
	    <td>autofocus</td>
	    <td>原生属性，自动获取焦点</td>
	    <td>Boolean</td>
	    <td>true,false</td>
	    <td>false</td>
	  </tr>
	  <tr>
	    <td>edit</td>
	    <td>修改input样式高宽，记得加上class不然input会变形</td>
	    <td>String</td>
	    <td>-</td>
	    <td>-</td>
	  </tr>
	  <tr>
	    <td>iconEnd</td>
	    <td>右边icon,默认icon详情请看icon例子</td>
	    <td>String</td>
	    <td>-</td>
	    <td>-</td>
	  </tr>
	  <tr>
	    <td>iconFrist</td>
	    <td>左边icon,默认icon详情请看icon例子</td>
	    <td>String</td>
	    <td>-</td>
	    <td>-</td>
	  </tr>
    </table>
</div>	

##### Input Slots
<div> 
    <table border="0">
	  <tr>
	    <th>name</th>
	    <th>说明</th>
	  </tr>
	  <tr>
	    <td>frist</td>
	    <td>输入框头部内容，除了textarea均有效</td>
	  </tr>
	  <tr>
	    <td>end</td>
	    <td>输入框尾部内容，除了textarea均有效</td>
	  </tr>
    </table>
</div>

##### Input Events	和原生一样
<div>
    <table border="0">
      <tr>
        <th>事件名字</th>
        <th>说明</th>
		<th>回调参数</th>
      </tr>
      <tr>
        <td>blur</td>
        <td>在 Input 失去焦点时触发</td>
        <td>(event: Event)</td>
      </tr>
      <tr>
        <td>change</td>
        <td>在 Input 值改变时触发</td>
        <td>(event: Event)</td>
      </tr>
	  <tr>
	    <td>input</td>
	    <td>在 Input 值改变时触发</td>
	    <td>(event: Event)</td>
	  </tr>
	  <tr>
	    <td>focus</td>
	    <td>在 Input 获得焦点时触发</td>
	    <td>(event: Event)</td>
	  </tr>
    </table>
</div>

## hy-mask
```
<hy-mask  v-model="maskShow"><div>内容</div></hy-mask>
``` 
##### mask Attributes
<div>
    <table border="0">
	  <tr>
	    <th>参数</th>
	    <th>说明</th>
	    <th>类型</th>
	    <th>可选值</th>
	    <th>默认值</th>
	  </tr>
	  <tr>
	    <td>maskWidth</td>
	    <td>宽度</td>
		<td>Number</td>
		<td>-</td>
		<td>默认屏幕90%</td>
	  </tr>
	  <tr>
	    <td>maskHeight</td>
	    <td>高度</td>
	    <td>Number</td>
	    <td></td>
	    <td>默认屏幕60%</td>
	  </tr>
	  <tr>
	    <td>v-model</td>
	    <td>控制显示隐藏</td>
	    <td>Boolean</td>
	    <td>-</td>
	    <td>false</td>
	  </tr>
	  <tr>
	    <td>disabled</td>
	    <td>禁用背景点击关闭</td>
	    <td>Boolean</td>
	    <td>true,false</td>
	    <td>false</td>
	  </tr>
    </table>
</div>	

## hy-card
```
<hy-card>
			<div slot="head">
				<span>6666</span>
			</div>
			<div>66666666666666</div>
			<div>66666666666666</div>
			<div>66666666666666</div>
			<div>66666666666666</div>
			<div>66666666666666</div>
			<div>66666666666666</div>
		</hy-card>
``` 
##### card Attributes
<div>
    <table border="0">
	  <tr>
	    <th>参数</th>
	    <th>说明</th>
	    <th>类型</th>
	    <th>可选值</th>
	    <th>默认值</th>
	  </tr>
	  <tr>
	    <td>slot</td>
	    <td>头部部分</td>
		<td>String</td>
		<td>head</td>
		<td>-</td>
	  </tr>
    </table>
</div>
	
## hy-popup
```
<hy-popup v-model="show"><div>555</div> </hy-popup>
``` 
##### card Attributes
<div>
    <table border="0">
	  <tr>
	    <th>参数</th>
	    <th>说明</th>
	    <th>类型</th>
	    <th>可选值</th>
	    <th>默认值</th>
	  </tr>
	  <tr>
	    <td>v-model:</td>
	    <td>控制显示隐藏</td>
	  	<td>Boolean</td>
	  	<td>true,false</td>
	  	<td>false</td>
	  </tr>
	  <tr>
	    <td>direction</td>
	    <td>方向</td>
		<td>String</td>
		<td>top,bottom,left,right</td>
		<td>top</td>
	  </tr>
	  <tr>
	    <td>popupWidth</td>
	    <td>宽度,方向top,bottom失效自动占满</td>
	  	<td>Number</td>
	  	<td>-</td>
	  	<td>50%or100%</td>
	  </tr>
	  <tr>
	    <td>popupHeight</td>
	    <td>高度,方向left,right失效自动占满</td>
	  	<td>Number</td>
	  	<td>-</td>
	  	<td>50%or100%</td>
	  </tr>
	  <tr>
	    <td>disabled</td>
	    <td>禁用背景点击关闭</td>
	    <td>Boolean</td>
	    <td>true,false</td>
	    <td>false</td>
	  </tr>
    </table>
</div>	

## hy-switch
```
<hy-switch v-model="sthGiveChild"></hy-switch>
``` 
##### card Attributes
<div>
    <table border="0">
	  <tr>
	    <th>参数</th>
	    <th>说明</th>
	    <th>类型</th>
	    <th>可选值</th>
	    <th>默认值</th>
	  </tr>
	  <tr>
	    <td>v-model</td>
	    <td>控制显示隐藏</td>
	  	<td>Number</td>
	  	<td>1,0</td>
	  	<td>0</td>
	  </tr>
	  <tr>
	    <td>background</td>
	    <td>选中颜色</td>
	  	<td>String</td>
	  	<td>-</td>
	  	<td>-</td>
	  </tr>
    </table>
</div>

## hy-switch
```
<hy-col><div>44</div></hy-col>
``` 
##### 待续、、、、
