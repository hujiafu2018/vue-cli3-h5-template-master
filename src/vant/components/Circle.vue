<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                :text="text"
             />
          </div>
          <h2>宽度定制</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                :stroke-width="60"
                :text="text"
             />
          </div>
          <h2>颜色定制</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                layer-color="#ebedf0"
                text="轨道颜色"
             />
          </div>
          <h2>颜色渐变</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                :color="gradientColor"
                text="颜色渐变"
             />
          </div>
          <h2>逆时针方向</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                :clockwise="false"
                text="逆时针方向"
             />
          </div>

          <h2>大小定制</h2>
          <div>
             <van-circle 
                v-model="currentRate"
                :rate="30"
                :speed="100"
                size="120px"
                text="大小定制"
             />
          </div>
       
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Circle as vanCircle } from 'vant';

Vue.use(vanCircle)
export default {
    components: {
        vanCircle,
        TopBar
    },
    computed: {
        text() {
        return this.currentRate.toFixed(0) + '%'
        }
    },
    data() {
        return {
            currentRate: 0,
            gradientColor: {
                '0%': '#3fecff',
                '100%': '#6149f6'
            }
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
}
</style>