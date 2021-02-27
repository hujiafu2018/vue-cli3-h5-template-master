<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Button type="primary" @click="showOverlay('show')">显示</Button>
        <Overlay :show="show" @click="show = false" ></Overlay>
      </div>

      <h2>嵌入内容</h2>
      <div>
        <Button type="primary" @click="showOverlay('show1')">显示</Button>
        <Overlay :show="show1" @click="show1 = false" >
            <div class="wrapper" @click.stop>
              <div class="block" />
            </div>
        </Overlay>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import { Overlay ,Button } from 'vant'

Vue.use(Overlay);
export default {
  components: {
     TopBar,
     Button,
     Overlay
  },
  data() {
    return {
      show: false,
      show1: false
    }
  },
  methods: {
    showOverlay(op) {
      this[op] = !this[op]
    }
  }
}
</script>

<style scoped lang="scss">
  .main-con {
    padding: 0 .3rem;
  }

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>