<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <notice-bar
              text="通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容"
              left-icon="volume-o"
            >
            </notice-bar>
          </div>
          <h2>禁用滚动</h2>
          <div>
            <notice-bar
              text="通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容"
              left-icon="volume-o"
              :scrollable="false"
            >
            </notice-bar>
          </div>
          <h2>多行展示</h2>
          <div>
            <notice-bar
              text="通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容"
              :scrollable="false"
              wrapable 
            >
            </notice-bar>
          </div>
          <h2>通知栏模式</h2>
          <div>
            <notice-bar
              mode="closeable"
              text="通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容"
            >
            </notice-bar>
            <notice-bar
              mode="link"
              text="通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容"
            >
            </notice-bar>
          </div>

          <h2>自定义样式</h2>
          <div>
            <notice-bar
              color="#1989fa"
              background="#ecf9ff"
              left-icon="info-o"
            >
                通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容通知内容文字内容文字内容文字内容
            </notice-bar>
          </div>            
            
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  NoticeBar  } from 'vant';
Vue.use(NoticeBar );
export default {
    components: {
       TopBar,
       NoticeBar 
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