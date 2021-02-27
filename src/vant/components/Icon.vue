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
              <Icon name="chat-o" />
              <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          </div>
          <h2>提示信息</h2>
          <div>
              <Icon name="chat-o" dot/>
              <Icon name="chat-o" info='9'/>
              <Icon name="chat-o" info="99+"/>
          </div>
          <h2>图标颜色</h2>
          <div>
              <Icon name="chat-o" color="#1989fa"/>
              <Icon name="chat-o" color="#07c160"/>
          </div>
          <h2>尺寸</h2>
          <div>
              <Icon name="chat-o" size="40"/>
              <Icon name="chat-o" size="3rem"/>
          </div>
          <p>更多图标请移步官方示例
              <a href="https://youzan.github.io/vant/#/zh-CN/icon">vant-icon</a>
          </p>
      </div>
  </div>
</template>

<script>
import { NavBar,Sticky,Icon  } from 'vant';
export default {
    components: {
        Sticky,
        NavBar,
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
    i {
        font-size: .5rem;
        margin: 0 .1rem;
    }
}
</style>