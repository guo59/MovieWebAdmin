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
import {getMovieById, updateMovieById} from '../../network/movie'

export default {
  components: {},
  data () {
    return {
      id: '',
      movieItem: {}
    }
  },
  created() {
    this.id = this.$route.params.id
    this._getMovieById()
  },
  methods: {
    _getMovieById() {
      getMovieById(this.id).then(res => {
        this.movieItem = res.data
        console.log(this.movieItem);
      })
    },
    submit(){
      updateMovieById(this.id, this.movieItem).then(res => {
        console.log(res);
        this.$message({
          message: '提交成功！',
          offset: 120,
          type: 'success'
        });
      })
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
