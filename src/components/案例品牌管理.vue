<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | format }}</td>
            <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
          </tr>
          <!-- 总价，平均价区域 -->
          <tr style="background-color: #EEE">
              <td>统计:</td>
              <td colspan="2">总价钱为: {{allPrice}}</td>
              <td colspan="2">平均价: {{averageprice}}</td>
          </tr>
        </tbody>
        <!-- 
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
            -->
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色

// 引入moment
import moment from 'moment'
export default {
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list')) || [],
      // list: [
      //   { id: 100, name: '衣服', price: 199, time: new Date('2010-08-12') },
      //   { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
      //   { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
      //   { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      // ],
      name: '', 
      price: 0,
    }
  },
  methods: {
    addFn() {
      //新增数据
      //   非空判断
      if (this.name == '' || this.price == 0) {
        return alert('Please enter')
      }
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100
      this.list.push({
        // id怎么处理
        id,
        name: this.name,
        price: this.price,
        time: new Date(),
      })

      this.name = ''
      this.price = 0
    },
    del(id) {
      // const index = this.list.findIndex((ele)=>{
      //     return id == ele.id;//传递过来的id===ele.id;
      // })
      const index = this.list.findIndex((ele) => id == ele.id)
      console.log(index)
      this.list.splice(index, 1)
    },
    // 删除
    // 绑定点击事件
    // 事件 接受这条数据对应的id
    // 根据id找到对应的数据
    // findIndex==>对应的数据的索引号
    // 数组删除对应的数据==>splice(索引号，删除的个数)
  },
  //总价/平均区域
  computed:{
    allPrice(){
      // //取值
      // this.list.reduce((sum,next)=>{
      //   return (sum=sum+next.price)
      // }0)
      return this.list
      .reduce((sum,next)=>(sum=sum+ +next.price),0)
      // .toFixed(2)
    },
    averageprice(){
      return (this.allPrice / this.list.length).toFixed(2)
    }
  },
  //时间格式区域
  filters:{
    format(val){
      return moment(val).format('YYYY-MM-DD')
    }
  },
  watch:{
    list:{
      handler(newVal){
        localStorage.setItem('list',JSON.stringify(newVal))
      },
      deep:true,  
    
      // immediate:true
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>