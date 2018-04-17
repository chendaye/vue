import Vue from 'vue'

// TODO:Class 与 Style 绑定
let htmlClassBind = new Vue({
  el: '#html_class_bind',
  data: {
    isActive: true,
    hasError: false,
    error: null
  },
  // 计算属性
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

// todo:对象语法
// 可以传给 v-bind:class 一个对象，以动态地切换 class
//   <div v-bind:class="{ active: isActive }"></div>
// active 这个 class 存在与否将取决于数据属性 isActive 的 真假。
// 你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存

export default htmlClassBind
