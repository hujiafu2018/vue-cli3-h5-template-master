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
             <Cell-Group>
                 <!-- 只设置value时内容会左对齐 -->
                 <cell value="内容"></cell>
                 <cell title="单元格" value="内容" label="描述信息"></cell>
             </Cell-Group>
          </div>
          <h2>尺寸</h2>
          <div>
             <Cell-Group>
                 <cell title="单元格" value="内容" size="large"></cell>
                 <cell title="单元格" value="内容" size="small" label="描述信息"></cell>
             </Cell-Group>
          </div>
          <h2>图标</h2>
          <div>
             <Cell-Group>
                 <cell title="单元格" value="内容" size="large" icon="location-o"></cell>
                 <cell title="单元格" value="内容" size="small" label="描述信息" icon="location-o"></cell>
             </Cell-Group>
          </div>
          <h2>展示箭头</h2>
          <div>
             <Cell-Group>
                 <cell title="单元格" value="内容" is-link></cell>
                 <cell title="单元格" value="内容" is-link arrow-direction="down"></cell>
             </Cell-Group>
          </div>
          <h2>页面导航</h2>
          <div>
             <Cell-Group>
                 <cell title="跳转外链" value="百度" is-link url="https://www.baidu.com"></cell>
                 <cell title="路由跳转" value="首页" is-link to="/"></cell>
             </Cell-Group>
          </div>
          <h2>分组标题</h2>
          <div>
             <Cell-Group title="分组1">
                 <cell title="单元格" value="内容" size="large"></cell>
             </Cell-Group>
            <Cell-Group title="分组2">
                 <cell title="单元格" value="内容" size="large"></cell>
             </Cell-Group>
          </div>
          <h2>使用插槽</h2>
          <div>
             <Cell value="内容">
                 <template slot="title">
                     <span class="custom-title">单元格</span>
                     <Tag type="danger">标签</Tag>
                 </template>
             </Cell>
             <Cell title="单元格" icon="shop-o">
                 <Icon slot="right-icon" name="search" style="line-height: inherit;"></Icon>
             </Cell>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Cell, CellGroup,Sticky,Tag,Icon  } from 'vant';

Vue.use(Cell).use(CellGroup);
export default {
    components: {
        Cell,
        CellGroup,
        Sticky,
        NavBar,
        Tag,
        Icon
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
}
</style>