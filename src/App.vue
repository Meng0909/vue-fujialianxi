<template>
  <div>
    <!-- 差值表达式 -->
    <!-- 语法：{{表达式}} -->
    <!-- // 作用可以把表达式的返回值 直接 插入到dom 标签中 -->
    <!-- {{ msg }}

    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age }}</h1>
    <h2>{{ obj.age >= 18 ? '成年' : '未成年' }}</h2> -->
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量" -->
    <!-- <a v-bind:href="href">去百度</a>
    <img v-bind:src="imgUrl" />
    <img v-bind:src="imgLocal" /> -->
    <!-- 1. 绑定事件
  语法: v-on:事件名="少量代码"
  语法: v-on:事件名="methods里函数名"
  语法: v-on:事件名="methods里函数名(值)"
  语法: @事件名="methods里函数名"
  -->
    <!-- <p>商品总数 {{ count }}</p>
    <button v-on:click="count++">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addFn1(5)">+5</button>
    <button @click="subFn">-1</button> -->
<!-- 1. 事件触发, 无传值, 可以直接获取事件对象
    2. 事件触发, 传值, 需要手动传入$event -->
     <a @click="one" href="http://www.baidu.com">阻止百度</a>
    <br>
      <!-- href="http://www.baidu.com" -->
    <span @click="two(1, $event)" >阻止百度</span>




  </div>
</template>

<script>
// import { Agent } from 'http'
// import imgLocal from './assets/logo.png'
export default {
  name: 'App',
  data() {
    //template变量data 这个函数里犯规的对象里定义
    //固定格式
    return {
      // msg: 'Hello-vue黑马',
      // obj: {
      //   name: 'vue',
      //   age: '18',
      // // },
      // href: 'http://www.baidu.com/',
      // imgUrl:
      //   'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      // imgLocal: imgLocal,
// count:0,

    }
  },
  // methods:{
  //   addFn(){
  //     this.count++;
  //   },
  //   addFn1(val){
  //     console.log(val);
  //     this.count=this.count+5
  //   },
  //   subFn(){
  //     this.count--
  //   }
  // }
  methods:{
    one(e){
      console.log(e);
      e.preventDefault()
    },
    two(val,event){
      console.log(val)
      console.log(event);
    }
  }
}
</script>

<style></style>
