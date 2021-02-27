<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Divider />
          </div>
          <h2>展示文字</h2>
          <div>
            <Divider>文本</Divider>
          </div>
          <h2>内容位置</h2>
          <div>
            <Divider content-position="left">文本</Divider>
            <Divider content-position="right">文本</Divider>
          </div>
          <h2>虚线</h2>
          <div>
            <Divider dashed/>
          </div>
          <h2>自定义样式</h2>
          <div>
            <Divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文本</Divider>
          </div>

      </div>
  </div>
</template>

<script>
import TopBar from './../TopBar';
import {  Divider } from 'vant';

export default {
    components: {
        TopBar,
        Divider
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
}
</style>