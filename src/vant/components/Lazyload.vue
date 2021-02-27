<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <img v-for="img in images" v-lazy="img" :key="img"/>
          </div>

          <h2>背景图懒加载</h2>
          <div class="lazy-bg">
            <div v-for="img in images" v-lazy:background-image="img" :key="img"></div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'  
import TopBar from './../TopBar';
import {  Lazyload } from 'vant';
Vue.use(Lazyload);  // 仅在组件里面调用
export default {
    components: {
        TopBar
    },
    data() {
        return {
          images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
          ]
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

    button {
        margin: .1rem;
    }

    .van-button--large {
        margin-left: 0;
        margin-right: 0; 
    }

    img {
      width: 100%;
    }

    .lazy-bg div{
      width: 100%;
      height: 500px;
      background-size: cover;
    }
}
</style>