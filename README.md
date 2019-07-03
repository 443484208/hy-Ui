### [GITHUB地址](https://github.com/443484208/hy-Ui)| [插件地址](https://www.npmjs.com/package/vue-hy) 
[![pluginunit](https://img.shields.io/npm/v/vue-hy.svg)](https://npmjs.org/package/vue-hy)
[![NPM all downloads](https://img.shields.io/npm/dt/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
[![NPM downloads](https://img.shields.io/npm/dm/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
[![NPM downloads](https://img.shields.io/npm/dw/vue-hy.svg?style=flat-square)](https://npmjs.org/package/vue-hy)
## [试用演示]（http://panjiachen.github.io/countTo/demo/）

＃＃＃ 如何使用？
```庆典
npm install vue-hy

import hy from "vue-hy"

Vue.use(hy);
```

<div>
# Input Attributes
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
# Input Slots
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
# Input Events	和原生一样
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