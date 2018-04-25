import Vue from 'vue'
// TODO:监听事件
let monitor = new Vue({
  el: '#monitor_event',
  data: {
    counter: 0,
    name: 'chendaye666'
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    },
    doThis: function () {
      alert('doThis')
    },
    onSubmit: function () {
      alert('onSubmit')
    },
    doThat: function () {
      alert('doThat')
    },
    onScroll: function () {
      alert('onScroll')
    }
  }
})
// 可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码

// todo:事件处理方法
// 许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称

// todo:内联处理器中的方法
// 除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：
// 有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入

// todo:事件修饰符
// 在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
// 尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
// 为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
// stop 阻止单击事件继续传播
// prevent 提交事件不再重载页面
// capture 添加事件监听器时使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
// self  只当在 event.target 是当前元素自身时触发处理函数,即事件不是从内部元素触发的
// once   点击事件将只会触发一次
// passive   其中包含 `event.preventDefault()` 的情况

// 不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。
// 请记住，.passive 会告诉浏览器你_不_想阻止事件的默认行为。

// todo:按键修饰符
// 在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
// 记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
// 全部的按键别名：
//   .enter
//   .tab
//   .delete (捕获“删除”和“退格”键)
//   .esc
//   .space
//   .up
//   .down
//   .left
//   .right

// 可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112

// todo:自动匹配按键修饰符
// 你也可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符：

// <input @keyup.page-down="onPageDown">
//   在上面的例子中，处理函数仅在 $event.key === 'PageDown' 时被调用。
//
// 有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，它们的内置别名应该是首选。

// todo:系统修饰键
// 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
// .ctrl
// .alt
// .shift
// .meta
// 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。
// 在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，
// 比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

// 请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。
// 换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。
// 而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

// .exact 修饰符
//   .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

// 鼠标按钮修饰符
//   .left
// .right
// .middle
// 这些修饰符会限制处理函数仅响应特定的鼠标按钮。

export default {
  monitor
}
