<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      set(val) {
        // 设置值的
        // 改全选框的时候 触发 set函数
        this.arr.forEach((ele) => (ele.c = val));
      },
      get() {
        // 取值
        // 取小复选框有没有全部被选中
        // return this.arr.every((ele) => ele.c === true);
        return this.arr.every((ele) => ele.c);
      },
    },
  },
  methods:{
    btn(){
        this.arr.forEach((ele) =>(ele.c = !ele.c ))  
    }
  }
};
</script>