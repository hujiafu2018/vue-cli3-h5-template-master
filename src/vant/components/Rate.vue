<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Rate v-model="value"/>
      </div>

      <h2>自定义图标</h2>
      <div>
        <Rate
         icon="like"
         void-icon="like-o"
         v-model="value"
         />
      </div>
      
      <h2>自定义样式</h2>
      <div>
        <Rate
          :size="25"
          color="#ee0a24"
          void-icon="star"
          void-color="#eee"
          v-model="value"
         />
      </div>

      <h2>半星</h2>
      <div>
        <Rate 
        v-model="value1"
        allow-half
        void-icon="star"
        void-color="#eee"
        />
      </div>

      <h2>自定义数量</h2>
      <div>
        <Rate v-model="value" :count="6"/>
      </div>
      

      <h2>禁用状态</h2>
      <div>
        <Rate v-model="value" disabled />
      </div>

      <h2>只读状态</h2>
      <div>
        <Rate v-model="value" readonly  />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Rate  } from 'vant';

Vue.use(Rate );
export default {
  components: {
     TopBar,
     Rate 
  },
  data() {
    return {
      value: 3,
      value1: 2.5
    }
  }
}
</script>

<style scoped lang="scss">

</style>