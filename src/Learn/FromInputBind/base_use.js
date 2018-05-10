import Vue from 'vue'
// TODO：表单输入绑定
/**
 * 可以用v-model 指令在表单<input> 以及 <textarea> 元素上创建双向数据绑定
 * 它会根据控件类型自动选取正确的方法来更新元素
 * v-model本质上是语法糖，负责监听用户输入事件以更新数据
 * v-model 会忽略所有表单元素的 value checked selected 特性初始值，而将vue实例作为数据来源，应该在data中声明初始值
 * 对于需要使用输入法的语言（如中文），v-model 不会在输入法组合文字的过程中更新，如果想处理此过程，需要使用input事件
 * @type {CombinedVueInstance<V extends Vue, Object, Object, Object, Record<never, any>>}
 */
let formBind = new Vue({
  el: '#form_bind',
  data: {
    message: '文本',
    messageText: '多行文本',
    checkoutBox: '复选框',
    checkedNames: [],
    picked: '单选按钮',
    selected: '选择框',
    selectedArr: [],
    selected2: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  },
  toggle: 'bool',
  lazy: 'lazy',
  number: 'number',
  trim: 'trim'
})

// 基础用法
// todo:文本
// todo:多行文本
// todo:复选框
// todo:多个复选框，绑定到同一个数组
// todo:单选按钮
// todo:选择框

// 值绑定
// 对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

// 修饰符
// .lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
// .number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
// .trim 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符

// 在组件上使用 v-model 参见组件章
export default {
  formBind
}
