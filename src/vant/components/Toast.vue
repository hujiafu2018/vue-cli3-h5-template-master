<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Button type="primary" @click="defaultToast('default')">默认提示</Button>
      </div>
      <h2>加载提示</h2>
      <div>
        <Button type="primary" @click="loading">加载提示</Button>
      </div>

      <h2>成功/失败提示</h2>
      <div>
        <Button type="primary" @click="defaultToast('success')">成功</Button>
        <Button type="danger" @click="defaultToast('fail')">失败</Button>
      </div>

      <h2>自定义图标</h2>
      <div>
        <Button type="primary" @click="defineIcon('icon')">icon</Button>
        <Button type="danger" @click="defineIcon('img')">img</Button>
      </div>

      <h2>动态更新提示</h2>
      <div>
        <Button type="primary" @click="actionToast">动态更新提示</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { Toast,Button } from 'vant'
Vue.use(Toast);
export default {
  components: {
     TopBar,
     Button
  },
  data() {
    return {
    
    }
  },
  methods: {
    defaultToast(op) {
      op !== 'default' ? Toast[op]('提示') : Toast('提示内容');
    },
    loading() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner' // 加载图标
      });
    },
    defineIcon(op) {
        if(op === 'icon'){
          Toast({
            message: '自定义图标',
            icon: 'like-o'
          });
        }
        if(op === 'img'){
          Toast({
            message: '展示图片',
            icon: 'https://img.yzcdn.cn/vant/logo.png'
          });
        }
    },
    actionToast() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '倒计时 3 秒'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
        }
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    margin: 0 .2rem;
  }
</style>