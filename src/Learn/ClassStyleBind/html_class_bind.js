import Vue from 'vue'

// TODO:Class 与 Style 绑定
let htmlClassBind = new Vue({
  el: '#html_class_bind',
  data: {
    isActive: true,
    hasError: false,
    error: null,
    activeClass: 'activeClass',
    errorClass: 'errorClass',
    // 内联样式
    activeColor: 'red',
    fontSize: 30,
    // 样式对象
    styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    baseStyles: {
      color: 'red'
    },
    overridingStyles: {
      fontSize: '13px'
    }
  },
  // 计算属性
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        danger: this.error && this.error.type === 'fatal'
      }
    }
  }
})

// todo:对象语法
// 可以传给 v-bind:class 一个对象，以动态地切换 class
//   <div v-bind:class="{ active: isActive }"></div>
// active 这个 class 存在与否将取决于数据属性 isActive 的 真假。
// 你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存

// todo:数组语法
// 可以把一个数组传给 v-bind:class，以应用一个 class 列表

// 用在组件上
// 当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。
// 声明一个组件
Vue.component('my-component', {
  template: '<p class="foo bar">我的组件</p>'
})

// todo:绑定内联样式
// v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。
// CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名
// 直接绑定到一个样式对象通常更好，这会让模板更清晰

// todo:数组语法
// v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上

// todo:自动添加前缀
// 当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀

// todo:多重值
// 从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值
// <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
// 这样写只会渲染数组中最后一个被浏览器支持的值。

export default {
  htmlClassBind,
  name: 'my-component'
}
