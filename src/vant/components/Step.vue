<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Steps :active="active">
              <step>买家下单</step>
              <step>商家接单</step>
              <step>买家提货</step>
              <step>交易完成</step>
            </Steps>
          </div>
          <h2>自定义样式</h2>
          <div>
            <Steps 
            :active="active"
            active-icon="success"
            active-color="#38f"
            >
              <step>买家下单</step>
              <step>商家接单</step>
              <step>买家提货</step>
              <step>交易完成</step>
            </Steps>
          </div>

          <h2>竖向步骤条</h2>
          <div>
            <Steps :active="active" direction="vertical">
              <step>买家下单</step>
              <step>商家接单</step>
              <step>买家提货</step>
              <step>交易完成</step>
            </Steps>
          </div>
        
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Step,Steps  } from 'vant';
Vue.use(Step).use(Steps);
export default {
    components: {
      TopBar,
      Step,
      Steps
    },
    data() {
        return {
          active: 1
        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;
}
</style>