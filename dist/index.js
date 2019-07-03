import hyCol from './../src/components/hy-col/index.vue'
import hyRow from './../src/components/hy-row/index.vue'
import hySwitch from './../src/components/hy-switch/index.vue'
import hyCard from './../src/components/hy-card/index.vue'
import hyPopup from './../src/components/hy-popup/index.vue'
import hyMask from './../src/components/hy-mask/index.vue'
import hyInput from './../src/components/hy-input/index.vue'
const components=[hyCol,hyRow,hySwitch,hyCard,hyPopup,hyMask,hyInput];
const install = function(Vue) {
components.map(component => {
Vue.component(component.name, component);
});
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
install(window.Vue);
}
// 导出组件

export default install