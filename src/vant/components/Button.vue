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
          <h2>按钮类型</h2>
          <div>
              <Button 
                v-for="(item,index) in buttonType"
                :key="index"
                :type="item.type"
              >
                {{item.tText}}
              </Button>
          </div>
          <h2>朴素按钮</h2>
         <div>
              <Button plain type="primary">朴素按钮</Button>
               <Button plain type="info">朴素按钮</Button>
         </div>
         <h2>细边框按钮</h2>
         <div>
              <Button plain hairline  type="primary">细边框按钮</Button>
               <Button plain hairline  type="info">细边框按钮</Button>
         </div>
         <h2>禁用按钮</h2>
         <div>
              <Button plain hairline disabled type="primary">禁用按钮</Button>
               <Button plain hairline disabled type="info">禁用按钮</Button>
         </div>
        <h2>加载状态</h2>
         <div>
              <Button loading type="primary" ></Button>
               <Button loading loading-type="spinner" type="info"></Button>
               <Button loading loading-text="加载中..." type="info"></Button>
         </div>
        <h2>按钮形状</h2>
         <div>
            <Button square  type="primary">方形按钮</Button>
            <Button round  type="info">圆形按钮</Button>
         </div>
         <h2>图标按钮</h2>
         <div>
            <Button icon="star-o"  type="primary">方形按钮</Button>
            <Button icon="star-o"  type="info">圆形按钮</Button>
            <Button icon="https://img.yzcdn.cn/vant/logo.png"  type="info">圆形按钮</Button>
         </div>
         <h2>按钮尺寸</h2>
         <div>
            <Button type="primary" size="large">大号按钮</Button>
            <Button type="info" size="normal">普通按钮</Button>
            <Button type="info" size="small">小型按钮</Button>
            <Button type="info" size="mini">迷你按钮</Button>
         </div>
         <h2>导航按钮</h2>
         <div>
            <Button url="https://www.baidu.com"  type="primary">URL 跳转</Button>
            <Button to="/"  type="info">路由跳转</Button>
         </div>
         <h2>自定义颜色</h2>
         <div>
            <Button color="#7232dd">单色按钮</Button>
            <Button color="#7232dd" plain>单色按钮</Button>
            <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变按钮</Button>
         </div>
      </div>
  </div>
</template>

<script>
import { NavBar,Button,Sticky  } from 'vant';
export default {
    components: {
        Button,
        Sticky,
        NavBar
    },
    data() {
        return {
            //按钮类型
            buttonType:[
                {
                    type:'default',
                    tText:'默认按钮'
                },
                {
                    type:'primary',
                    tText:'主要按钮'
                },
                {
                    type:'info',
                    tText:'信息按钮'
                },
                {
                    type:'warning',
                    tText:'警告按钮'
                },{
                    type:'danger',
                    tText:'危险按钮'
                }
            ],
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

    button {
        margin: .1rem;
    }

    .van-button--large {
        margin-left: 0;
        margin-right: 0; 
    }
}
</style>