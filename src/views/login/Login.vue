<template>
  <el-container>
    <el-header class="header" height='100px'>
      <h3>电影评论网站系统</h3>
      <p>请登录</p>
    </el-header>
    <el-main>
      <login-body/>
    </el-main>
  </el-container>
</template>

<script>
import LoginBody from './childCpns/LoginBody.vue'

export default {
  components: {
    LoginBody
  },
  data () {
   return {}
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
  .header{
    background-color: #409EFF;
    color: white;
  }

</style>
