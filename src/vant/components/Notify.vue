<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Button type="primary" @click="baseNotify">通知</Button>
      </div>

      <h2>通知类型</h2>
      <div>
        <Button type="info" @click="baseNotify('primary')">primary</Button>
        <Button type="primary" @click="baseNotify('success')">success</Button>
        <Button type="danger" @click="baseNotify('danger')">danger(默认)</Button>
        <Button type="warning" @click="baseNotify('warning')">warning</Button>
      </div>

      <h2>自定义通知</h2>
      <div>
        <Button type="primary" @click="definReply">通知</Button>
      </div>

      <h2>组件内调用</h2>
      <div>
        <Button type="primary" @click="handle">通知</Button>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { Notify ,Button } from 'vant'

Vue.use(Notify);
export default {
  components: {
     TopBar,
     Button
  },
  data() {
    return {

    }
  },
  methods: {
    baseNotify(op) {
     op ? Notify({ type: op, message: '通知内容' }) :  Notify('通知内容');
    },
    definReply() {
      Notify({
        message: '自定义颜色',
        color: '#ad0000',
        background: '#ffe1e1',
        duration: 1000
      });
    },
    handle() {
      this.$notify('提示文案')
    }
  }
}
</script>

<style scoped lang="scss">
  .main-con {
    padding: 0 .3rem;
  }

button {
  margin: .2rem .1rem;
}
</style>