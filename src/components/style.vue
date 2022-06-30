<template>
  <div>
<!-- 动态绑定style 语法 v-bind:style=对象
v-bind：style='{css属性值：值}' -->
<p v-bind:style="{color:'red',fontSize:'100px'}">asdghj</p>
<p v-bind:style="{color:colorColor,fontSize:'100px'}">asdghj</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
  colorColor:"pink"
    }
  },
  mounted() {},
  methods: {},
}
</script>