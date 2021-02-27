<template>
  <div>
    <Top-Bar />
      <div class="main-con" ref="container">
          <h2>基础用法</h2>
          <div>
            <Tag>标签</Tag>
            <Tag type="primary">标签</Tag>
            <Tag type="success">标签</Tag>
            <Tag type="danger">标签</Tag>
            <Tag type="warning">标签</Tag>
          </div>

          <h2>圆角样式</h2>
          <div>
            <Tag round type="primary">标签</Tag>
            <Tag round type="success">标签</Tag>
            <Tag round type="danger">标签</Tag>
            <Tag round type="warning">标签</Tag>
          </div>

          <h2>标记样式</h2>
          <div>
            <Tag mark  type="primary">标签</Tag>
            <Tag mark  type="success">标签</Tag>
            <Tag mark  type="danger">标签</Tag>
            <Tag mark  type="warning">标签</Tag>
          </div>

          <h2>空心样式</h2>
          <div>
            <Tag plain  type="primary">标签</Tag>
            <Tag plain  type="success">标签</Tag>
            <Tag plain  type="danger">标签</Tag>
            <Tag plain  type="warning">标签</Tag>
          </div>

          <h2>自定义颜色</h2>
          <div>
            <Tag color="#f2826a">标签</Tag>
            <Tag color="#f2826a" plain>标签</Tag>
            <Tag color="#7232dd">标签</Tag>
            <Tag color="#ffe1e1" text-color="#ad0000">标签</Tag>
          </div>

          <h2>标签大小</h2>
          <div>
            <Tag plain  type="primary" size="medium">标签</Tag>
            <Tag plain  type="success" size="medium">标签</Tag>
            <Tag plain  type="danger" size="large">标签</Tag>
            <Tag plain  type="warning" size="large">标签</Tag>
          </div>

          <h2>可关闭标签</h2>
          <div>
            <Tag 
            round 
            type="primary"
            v-if="show.primary"
            closeable
            size="medium"
            @close="close('primary')"
            >
              标签
            </Tag>
            <Tag 
            round 
            v-if="show.success"
            closeable
            size="medium"
            type="success"
            @close="close('success')"
            >
            标签
            </Tag>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Tag  } from 'vant';
Vue.use(Tag);
export default {
    components: {
      TopBar,
      Tag
    },
    data() {
        return {
          show: {
            primary: true,
            success: true
          }
        }
    },
    mounted() {

    },
    methods: {
      close(type) {
        this.show[type] = false;
      }
    }

}
</script>

<style scoped lang="scss">
.main-con {
  height: 200vh;
  padding: 0 .15rem;
  color: $black-light-5;

  .van-tag  {
    margin: 0 .2rem;
  }

}
</style>