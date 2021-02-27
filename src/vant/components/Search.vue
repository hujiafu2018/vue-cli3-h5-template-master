<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Search placeholder="请输入搜索关键词" v-model="value"/>
      </div>

      <h2>事件监听</h2>
      <div>
        <Search 
        placeholder="请输入搜索关键词" 
        v-model="value"     
        show-action
        @search="onSearch"
        @cancel="onCancel"
        />
      </div>


      <h2>自定义按钮</h2>
      <div>
        <Search 
        placeholder="请输入搜索关键词" 
        v-model="value"
        show-action
        shape="round"
        @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </Search>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Search,Toast  } from 'vant';

Vue.use(Search );
export default {
  components: {
     TopBar,
     Search 
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(){
      Toast('搜索')
    },
    onCancel(){
      Toast('取消')
    },
  }
}
</script>

<style scoped lang="scss">

</style>