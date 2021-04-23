<template>
  <div class="movie-poster">
    <div class="close">
      <i class="el-icon-close" @click="close"></i>
    </div>
    <img :src="imgSrc"/>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: ['imgSrc'],
  methods: {
    close() {
      this.$emit('closePoster')
    }
  }
}
</script>

<style type="text/css" scoped>
  .movie-poster {
    background-color: rgba(0, 0, 0, .2);
    text-align: center;
  }
  .close {
    font-size: 30px;
    text-align: right;
  }
  .movie-poster img {
    height: 400px;
  }
</style>
