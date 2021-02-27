<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Skeleton title :row="3"/>
          </div>
          <h2>显示头像</h2>
          <div>
            <Skeleton title avatar :row="3"/>
          </div>
          <h2>展示子组件</h2>
          <div>
            <Skeleton title :row="3" :loading="loading">
              <div>实际内容</div>
            </Skeleton>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Skeleton  } from 'vant';
Vue.use(Skeleton );
export default {
    components: {
      TopBar,
      Skeleton
    },
    data() {
        return {
         loading: true
        }
    },
    mounted() {
      setTimeout(()=>{
         this.loading = false
      },2000)
    },
    methods: {

    }

}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;
}
</style>