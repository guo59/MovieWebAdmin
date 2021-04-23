<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header height='100px'>
      <h2>电影评论网站后台管理系统</h2>
    </el-header>
    
    <el-container>
      <el-aside width='200px'>
        <el-menu :default-openeds="['1', '2', '3', '4']"
                 :default-active='$router.path'
                 router>
          <el-submenu index='1'>
            <template slot="title"><i class="el-icon-user"></i>个人中心</template>
            <el-menu-item index='/home/profile'>
              我的信息
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title"><i class="el-icon-s-custom"></i>用户管理</template>
            <el-menu-item index='/home/user'>
              查看用户
            </el-menu-item>
          </el-submenu>
          <el-submenu index='3'>
            <template slot="title"><i class="el-icon-video-camera-solid"></i>电影管理</template>
            <el-menu-item index='/home/movie'>
              查看电影列表
            </el-menu-item>
            <el-menu-item index='/home/movieadd'>
              添加电影
            </el-menu-item>
          </el-submenu>
          <el-submenu index='4'>
            <template slot="title"><i class="el-icon-s-comment"></i>评论管理</template>
            <el-menu-item index='/home/comment'>
              查看评论
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style type="text/css" scoped>
  .el-header {
    background-color: #409EFF;
    color: #fff;
  }
  .el-aside {
    background-color: rgb(238, 241, 246);
  }
</style>
