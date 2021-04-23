<template>
  <div id="import">
    <el-form class="box" :model="movieItem" ref="ruleForm">
      <div class="block">
        <el-form-item class="select_ed" prop='name'>
          <p>电影名</p>
          <el-input  class="selectInput" v-model="movieItem.name" placeholder="请输入"/>
        </el-form-item>
        <el-form-item class="select_ed" prop='releasedate'>
          <p>上映日期</p>
          <el-input  class="selectInput" v-model="movieItem.releasedate" placeholder="请输入"/>
        </el-form-item>
        <el-form-item class="select_ed" prop='type'>
          <p>类型</p>
          <el-input  class="selectInput" v-model="movieItem.type" placeholder="请输入"/>
        </el-form-item>
        <el-form-item class="select_ed" prop='director'>
          <p>导演</p>
          <el-input  class="selectInput" v-model="movieItem.director" placeholder="请输入"/>
        </el-form-item>
        <el-form-item class="select_ed" prop='introduction'>
          <p>简介</p>
          <el-input  class="selectInput" v-model="movieItem.introduction" placeholder="请输入"/>
        </el-form-item>
      </div>

      <div class="btn" style="margin-top:50px;text-align: center;">
        <el-button type="primary" @click="submit()">提交</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import { addMovie} from '../../network/movie'

export default {
  components: {},
  data () {
    return {
      movieItem: {}
    }
  },
  methods: {
    submit() {
      console.log(this.movieItem);
      addMovie(this.movieItem).then(res => {
        console.log(res);
        this.$message({
          message: '添加成功！',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
