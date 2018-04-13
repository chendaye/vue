import Vue from 'vue'

// Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
// todo:插值
let template = new Vue({
  el: '#first_template',
  data: {
    template: 'first template',
    // 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新
    // <span v-once>这个将不会改变: {{ msg }}</span>
    once: 'v-once'
  }
})
template.once = 'change'
// 导出
export default {
  template
}
