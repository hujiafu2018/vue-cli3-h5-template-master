<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Button @click="toggle" type="primary">弹出菜单</Button>
        <action-sheet v-model="show" :actions="actions" @select="onSelect"/>
      </div>

      <h2>选项状态</h2>
      <div>
        <Button @click="toggle('status')" type="primary">弹出菜单</Button>
      </div>

      <h2>展示取消按钮</h2>
      <div>
        <Button @click="toggle('cancle')" type="primary">弹出菜单</Button>
        <action-sheet 
        v-model="show1" 
        :actions="actions" 
        @select="onSelect"
         cancel-text="取消"
        @cancel="onCancel"
        :description="description"
        />
      </div>

      <h2>展示描述信息</h2>
      <div>
        <Button @click="toggle('descript')" type="primary">弹出菜单</Button>
      </div>


      <h2>展示标题栏</h2>
      <div>
        <Button @click="toggleTitle" type="primary">弹出菜单</Button>
        <action-sheet v-model="show2" title="标题">
            <p>内容</p>
        </action-sheet>
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar';
import { ActionSheet,Button,Toast   } from 'vant';

Vue.use(ActionSheet);
Vue.use(Toast)

let nomalStatus = [
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' }
]

let actionsStatus = [
    { name: '选项', color: '#07c160' },
    { loading: true },
    { name: '禁用选项', disabled: true }
]
export default {
  components: {
     TopBar,
     ActionSheet,
     Button 
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      description: '',
      actions: [

      ]
    }
  },
  methods: {
    onSelect(item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false;
      Toast(item.name);
    },
    toggle(op) {
      op === 'status' ? this.actions = actionsStatus : this.actions = nomalStatus
      op === 'cancle' ? this.show1 = !this.show1 : this.show = !this.show
      if(op === 'descript'){
        this.description = '这是一段描述信息'
      }
    },
    toggleTitle() {
      this.show2 = !this.show2
    },
    onCancel() {
      Toast('取消')
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