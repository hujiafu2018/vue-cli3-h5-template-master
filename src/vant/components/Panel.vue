<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Panel
             title="标题" 
             desc="描述信息" 
             status="状态"
            >
              <div>内容</div>
            </Panel>
          </div>
          <h2>高级用法</h2>
          <div>
            <Panel
             title="标题" 
             desc="描述信息" 
             status="状态"
            >
              <div>内容</div>
                <div slot="footer">
                  <Button size="small">按钮</Button>
                  <Button size="small" type="danger">按钮</Button>
                </div>
            </Panel>
          </div>

      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Panel,Button  } from 'vant';
Vue.use(Panel );
export default {
    components: {
       TopBar,
       Panel,
       Button
    },
    data() {
        return {
         
        }
    },
    methods: {
     
    }

}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;
    background-color: $color-bg-main;

    button {
        margin: .1rem;
    }

    .van-button--large {
        margin-left: 0;
        margin-right: 0; 
    }

    img {
      width: 100%;
    }

    .lazy-bg div{
      width: 100%;
      height: 500px;
      background-size: cover;
    }
}
</style>