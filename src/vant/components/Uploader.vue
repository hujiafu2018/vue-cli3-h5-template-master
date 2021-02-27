<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Uploader :after-read="afterRead"/>
      </div>

      <h2>图片预览</h2>
      <div>
        <Uploader v-model="fileList" multiple/>
      </div>

      <h2>限制上传数量</h2>
      <div>
        <Uploader v-model="fileList" multiple :max-count="2"/>
      </div>

      <h2>自定义上传样式</h2>
      <div>
        <Uploader v-model="fileList" multiple>
          <Button icon="photo" type="primary">上传图片</Button>
        </Uploader>
      </div>

      <h2>上传前校验</h2>
      <div>
        <Uploader :before-read="beforeRead"/>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { Uploader,Button,Toast   } from 'vant';

Vue.use(Uploader);
Vue.use(Toast)
export default {
  components: {
     TopBar,
     Uploader,
     Button 
  },
  data() {
    return {
      value: true,
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
     Toast(file.type)
      // console.log(file);
    },
        // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
    
      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
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