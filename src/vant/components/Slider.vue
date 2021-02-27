<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Slider  v-model="value" @change="onChange"/>
      </div>

      <h2>指定选择范围</h2>
      <div>
        <Slider  v-model="value" @change="onChange" :min="-50" :max="50"/>
      </div>

      <h2>禁用</h2>
      <div>
        <Slider  v-model="value" disabled />
      </div>


      <h2>指定步长</h2>
      <div>
        <Slider  v-model="value1" :step="10" />
      </div>


      <h2>自定义样式</h2>
      <div>
        <Slider  
        v-model="value" 
        @change="onChange"
        bar-height="4px"
        active-color="#ee0a24"
        />
      </div>

      <h2>自定义按钮</h2>
      <div>
        <Slider  
        v-model="value" 
        active-color="#ee0a24"
        >
          <div
            slot="button"
            class="custom-button"
          >
          {{value}}
          </div>
        </Slider>
      </div>

      <h2>垂直方向</h2>
      <div :style="{ height: '100px' }">
        <Slider  v-model="value" @change="onChange"  vertical/>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Slider,Toast  } from 'vant';

Vue.use(Slider );
export default {
  components: {
     TopBar,
     Slider 
  },
  data() {
    return {
      value: 0,
      value1: 0
    }
  },
  methods: {
    onChange(val) {
      Toast(val)
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