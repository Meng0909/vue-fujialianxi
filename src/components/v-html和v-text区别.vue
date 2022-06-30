<template>
  <div>
    {{ str }}
    <h1 v-html="str"></h1>

    <h1 v-text="str"></h1>
    <!--  -->
    <!-- <h1 v-html="str">{{ str }}</h1> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '<span>我是一个span标签</span>,'
    }
  },
  mounted() {},
  methods: {},
}
</script>
