<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <radio-group v-model="value">
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
        </radio-group>
      </div>
      

      <h2>禁用状态</h2>
      <div>
        <radio-group v-model="value" disabled>
          <radio name="1">单选框 1</radio>
          <radio name="2">单选框 2</radio>
        </radio-group>
      </div>

      <h2>自定义颜色</h2>
      <div>
        <radio-group v-model="value">
          <radio name="1" checked-color="#07c160">单选框 1</radio>
          <radio name="2" checked-color="#07c160">单选框 2</radio>
        </radio-group>
      </div>

      
      <h2>自定义图标</h2>
      <div>
        <radio-group v-model="value">
          <radio name="1" checked-color="#07c160">
            单选框 1  
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? activeIcon : inactiveIcon"
              >
          </radio>
          <radio name="2" checked-color="#07c160">
            单选框 2  
            <img
            slot="icon"
            slot-scope="props"
            :src="props.checked ? activeIcon : inactiveIcon"
            >
          </radio>
        </radio-group>
      </div>

      <h2>与 Cell 组件一起使用</h2>
      <div>
        <radio-group v-model="radio">
          <cell-group>
            <cell title="单选框 1" clickable @click="radio = '1'">
              <radio name="1" slot="right-icon" />
            </cell>
            <cell title="单选框 2" clickable @click="radio = '2'">
              <radio name="2" slot="right-icon" />
            </cell>
          </cell-group>
        </radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { RadioGroup, Radio,Cell,CellGroup } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Cell).use(CellGroup);
export default {
  components: {
     TopBar,
     RadioGroup,
     Radio,
     Cell,
     CellGroup
  },
  data() {
    return {
      value: '',
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      radio: "1"
    }
  }
}
</script>

<style scoped lang="scss">
div[role=radio] {
  padding: .1rem;
}

img {
  width: .5rem;
}
</style>