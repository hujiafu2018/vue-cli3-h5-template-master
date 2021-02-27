<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Tabs v-model="active">
              <Tab title="基础用法">
                <List
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <Cell     
                    v-for="item in list"
                    :key="item"
                    :title="item"
                  >
                  </Cell> 
                </List>
              </Tab>
              <Tab title="错误提示">
                <List
                  v-model="loading"
                  :finished="finished"
                  :error.sync="error"
                  error-text="请求失败，点击重新加载"
                  finished-text="没有更多了"
                  @load="onLoading"
                >
                  <Cell     
                    v-for="item in list"
                    :key="item"
                    :title="item"
                  >
                  </Cell> 
                </List>
              </Tab>
            </Tabs>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'  
import TopBar from './../TopBar';
import {  List,Tab, Tabs,Cell } from 'vant';
Vue.use(List);
Vue.use(Cell);
Vue.use(Tab).use(Tabs);
export default {
    components: {
        TopBar,
        Tab,
        Tabs,
        Cell,
        List
    },
    data() {
        return {
          active: 0,
          list: [],
          error: false,
          loading: false,
          finished: false
        }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
      onLoading() {
        setTimeout(() => {
          this.error = true
        },1000)
      }
    },

}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;

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