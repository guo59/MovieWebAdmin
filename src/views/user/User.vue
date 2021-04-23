<template>
  <el-table
    :data="users"
    style="width: 100%"
    border>
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createAt"
      label="创建时间">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text"
                   size="small"
                   @click.native.prevent="deleteRow(scope.$index, users)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getUsers, removeUser} from '../../network/user'

export default {
  components: {},
  data () {
    return {
      users: []
    }
  },
  created() {
    this._getUsers()
  },
  methods: {
    _getUsers() {
      getUsers().then(res => {
        this.users = res.data
        console.log(this.users);
      })
    },
    deleteRow(index, rows) {
      this.$confirm('确认删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeUser(rows[index].id).then(res => {
            console.log(res);
            this._getUsers()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
        })
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
