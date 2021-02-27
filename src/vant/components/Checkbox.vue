<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <checkbox v-model="checked">复选框</checkbox>
      </div>
      <h2>禁用状态</h2>
      <div>
        <checkbox v-model="checked" disabled>复选框</checkbox>
        <checkbox v-model="noChecked" disabled>复选框</checkbox>
      </div>
      <h2>自定义形状</h2>
      <div>
        <checkbox v-model="checked" shape="square">复选框</checkbox>
      </div>
      <h2>自定义颜色</h2>
      <div>
        <checkbox v-model="checked" checked-color="#07c160">复选框</checkbox>
      </div>
      <h2>自定义图标</h2>
      <div>
        <checkbox v-model="checked" checked-color="#07c160">
          复选框
          <img
            slot="icon"
            slot-scope="props"
            :src="props.checked ? activeIcon : inactiveIcon"
          >
        </checkbox>
      </div>
      <h2>复选框组</h2>
      <div>
        <checkbox-group v-model="result">
          <checkbox name="a" >复选框 a</checkbox>
          <checkbox name="b" >复选框 b</checkbox>
          <checkbox name="c" >复选框 c</checkbox>
        </checkbox-group>
      </div>
      <h2>设置最大可选数</h2>
      <div>
        <checkbox-group v-model="result1" :max='2'>
          <checkbox name="a" >复选框 a</checkbox>
          <checkbox name="b" >复选框 b</checkbox>
          <checkbox name="c" >复选框 c</checkbox>
        </checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar'
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
export default {
  components: {
     TopBar,
     Checkbox,
     CheckboxGroup
  },
  data() {
    return {
      checked: true,
      noChecked: false,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      result: ['a','b'],
      result1:[]
    }
  }
}
</script>

<style scoped lang="scss">
  div[role=checkbox] {
    margin-bottom: .1rem;
  }
  .van-checkbox__icon {
    img {
      width: .5rem;
    }
  }
</style>