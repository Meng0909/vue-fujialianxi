<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter - 回车 
         2. .esc修饰符 - 取消键-->
    <input type="text" @keydown.enter="enterFn" />
    <hr />
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>

<script>
export default {
  methods: {
    enterFn() {
      alert('enterFn')
    },
    escFn() {
      alert('escFn')
    },
  },
}
</script>
