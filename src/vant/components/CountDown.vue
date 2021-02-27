<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <CountDown :time="time"/>
          </div>

          <h2>自定义格式</h2>
          <div>
            <CountDown 
            :time="time"
            format="DD 天 HH 时 mm 分 ss 秒"
            />
          </div>

          <h2>毫秒级渲染</h2>
          <div>
            <CountDown 
             millisecond
            :time="time"
             format="HH:mm:ss:SS"
            />
          </div>

          <h2>自定义样式</h2>
          <div>
            <CountDown :time="time">
              <template v-slot="timeData">
                  <span class="item">{{ timeData.hours }}</span>
                  <span class="item">{{ timeData.minutes }}</span>
                  <span class="item">{{ timeData.seconds }}</span>
              </template>
            </CountDown>
          </div>

          <h2>基础用法</h2>
          <div>
            <CountDown
              ref="countDown"
              millisecond
              :time="3000"
              :auto-start="false"
              format="ss:SSS"
              @finish="finish"
            />
          </div>
          <Grid>
            <GridItem text="开始" icon="play-circle-o" @click="start"/>
            <GridItem text="暂停" icon="pause-circle-o" @click="pause"/>
            <GridItem text="重置" icon="replay" @click="reset"/>
          </Grid>
         
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  CountDown,Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
export default {
    components: {
        TopBar,
        CountDown,
        Grid,
        GridItem
    },
    data() {
        return {
           time: 30 * 60 * 60 * 1000
        }
    },
    methods: {
      start() {
        this.$refs.countDown.start();
      },
      pause() {
        this.$refs.countDown.pause();
      },
      reset() {
        this.$refs.countDown.reset();
      },
      finish() {
        this.$toast('倒计时结束');
      }
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

.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>