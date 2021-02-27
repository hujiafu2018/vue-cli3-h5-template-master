<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Stepper v-model="value" />
      </div>

      <h2>步长设置</h2>
      <div>
        <Stepper v-model="value" step="2" />
      </div>

      <h2>限制输入范围</h2>
      <div>
        <Stepper v-model="value" min="5" max="8"/>
      </div>

      <h2>限制输入整数</h2>
      <div>
        <Stepper v-model="value" integer/>
      </div>

      <h2>禁用状态</h2>
      <div>
        <Stepper v-model="value" disabled/>
      </div>

      
      <h2>固定小数位数</h2>
      <div>
        <Stepper v-model="value"  step="0.2" :decimal-length="1" />
      </div>

            
      <h2>自定义大小</h2>
      <div>
        <Stepper v-model="value"  input-width="40px" button-size="32px" />
      </div>

                  
      <h2>异步变更</h2>
      <div>
        <Stepper 
        v-model="value1"    
        async-change
        @change="onChange1"
        />
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Stepper ,Toast  } from 'vant';

Vue.use(Stepper  );
export default {
  components: {
     TopBar,
     Stepper  
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
    },
    onChange1(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();

        // 注意此时修改 value 后会再次触发 change 事件
        this.value = value;
      }, 500);
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