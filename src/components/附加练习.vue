<template>
  <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" value="中国大陆" name="area" v-model="area"/>中国大陆
      <input type="radio" value="中国台湾" name="area" v-model="area"/>中国台湾
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" name="phone" v-model="phone" />
    </div>

    <div>
      <span>年龄：</span>
      <input type="text" name="age" v-model="age"/>
    </div>
    <div>
      <span>密码：</span>
      <input type="password" name="password" v-model="password" />
    </div>

    <div>
      <span>爱好：</span>
      <input type="checkbox" value="看书" v-model="hobby"/>看书
      <input type="checkbox" value="学习" v-model="hobby"/>学习
      <input type="checkbox" value="写代码" v-model="hobby"/>写代码
      <input type="checkbox" value="游戏" v-model="hobby"/>游戏
    </div>
    <div><input type="checkbox" v-model="isgrow"/> 记住密码</div>
    <div>===============================================</div>
    <div>
      我来自：{{area}}
      <br />
      手机号码是：{{phone}}
      <br />
      年龄是：{{age}}
      <br />
      密码是：{{password}}
      <br />
      爱好是：{{hobby.join(',')}}
      <br />
      是否记住密码：{{isgrow ? '是' : '否'}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        area:'中国大陆',
        phone:'',
         age:'',
         password: '',
         hobby: ['学习', '写代码'],
         isgrow: ''
    }
  },
  methods: {},
}
</script>
