import Vue from 'vue'

// Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
// TODO:插值
let template = new Vue({
  el: '#first_template',
  data: {
    template: 'first template',
    // 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新
    // <span v-once>这个将不会改变: {{ msg }}</span>
    once: 'v-once',
    rawHtml: '',
    dynamicId: '',
    number: 99,
    message: '1-2-3-4-5-6'
  }
})
template.once = 'change'

// todo:原始html
// 为了输出真正的 HTML，你需要使用 v-html 指令
template.rawHtml = '<span style="color: red">This should be red.</span>'

// todo:特性
// Mustache 语法(双大括号语法)不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
// 在布尔特性的情况下，它们的存在即暗示为 true
// 如果 特性 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来
template.dynamicId = 'chendaye666'

// todo:使用 JavaScript 表达式
// 所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持
// {{ number + 1 }}

// {{ ok ? 'YES' : 'NO' }}

// {{ message.split('').reverse().join('') }}

// <div v-bind:id="'list-' + id"></div>

// 限制就是，每个绑定都只能包含单个表达式
//   <!-- 这是语句，不是表达式 -->
// {{ var a = 1 }}

// <!-- 流控制也不会生效，请使用三元表达式 -->
// {{ if (ok) { return message } }}

// 导出
export default template
