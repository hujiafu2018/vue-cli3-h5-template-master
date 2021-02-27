<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <Tabs v-model="active">
        <Tab title="基础用法">
          <pull-refresh 
          v-model="isLoading" 
          @refresh="onRefresh"
          v-if="active === 0"
          >
            <p class="tab-content">刷新次数: {{ count1 }}</p>
          </pull-refresh>
        </Tab>
        <Tab title="刷新成功提示"/>
          <pull-refresh 
          v-model="isLoading" 
          @refresh="onRefresh" 
          success-text="刷新成功"
          v-if="active === 1"
          >
            <p class="tab-content">刷新次数: {{ count }}</p>
          </pull-refresh>
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { PullRefresh,Tab, Tabs } from 'vant'

Vue.use(PullRefresh );
Vue.use(Tab).use(Tabs);
export default {
  components: {
     TopBar,
     PullRefresh,
     Tab, 
     Tabs 
  },
  data() {
    return {
      active: 0,
      count1: 0,
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
</script>

<style scoped lang="scss">
  .main-con {
    padding: 0 .3rem;
  }

  .tab-content {
    height: 500px;
  }
</style>