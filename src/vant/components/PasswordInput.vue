<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <PasswordInput 
            :value="value1"
            info="密码为 6 位数字"
            :focused="show"
            @focus="toggle('show')"
        />
        <NumberKeyboard 
          :show="show"
          extra-key="."
          close-button-text="完成"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </div>

      <h2>自定义长度及明文展示</h2>
      <div>
        <PasswordInput 
            :value="value2"
            info="密码为 4 位数字"
            :length="4"
            :gutter="15"  
            :focused="showDef"
            @focus="toggle('showDef')"
            :mask="false"
        />
        <NumberKeyboard 
          :show="showDef"
          extra-key="."
          close-button-text="完成"
          @blur="showDef = false"
          @input="onInputDef"
          @delete="onDeleteDef"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar'
import { NumberKeyboard ,PasswordInput,Toast  } from 'vant';

 
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Toast);
export default {
  components: {
     TopBar,
     NumberKeyboard,
     PasswordInput,
  },
  data() {
    return {
      show: false,
      showDef: false,
      value1: '123',
      value2: '2'
    }
  },
  methods: {
    toggle(op) {
      this[op] = !this[op]
    },
    onInput(key) {
      this.value1 = (this.value1 + key).slice(0, 6);
    },
    onDelete() {
       this.value1 = this.value1.slice(0, this.value1.length - 1);
    },
    onInputDef(key) {
      this.value2 = (this.value2 + key).slice(0, 4);
    },
    onDeleteDef() {
       this.value2 = this.value2.slice(0, this.value2.length - 1);
    }
  }
}
</script>

<style scoped lang="scss">

</style>