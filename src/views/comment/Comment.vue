<template>
  <div>
    <el-table
      :data="comment"
      style="width: 100%;"
      height="500"
      border>
      <el-table-column
        prop="id"
        label="电影id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="电影名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="content"
        label="评论内容">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户"
        width="150">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="评论时间"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text"
                    size="small"
                    @click.native.prevent="deleteRow(scope.$index, movies)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getComment} from '../../network/movie'

export default {
  components: {},
  data () {
    return {
      comment: []
    }
  },
  created() {
    this._getComment()
  },
  methods: {
    _getComment() {
      getComment().then(res => {
        this.comment = res.data
      })
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
