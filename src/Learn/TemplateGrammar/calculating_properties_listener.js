import Vue from 'vue'
// TODO:计算属性和侦听器
let calculatingPropertiesListener = new Vue({
  el: '#calculatingPropertiesListener',
  data: {
    seen: true
  }
})

// todo:计算属性
// 模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护
// 对于任何复杂逻辑，你都应当使用计算属性

// 导出
export default calculatingPropertiesListener
