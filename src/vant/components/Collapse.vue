<template>
  <div>
    <Top-Bar />
      <div class="main-con">
          <h2>基础用法</h2>
          <div>
            <Collapse v-model="activeNames">
               <CollapseItem title="标题1" name="1">内容1</CollapseItem>
               <CollapseItem title="标题2" name="2">内容2</CollapseItem>
               <CollapseItem title="标题3" name="3" disabled>内容3</CollapseItem>
            </Collapse>
          </div>
         <h2>手风琴</h2>
          <div>
            <Collapse v-model="activeNamesString" accordion>
               <CollapseItem title="标题1" name="1">内容1</CollapseItem>
               <CollapseItem title="标题2" name="2">内容2</CollapseItem>
               <CollapseItem title="标题3" name="3" disabled>内容3</CollapseItem>
            </Collapse>
          </div>
         <h2>自定义标题内容</h2>
          <div>
            <Collapse v-model="activeNames">
               <CollapseItem name="1">
                  <div slot="title">标题1 <Icon name="question-o" /></div>
                  内容1
               </CollapseItem>
               <CollapseItem name="2">
                  <div slot="title">标题2 <Icon name="question-o" /></div>
                  内容2
               </CollapseItem>
               <CollapseItem name="3" disabled>
                  <div slot="title">标题3 <Icon name="question-o" /></div>
                  内容3
               </CollapseItem>
            </Collapse>
          </div>


      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopBar from './../TopBar';
import {  Collapse, CollapseItem,Icon } from 'vant';

Vue.use(Collapse).use(CollapseItem);
export default {
    components: {
        TopBar,
        Collapse,
        CollapseItem,
        Icon
    },
    data() {
        return {
           activeNames: ['1'],
           activeNamesString: '1'
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

    button {
        margin: .1rem;
    }

    .van-button--large {
        margin-left: 0;
        margin-right: 0; 
    }
}
</style>