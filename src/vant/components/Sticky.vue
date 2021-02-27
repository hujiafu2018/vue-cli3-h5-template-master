<template>
  <div>
    <Top-Bar />
      <div class="main-con" ref="container">
          <h2>基础用法</h2>
          <div>
            <Sticky>
              <Button type="primary">基础用法</Button>
            </Sticky>
          </div>

          <h2>吸顶距离</h2>
          <div>
            <Sticky :offset-top="50">
              <Button type="primary">吸顶距离</Button>
            </Sticky>
          </div>

          <h2>指定容器</h2>
          <div>
            <Sticky :container="container">
              <Button type="primary">指定容器</Button>
            </Sticky>
          </div>
        
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Sticky,Button  } from 'vant';
Vue.use(Sticky);
export default {
    components: {
      TopBar,
      Sticky,
      Button
    },
    data() {
        return {
          container: null
        }
    },
    mounted() {
      this.container = this.$refs.container;
    },
    methods: {

    }

}
</script>

<style scoped lang="scss">
.main-con {
  height: 200vh;
  padding: 0 .15rem;
  color: $black-light-5;
  border-top: 1px solid $black;
}
</style>