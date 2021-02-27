<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>默认样式</h2>
      <div>
        <Button @touchstart.stop="toggle('show')" type="primary">弹出默认键盘</Button>
        <NumberKeyboard 
          :show="show"
          extra-key="."
          close-button-text="完成"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </div>

      <h2>自定义样式</h2>
      <div>
        <Button @touchstart.stop="toggle('showStyle')" type="primary">弹出默认键盘</Button>
        <NumberKeyboard 
          :show="showStyle"
          extra-key="."
          theme="custom"
          close-button-text="完成"
          @blur="showStyle = false"
          @input="onInput"
          @delete="onDelete"
        />
      </div>


      <h2>双向绑定</h2>
      <div>
        <Button @touchstart.stop="toggle('showModel')" type="primary">{{ num || '这里即将显示你输入的' }}</Button>
        <NumberKeyboard 
          :show="showModel"
          extra-key="."
          close-button-text="完成"
          @blur="showModel = false"
          @input="onInput"
          @delete="onDelete"
          v-model="num"
        />
      </div>
     
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar'
import { NumberKeyboard ,Button,Toast  } from 'vant';

 
Vue.use(NumberKeyboard);
Vue.use(Toast);
export default {
  components: {
     TopBar,
     NumberKeyboard,
     Button
  },
  data() {
    return {
      show: false,
      showStyle: false,
      showModel: false,
      num:''
    }
  },
  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    },
    toggle(op) {
      this[op] = !this[op]
    }
  }
}
</script>

<style scoped lang="scss">

</style>