import main from './main'
import Vue from 'vue'

//文本插值
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello sean!'
  }
})

//bind DOM element property
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date() + ' |add some other contents'
  }
})

//条件与循环
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

//绑定数组数据
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' },
      { text: 'test' },
    ]
  }
})

//处理用户输入
//v-on绑定事件监听
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
    words: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
    changeToWord: function() {
      this.message = this.words //异常：无法实现？？
    }
  }
})

//双向绑定
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
    content: 'Hello Vue!',
  }
})

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    template: '<li>这是个待办项</li>'
  }) //异常：没显示 --> 必须用new Vue生成实例并讲数据渲染进DOM

//注册组件，props传递数据
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: '蔬菜' },
      { text: '奶酪' },
      { text: '随便其他什么人吃的东西' }
    ]
  }
})


Vue.component('name-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
let app1 = new Vue({
  el: '#app1',
  data: {
    todos: [
      { text: 'neymar' },
      { text: 'xavi' },
      { text: 'ronaldo' },
      { text: 'silva' },
      { text: 'messi' },
    ]
  }
})

//计算属性
let vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})//异常：文本插值不会渲染 --> 没开webpack（逃）
