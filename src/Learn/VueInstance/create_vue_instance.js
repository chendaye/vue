import Vue from 'vue'

// todo:  创建vue实例的时候要嵌入data对象，data对象包含各种属性，当属性发生改变时，视图将会产生响应
// todo:  数据对象
let data = {
  a: 789,
  b: 0 // 如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值
}

// todo:  data对象加入到vue实例中
let firstVue = new Vue({
  el: '#create_vue_instance',
  data: data
})

// todo:  获得这个实例上的属性
// todo:  返回源数据中对应的字段
if (firstVue.a === data.a) {
  console.log(data.a, firstVue.a)
}

// todo: 设置属性会影响原始数据
firstVue.a = 777
console.log(data.a)

// todo:  设置原始数据会影响vue属性值
data.a = 999
console.log(firstVue.a)

// 当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的
// 比如新创建一个属性
// firstVue.c = 'new'
// 那么对 c 的改动将不会触发任何视图的更新。
// firstVue.c = 'change'

// todo:  Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
var obj = {
  foo: 'bar'
}

Object.freeze(obj)
let two = new Vue({
  el: '#create_vue_instance_tow',
  data: obj
})
// 这会阻止修改现有的属性
// two.foo = 777

// todo:  除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来
// https://cn.vuejs.org/v2/api/#destroyed, 可以在 API 参考中查阅到完整的实例属性和方法的列表
if (firstVue.$data === data) {
  console.log(firstVue.$data)
}
if (firstVue.$el === document.getElementById('create_vue_instance')) {
  console.log(firstVue.$el)
}
// $watch 是一个实例方法
firstVue.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
  console.log(newValue, oldValue)
})
firstVue.a = 222

// todo:生命周期钩子 : 给用户动态添加自己代码的机会
// 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。
// 同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

// created 钩子可以用来在一个实例被创建之后执行代码
// 也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。
// 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。
// 因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例
let hook = new Vue({
  data: {
    chen: 'chendaye666'
  },
  // 钩子
  created: function () {
    // this 指向vm实例
    console.log('chen is' + this.chen)
  }
})

// 导出
export default {
  firstVue,
  two,
  hook
}
