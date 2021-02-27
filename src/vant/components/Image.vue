<template>
  <div>
    <Sticky>
        <Nav-Bar
        :title="$route.name"
        left-arrow
        @click-left="onClickLeft"
        >
        </Nav-Bar>
    </Sticky>
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              >
              </VantImage>
          </div>
          <h2>填充模式</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
          </div>
          <h2>圆形图片</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                round
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
          </div>
          <h2>图片懒加载</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                lazy-load
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
          </div>
          <h2>加载中提示</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              >
                <template v-slot:loading>
                    <loading type="spinner" size="20" />
                </template>
              </VantImage>
          </div>
          <h2>加载失败提示</h2>
          <div>
              <VantImage 
                width="100"
                height="100"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              >
                <template v-slot:error>加载失败</template>
              </VantImage>
          </div>
      </div>
  </div>
</template>

<script>
// Image 组件直接引用的话会导致该标签在解析过程中出现于原有的dom标签排斥所以这里换个名字
import Vue from 'vue'
import { NavBar,Sticky,Image as VantImage,Lazyload,loading } from 'vant';
Vue.use(Lazyload) //  图片懒加配合使用
export default {
    components: {
        Sticky,
        NavBar,
        VantImage,
        loading
    },
    data() {
        return {
           
        }
    },
    methods: {
        onClickLeft() {
            history.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;
    i {
        font-size: .5rem;
        margin: 0 .1rem;
    }
}
</style>