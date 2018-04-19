import Vue from 'vue'
// TODO:条件渲染
let conditionalRendering = new Vue({
  el: '#conditional_rendering',
  data: {
    first: true,
    two: true,
    loginType: '',
    show: true,
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    array: ['a', 'b', 'c'],
    // 遍历对象属性
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
    a: 'a',
    userProfile: {
      name: 'Anika'
    },
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

conditionalRendering.first = false

// todo:v-if

// todo:在 <template> 元素上使用 v-if 条件渲染分组

// todo:用 key 管理可复用的元素
// Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。
// 这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。
// 只需添加一个具有唯一值的 key 属性即可

// todo:v-show
// 不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。
// v-show 不支持 <template> 元素，也不支持 v-else

// todo:v-if vs v-show
// v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
// v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
// 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
// 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
conditionalRendering.loginType = 'username'

// todo:v-if 与 v-for 一起使用
// 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
// 我们用 v-for 指令根据一组数组的选项列表进行渲染。
// v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。
// 可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法：
//   <div v-for="item of items"></div>
// todo:列表渲染

// 在遍历对象时，是按 Object.keys() 的结果遍历，
// 但是不能保证它的结果在不同的 JavaScript 引擎下是一致的

// todo:key
// 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
// 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，
// 并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 track-by="$index"

// 这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

// 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，
// 你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的且唯一的 id。
// 这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，
// 所以你需要用 v-bind 来绑定动态值 (在这里使用简写)

// <div v-for="item in items" :key="item.id">
// <!-- 内容 -->
// </div>
// 建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

// todo:数组更新检测
// 变异方法 : 变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()
// 数组调用变异方法
conditionalRendering.items.push({message: 'chendaye666'})

// 替换数组
// 变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。
// 相比之下，也有非变异 (non-mutating method) 方法，
// 例如：filter(), concat() 和 slice() 。
// 这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组
// 用新数组替换原数组
conditionalRendering.items = conditionalRendering.items.filter(function (item) {
  return item.message.match(/Foo|./)
})
// 你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。
// Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，
// 所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作

// 注意事项
// 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
// 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
// 当你修改数组的长度时，例如：vm.items.length = newLength
conditionalRendering.array[1] = 'chendaye666  hhh' // 不是响应式的
conditionalRendering.array.length = 2// 不是响应式的

// 为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新
// Vue.set : Vue.set(vm.items, indexOfItem, newValue) : vm.$set(vm.items, indexOfItem, newValue)
// 可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名
Vue.set(conditionalRendering.array, 1, 'chen')
// Array.prototype.splice : vm.items.splice(indexOfItem, 1, newValue)
conditionalRendering.array.splice(2, 1, 'daye666')

// 解决第二类问题，你可以使用 splice : vm.items.splice(newLength)
conditionalRendering.array.splice(6)

// todo:对象更改检测注意事项
// 由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
conditionalRendering.a = 'aaa'// 属性a已经存在 响应式的
conditionalRendering.b = 'bbb'// 属性b之后添加 非响应式的
// 对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。
// 但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。
// 可以添加一个新的 age 属性到嵌套的 userProfile 对象：
Vue.set(conditionalRendering.userProfile, 'age', 27)
// 还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名
conditionalRendering.$set(conditionalRendering.userProfile, 'sex', 'fuck')

// 有时你可能需要为已有对象赋予多个新属性，比如使用 Object.assign() 或 _.extend()。
// 在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这样
Object.assign(conditionalRendering.userProfile, {
  big: 27,
  favoriteColor: 'Vue Green'
})

// 应该这样做
conditionalRendering.userProfile = Object.assign({}, conditionalRendering.userProfile, {
  big: 27,
  favoriteColor: 'Vue Green'
})

// todo:显示过滤/排序结果
// 想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性
// 在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个 method 方法：

// todo:一段取值范围的 v-for
// v-for 也可以取整数。在这种情况下，它将重复多次模板。

// todo:v-for on a <template>
// 类似于 v-if，你也可以利用带有 v-for 的 <template> 渲染多个元素。比如：

// todo:v-for with v-if
// 当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。
// 当你想为仅有的_一些_项渲染节点时，这种优先级的机制会十分有用
// 如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 <template>)上

// todo:一个组件的 v-for
// 自定义组件里，你可以像任何普通元素一样用 v-for
//   <my-component v-for="item in items" :key="item.id"></my-component>
// 然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要用 props
//   <my-component
// v-for="(item, index) in items"
//   v-bind:item="item"
// v-bind:index="index"
// v-bind:key="item.id"
//   ></my-component>
// 不自动将 item 注入到组件里的原因是，这会使得组件与 v-for 的运作紧密耦合。明确组件数据的来源能够使组件在其他场合重复使用

export default conditionalRendering
