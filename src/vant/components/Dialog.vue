<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Button @click="toggle" type="primary">提示弹窗</Button>
      </div>

       <h2>含标题</h2>
      <div>
        <Button @click="alert" type="primary">提示弹窗</Button>
      </div>

      <h2>询问框</h2>
      <div>
        <Button @click="confirm" type="primary">提示弹窗</Button>
      </div>

      
      <h2>异步关闭</h2>
      <div>
        <Button @click="confirm1" type="primary">提示弹窗</Button>
      </div>

      <h2>全局方法</h2>
      <div>
        <Button @click="globalMethods" type="primary">提示弹窗</Button>
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from './../TopBar';
import { Button, Dialog } from 'vant'
export default {
  components: {
     TopBar,
     Button 
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggle() {
      Dialog({message:'弹框'})
    },
    alert() {
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      })
    },
    confirm() {
      Dialog.confirm({
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    },
    confirm1() {
      function beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      Dialog.confirm({
        title: '标题',
        message: '弹窗内容',
        beforeClose
      });
    },
    //  全局引入后自动挂载到Vue.prototype.$dialog上
    globalMethods() {
      this.$dialog.alert({message:'hello'})
    }
  }
}
</script>

<style scoped lang="scss">
  .main-con {
    padding: 0 .3rem;
  }

  .van-slider {
    margin: .4rem 0;
  }

  .custom-button {
    background-color: #ee0a24;
    color: #fff;
  }
</style>