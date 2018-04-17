import Vue from 'vue'
// TODO:计算属性和侦听器
let calculatingPropertiesListener = new Vue({
  el: '#calculatingPropertiesListener',
  data: {
    message: 'Hello',
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  computed: {
    // 计算属性 reversedMessage 的 getter
    // 就是属性 reversedMessage 的值取决于后面的函数返回值
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    // 侦听属性 注意与watch相比较
    fullNameCompute: function () {
      return this.firstName + ' ' + this.lastName
    },
    // 计算属性的 setter
    fullNameGeterSeter: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        // 设置 fullNameGeterSeter 属性的时候，这个闭包会被调用
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('')
    }
  },
  // watch监听值的变化
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

// todo:计算属性
// 模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护
// 对于任何复杂逻辑，你都应当使用计算属性
// 声明了一个计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数
console.log(calculatingPropertiesListener.reversedMessage)
calculatingPropertiesListener.message = 'chendaye666'
console.log(calculatingPropertiesListener.reversedMessage)
// 可以像绑定普通属性一样在模板中绑定计算属性。
// Vue 知道 vm.reversedMessage 依赖于 vm.message，
// 因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
// 而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

// todo：计算属性缓存 vs 方法  计算属性是缓存的只要message（依赖）不变 其值就不变
// 我们可以通过在表达式中调用方法来达到计算属性同样的效果
// 两种方式的最终结果确实是完全相同的。
// 然而，不同的是计算属性是基于它们的依赖进行缓存的。
// 计算属性只有在它的相关依赖发生改变时才会重新求值。
// 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数

// 相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。
// 如果你不希望有缓存，请用方法来替代。

// todo:计算属性 vs 侦听属性
// Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
// 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。
// 然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调

// todo:计算属性的 setter
// 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter
calculatingPropertiesListener.fullNameGeterSeter = 'chen daye'

// todo:侦听器  watch
// 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
// 这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
// 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

// 导出
export default calculatingPropertiesListener
