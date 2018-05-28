// 组件基础
import Vue from 'vue'

// 定义一个名为 button-counter 的新组件
// 组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，
// 例如 data、computed、watch、methods 以及生命周期钩子等。
// 仅有的例外是像 el 这样根实例特有的选项
// 全局注册组件
Vue.component('button-counter', {
  // 一个组件的 data 选项必须是一个函数  如果是一个对象就会影响其他实例
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="{ count++ }">You clicked me {{ count }} times.</button>'
})

// 组件的组织
// 一个应用会以一棵嵌套的组件树的形式来组织
// 例如：会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件
// 为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。
// 这里有两种组件的注册类型：全局注册和局部注册
// 全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

// 通过 Prop 向子组件传递数据
// Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性
// 可以用一个 props 选项将其包含在该组件可接受的 prop 列表中
// 一个 prop 被注册之后，你就可以像这样把数据作为一个自定义特性传递进来
Vue.component('component-props', {
  props: ['title', 'keys', 'zan', 'name'],
  // 每个组件必须只有一个根元素 (用一个大div包含其他)
  // 可以调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件, 事件来抛出一个特定的值,$emit 的第二个参数来提供这个值
  template: '<div class="blog-post"><h3>{{ keys }}</h3><div v-html="title"></div><button v-on:click="$emit(\'enlarge-text\', 0.1)">Enlarge text</button><button v-on:click="$emit(\'ensmall-text\', 0.1)">Small text</button></div>'
})

// 在组件上使用 v-model
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

// 组件是可复用的 Vue 实例，且带有一个名字。组件就是一个vue实例
// 我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用
// 可以使用 v-bind 来动态传递 prop。这在你一开始不清楚要渲染的具体内容，比如从一个 API 获取博文列表的时候，是非常有用的
let componentBase = new Vue({
  el: '#components-demo',
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize -= enlargeAmount
    }
  },
  data: {
    'component': 'first',
    postFontSize: 1,
    'posts': [
      { id: 1, title: 'My journey with Vue', zan: 7 },
      { id: 2, title: 'Blogging with Vue', zan: 7 },
      { id: 3, title: 'Why Vue is so fun', zan: 7 }
    ]
  }
})

export default {
  componentBase
}
