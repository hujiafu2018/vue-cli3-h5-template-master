<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Button @click="showImg" type="primary">基础用法</Button>
          </div>

          <h2>基础用法</h2>
          <div>
            <Button @click="showImgPosition" type="primary">指定图片位置</Button>
          </div>

          <h2>异步关闭</h2>
          <div>
            <Button @click="showImgCloseAsync" type="primary">异步关闭</Button>
          </div>
          <!--这里存在 bug-->
          <h2>组件调用</h2>
          <div>
            <Button @click="showImgComponents" type="primary">组件调用</Button>
             <ImagePreview
              v-model="show"
              :images="images"
              @change="onChange"
            >
              <template v-slot:index>第{{ index }}页</template>
            </ImagePreview>
          </div>


          
         
      </div>
  </div>
</template>

<script>
import Vue from 'vue'  
import TopBar from './../TopBar';
import {  ImagePreview,Button } from 'vant';
Vue.use(ImagePreview);  // 仅在组件里面调用
export default {
    components: {
        TopBar,
        Button,
        ImagePreview  // 仅在组件里面调用
    },
    data() {
        return {
          instance: null,
          show: false,
          index: 0,
          images: [
            'https://img.yzcdn.cn/1.jpg',
            'https://img.yzcdn.cn/2.jpg'
          ]
        }
    },
    methods: {
      showImgComponents() {
        this.show = !this.show
      },
      showImg() {
        ImagePreview([
          'https://img.yzcdn.cn/1.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ]);
      },
      showImgPosition() {
          ImagePreview({
            images:[
              'https://img.yzcdn.cn/1.jpg',
              'https://img.yzcdn.cn/2.jpg'
            ],
            startPosition: 1,
            onClose() {
              // do something
            }
          });
      },
      showImgCloseAsync() {
        this.instance = ImagePreview({
            images: [
              'https://img.yzcdn.cn/1.jpg',
              'https://img.yzcdn.cn/2.jpg'
            ],
            asyncClose: true
        })
        setTimeout(() => {  // 异步关闭通过实例
          this.instance.close();
        }, 1000);
      },
      onChange(index) {
        this.index = index;
      }
    }
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
}
</style>