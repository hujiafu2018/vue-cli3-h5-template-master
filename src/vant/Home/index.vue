<template>
  <div class="vant-home">
      <Nav-Bar
      title="vant"
      left-arrow
       @click-left="onClickLeft"
      >
        <Icon
            name="search"
            slot="right"
        />
      </Nav-Bar>
      <div class="antv-ad">
          <h1>
              <img src="https://img.yzcdn.cn/vant/logo.png" alt="">
              <span>Vant</span>
          </h1>
          <h2>轻量、可靠的移动端 Vue 组件库</h2>
      </div>
      <div class="vant-nav">
          <Grid :column-num="3">
            <Grid-Item
                v-for="(item,index) in vantNav"
                :key="index"
                icon="photo-o"
                :text="item.title"
                :to="'/vant-list?component='+item.title"
            />
        </Grid>
      </div>
  </div>
</template>

<script>
import { NavBar,Grid, GridItem,Icon } from 'vant';
export default {
    name:'vant-home',
    components: {
        NavBar,
        Icon,
        Grid, 
        GridItem
    },
    data() {
        return {
            vantNav:[
                {
                    title: '基础组件'
                },
                {
                    title: '表单组件'
                },
                {
                    title: '反馈组件'
                },
                {
                    title: '展示组件'
                },
                {
                    title: '导航组件'
                },
                {
                    title: '业务组件'
                }
            ]
        }
    },
    methods: {
        onClickLeft() {
            history.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .antv-ad {
        padding: 0 .2rem;
        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: .16rem;
            font-size: .32rem;
            font-weight: 400;
            img {
                width: .36rem;
            }
            span {
                font-style: .36rem;
                margin-left: .16rem;
            }
        }
        h2 {
            font-size: .16rem;
            padding-left: .16rem;
            font-style: .14rem;
            color: #ddd;
            text-align: center;
        }
    }
</style>