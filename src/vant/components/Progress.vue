<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Progress :percentage="50"/>
          </div>
          <h2>线条粗细</h2>
          <div>
            <Progress :percentage="50" stroke-width="8"/>
          </div>
          <h2>置灰</h2>
          <div>
            <Progress inactive :percentage="50"/>
          </div>

          <h2>样式定制</h2>
          <div>
            <Progress pivot-text="橙色" color="#f2826a" :percentage="25"/>
            <Progress pivot-text="红色" color="#ee0a24" :percentage="50"/>
            <Progress pivot-text="紫色" color="#7232dd" :percentage="75"/>
          </div>
         
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Progress  } from 'vant';
Vue.use(Progress );
export default {
    components: {
      TopBar,
      Progress
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
    padding: 0 .15rem;
    color: $black-light-5;

    .van-progress {
      margin-bottom: .5rem;
    }
}
</style>