<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <SwitchCell v-model="value" title="标题"/>
      </div>

      <h2>禁用状态</h2>
      <div>
        <SwitchCell v-model="value" title="标题"  disabled/>
      </div>


      <h2>加载状态</h2>
      <div>
        <SwitchCell v-model="value" title="标题" loading/>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { SwitchCell   } from 'vant';

Vue.use(SwitchCell);
export default {
  components: {
     TopBar,
     SwitchCell  
  },
  data() {
    return {
      value: true,
    }
  },
  methods: {

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