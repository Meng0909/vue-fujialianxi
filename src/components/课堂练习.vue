<template>
  <div>
    <!-- 思路
  1. 变量准备-静态页面铺设
  2. 绑定点击事件 
  3. 截取字符串返回数组
  4. 翻转
  5. 数组拼接起来 -->
    <h1>{{ msg }}</h1>
    <button @click="clickFn">点击翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:'hello - vue'
    }
  },
  methods: {
    clickFn() {
        // let arr = this.msg.split('')
        // console.log(arr);
        // console.log(arr.reverse());
        // this.msg = arr.join('')
        this.msg=this.msg.split('').reverse('').join('')
    },
  },
}
</script>
