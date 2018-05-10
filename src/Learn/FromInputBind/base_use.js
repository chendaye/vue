import Vue from 'vue'
// TODO：表单输入绑定
/**
 * 可以用v-model 指令在表单<input> 以及 <textarea> 元素上创建双向数据绑定
 * 它会根据控件类型自动选取正确的方法来更新元素
 * v-model本质上是语法糖，负责监听用户输入事件以更新数据
 * v-model 会忽略所有表单元素的 value checked selected 特性初始值，而将vue实例作为数据来源，应该在data中声明初始值
 * 对于需要使用输入法的语言（如中文），v-model 不会在输入法组合文字的过程中更新，如果想处理此过程，需要使用input事件
 * @type {CombinedVueInstance<V extends Vue, Object, Object, Object, Record<never, any>>}
 */
let fromBind = new Vue({
  el: 'form_bind',
  data: {
    test: ''
  }
})

export default {
  fromBind
}
