<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <SwipeCell>
          <template slot="left">
            <Button square type="primary" text="选择" />
          </template>
          <Cell :border="false" title="单元格" value="内容" />
          <template slot="right">
            <Button square type="danger" text="删除" />
            <Button square type="primary" text="收藏" />
          </template>
        </SwipeCell>
      </div>

      <h2>异步关闭</h2>
      <div>
        <SwipeCell :before-close="beforeClose">
          <template slot="left">
            <Button square type="primary" text="选择" />
          </template>
          <Cell :border="false" title="单元格" value="内容" />
          <template slot="right">
            <Button square type="danger" text="删除" />
          </template>
        </SwipeCell>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { SwipeCell,Button,Cell } from 'vant'

Vue.use(SwipeCell );
export default {
  components: {
     TopBar,
     SwipeCell,
     Button,
     Cell
  },
  data() {
    return {
    
    }
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) { // 这个方法vant必须指定到v2.3+
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-content {
    height: 500px;
  }
</style>