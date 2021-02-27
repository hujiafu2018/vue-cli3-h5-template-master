<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <dropdown-menu>
          <dropdown-item v-model="value1" :options="option1"/>
          <dropdown-item v-model="value2" :options="option2"/>
        </dropdown-menu>
      </div>


      <h2>自定义菜单内容</h2>
      <div>
        <dropdown-menu>
          <dropdown-item v-model="value1" :options="option1"/>
          <dropdown-item title="筛选" ref="item">
            <switch-cell v-model="switch1" title="包邮"/>
            <switch-cell v-model="switch2" title="团购"/>
             <Button block type="info" @click="onConfirm">确认</Button>
          </dropdown-item>
        </dropdown-menu>
      </div>

      <h2>自定义选中态颜色</h2>
      <div>
        <dropdown-menu active-color="#ee0a24">
          <dropdown-item v-model="value1" :options="option1"/>
          <dropdown-item v-model="value2" :options="option2"/>
        </dropdown-menu>
      </div>

      <h2>向上展开</h2>
      <div>
        <dropdown-menu direction="up">
          <dropdown-item v-model="value1" :options="option1"/>
          <dropdown-item v-model="value2" :options="option2"/>
        </dropdown-menu>
      </div>

      
      <h2>禁用菜单</h2>
      <div>
        <dropdown-menu direction="up">
          <dropdown-item v-model="value1"  disabled :options="option1"/>
          <dropdown-item v-model="value2"  disabled :options="option2"/>
        </dropdown-menu>
      </div>


    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { DropdownMenu,DropdownItem,Button, SwitchCell, Toast } from 'vant'

Vue.use(DropdownMenu).use(DropdownItem);
export default {
  components: {
     TopBar,
     Button,
     DropdownMenu,
     DropdownItem,
     SwitchCell
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      switch1: '',
      switch2: ''
    }
  },
  methods: {
    onConfirm() {
      Toast('确认')
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