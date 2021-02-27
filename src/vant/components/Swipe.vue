<template>
  <div>
    <Top-Bar />
      <div class="main-con" ref="container">
          <h2>基础用法</h2>
          <div>
            <Swipe :autoplay="3000" indicator-color="black">
              <SwipeItem>1</SwipeItem>
              <SwipeItem>2</SwipeItem>
              <SwipeItem>3</SwipeItem>
              <SwipeItem>4</SwipeItem>
            </Swipe>
          </div>

          <h2>图片懒加载</h2>
          <div>
            <Swipe :autoplay="3000" indicator-color="black">
              <SwipeItem v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </SwipeItem>
            </Swipe>
          </div>

          
          <h2>监听 change 事件</h2>
          <div>
            <Swipe @change="onChange">
              <SwipeItem v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </SwipeItem>
            </Swipe>
          </div>

          <h2>纵向滚动</h2>
          <div>
            <Swipe @change="onChange"  style="height: 200px;" vertical>
              <SwipeItem v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </SwipeItem>
            </Swipe>
          </div>

          <h2>自定义滑块大小</h2>
          <div>
            <Swipe @change="onChange" :width="300" :loop="false">
              <SwipeItem v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </SwipeItem>
            </Swipe>
          </div>

          <h2>自定义指示器</h2>
          <div>
            <Swipe @change="onChange">
              <SwipeItem v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </SwipeItem>
                <div class="custom-indicator" slot="indicator">
                  {{ current + 1 }}/4
                </div>
            </Swipe>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Swipe,SwipeItem, Lazyload,Toast  } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
export default {
    components: {
      TopBar,
      Swipe,
      SwipeItem
    },
    data() {
        return {
          images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
          ],
          current: 0
        }
    },
    mounted() {

    },
    methods: {
      onChange(index) {
        Toast('当前 Swipe 索引：' + index);
        this.current = index;
      }
    }

}
</script>

<style scoped lang="scss">
.main-con {
  height: 200vh;
  padding: 0 .15rem;
  color: $black-light-5;

  .van-swipe-item {
    text-align: center;

    img {
      width: 100%;
    }
  }
}
</style>