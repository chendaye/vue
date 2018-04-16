import Vue from 'vue'

// TODO:指令
// 指令 (Directives) 是带有 v- 前缀的特殊属性
// 令属性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。
// 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
let directives = new Vue({
  el: '#first_directives',
  data: {
    seen: true,
    href: 'http://www.chendaye666.top/',
    doSomething: function () {
      alert('doSomething')
    }
  }
})

// todo:参数
// 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 属性
//   <a v-bind:href="url">...</a>

// v-on 指令，它用于监听 DOM 事件
//   <a v-on:click="doSomething">...</a>

// todo:修饰符
// 修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
// prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
//   <form v-on:submit.prevent="onSubmit">...</form>

// 导出
export default directives
