<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Picker
          :columns="columns" 
          @change="onChange"
        />
      </div>

      <h2>默认选中项</h2>
      <div>
        <Picker
          :columns="columns" 
          @change="onChange" 
          :default-index="2"
        />
      </div>

      
      <h2>展示顶部栏</h2>
      <div>
        <Picker
          show-toolbar
          title="标题"
          :columns="columns" 
           @change="onChange" 
          @cancel="onCancel"
          @confirm="onConfirm"
        />
      </div>

      <h2>禁用选项</h2>
      <div>
        <Picker
          :columns="disabelData" 
        />
      </div>

      <h2>搭配弹出层使用</h2>
      <div>
        <Button type="primary" @click="showPopup">弹出picker</Button>{{ val || '这里即将显示弹出层选择的值'}}
        <Popup
        v-model="showPicker" 
        position="bottom"
        >
          <Picker
            :columns="disabelData" 
            @change="onChange" 
          />
        </Popup>

      </div>

      <h2>多列联动</h2>
      <div>
        <Picker
          :columns="columnsMore" 
          @change="onChangeMore"
        />
      </div>

      
      <h2>加载状态</h2>
      <div>
        <Picker
          :columns="columns" 
          loading
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar'
import { Picker,Toast,Popup,Button } from 'vant';

Vue.use(Toast)
Vue.use(Picker)

const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export default {
  components: {
     TopBar,
      Picker,
      Popup,
      Button
  },
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      disabelData: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
      val: '',
      showPicker: false,
      columnsMore: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  methods: {
    onChange(picker, value, index) {
      this.val = value.text
      this.showPicker = false
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    },
    showPopup() {
      this.showPicker = ! this.showPicker
    },
    onChangeMore(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
}
</script>

<style scoped lang="scss">

</style>