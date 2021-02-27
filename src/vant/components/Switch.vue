<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <MySwitch v-model="value" />
      </div>

      <h2>禁用状态</h2>
      <div>
        <MySwitch v-model="value" disabled/>
      </div>

      <h2>加载状态</h2>
      <div>
        <MySwitch v-model="value" loading/>
      </div>

      <h2>自定义大小</h2>
      <div>
        <MySwitch v-model="value" size="24px"/>
      </div>

      <h2>自定义颜色</h2>
      <div>
        <MySwitch v-model="value" active-color="#07c160" inactive-color="#ee0a24"/>
      </div>

      <h2>异步控制</h2>
      <div>
        <MySwitch :value="value1" @input="onInput"/>
      </div>


    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Switch as MySwitch ,Toast,Dialog   } from 'vant';

Vue.use(MySwitch);
export default {
  components: {
     TopBar,
     MySwitch  
  },
  data() {
    return {
      value: true,
      value1: true
    }
  },
  methods: {
    onChange(val) {
      Toast(val)
    },
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.value1 = checked;
      });
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