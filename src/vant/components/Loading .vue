<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>加载类型</h2>
      <div>
        <Loading type="spinner"/>
      </div>

      <h2>自定义颜色</h2>
      <div>
        <Loading type="spinner"  color="#1989fa"/>
      </div>


      <h2>加载文案</h2>
      <div>
        <Loading size="24px"  color="#1989fa">加载中。。。</Loading>
      </div>

      <h2>垂直排列</h2>
      <div>
        <Loading size="24px" vertical color="#1989fa">加载中。。。</Loading>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { Loading  } from 'vant'

Vue.use(Loading )
export default {
  components: {
     TopBar,
     Loading
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .main-con {
    padding: 0 .3rem;
  }

  .van-slider {
    margin: .4rem 0;
  }

  .custom-button {
    background-color: #ee0a24;
    color: #fff;
  }
</style>