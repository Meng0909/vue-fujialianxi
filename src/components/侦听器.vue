<template>
  <div>
    <span>全选:</span>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  watch: {
    // 可以监听某个值的变化
    // name(newVal, oldVal) {
    //   // newVal 改变之后的值
    //   // oldVal 改变之前的值
    //   console.log("newVal", newVal);
    //   console.log("oldVal", oldVal);
    // },
    name(val) {
      // 当这一块只用了一个星参数 是改变之后的值
      console.log("newVal", val);
    },
  },
  // 目标: 侦听到name值的改变
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
        // newVal 是改变之后的值
        // oldVal 是改变之前的值  
      }
    }
  */
};
</script>