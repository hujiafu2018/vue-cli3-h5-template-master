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
          <h2>文字省略</h2>
          <div class="base">
             <!-- 最多显示一行 -->
            <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略</div>

            <!-- 最多显示两行 -->
            <div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略</div>

            <!-- 最多显示三行 -->
            <div class="van-multi-ellipsis--l3">这是一段最多显示三行的文字，多余的内容会被省略</div>
          </div>
          <h2>1px 边框</h2>
          <div class="base">
           <!-- 上边框 -->
            <div class="van-hairline--top">上边框</div>

            <!-- 下边框 -->
            <div class="van-hairline--bottom">下边框</div>

            <!-- 左边框 -->
            <div class="van-hairline--left">左边框</div>

            <!-- 右边框 -->
            <div class="van-hairline--right">右边框</div>

            <!-- 上下边框 -->
            <div class="van-hairline--top-bottom">上下边框</div>

            <!-- 全边框 -->
            <div class="van-hairline--surround">全边框</div>
          </div>
          <h2>动画</h2>
          <div>
              <!-- 淡入 -->
                <transition name="van-fade">
                    <div v-show="visible">Fade</div>
                </transition>

                <!-- 上滑进入 -->
                <transition name="van-slide-up">
                    <div v-show="visible">Slide Up</div>
                </transition>

                <!-- 下滑进入 -->
                <transition name="van-slide-down">
                    <div v-show="visible">Slide Down</div>
                </transition>

                <!-- 左滑进入 -->
                <transition name="van-slide-left">
                    <div v-show="visible">Slide Left</div>
                </transition>

                <!-- 右滑进入 -->
                <transition name="van-slide-right">
                    <div v-show="visible">Slide Right</div>
                </transition>
          </div>
      </div>
  </div>
</template>

<script>
import { NavBar,Sticky} from 'vant';
export default {
    components: {
        Sticky,
        NavBar
    },
    data() {
        return {
            visible:false
        }
    },
    mounted() {
        this.trandform()
    },
    methods: {
        onClickLeft() {
            history.go(-1)
        },
        trandform() {
            setTimeout(() => {
                this.visible = !this.visible
            },500)
        }
    }
}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;

    .base {
        div {
            margin-bottom: .2rem;
        }
    }
}
</style>