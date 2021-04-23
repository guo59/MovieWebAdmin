<template>
  <div class="movie">
    <el-table
      :data="movies"
      style="width: 100%;"
      height="500"
      border>
      <el-table-column
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="电影名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="releasedate"
        label="上映日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="director"
        label="导演"
        width="100">
      </el-table-column>
      <el-table-column
        prop="introduction"
        label="简介">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text"
                    size="small"
                    @click="handlePoster(scope.$index, scope.row)">查看海报</el-button>
          <el-button type="text"
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="text"
                    size="small"
                    @click.native.prevent="deleteRow(scope.$index, movies)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="movie-poster" v-if="showPoster">
      <movie-poster :imgSrc='imgSrc' @closePoster='closePoster'/>
    </div>
  </div>
</template>

<script>
import { getMovies, removeMovie, getMoviePoster} from '../../network/movie'

import MoviePoster from './MoviePoster'

export default {
  components: {MoviePoster},
  data () {
    return {
      movies: [],
      imgSrc: '',
      showPoster: false
    }
  },
  created() {
    this._getMovies()
  },
  methods: {
    _getMovies() {
      getMovies().then(res => {
        this.movies = res.data
        console.log(this.movies);
      })
    },
    _getMoviePoster(id) {
      getMoviePoster(id).then(res => {
        console.log(res);
      })
    },
    deleteRow(index, rows) {
      this.$confirm('确认删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeMovie(rows[index].id).then(res => {
            console.log(res);
            this._getMovies()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
        })
    },
    handleEdit(index, row) {
        console.log(index, row);
        this.$router.push(`/home/movieedit/${row.id}`)
    },
    handlePoster(index, row) {
        this.imgSrc = `http://localhost:8000/movie/${row.id}/poster`
        this.showPoster = true
    },
    closePoster() {
      this.showPoster = false
    }
  }
}
</script>

<style type="text/css" scoped>
  .movie {
    position: relative;
  }
  .movie-poster {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 100px;
    width: 70%;
  }
</style>
