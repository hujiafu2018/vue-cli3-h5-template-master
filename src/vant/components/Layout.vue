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
          <div class="base">
            <Row>
              <Col span="8">span="8"</Col>
              <Col span="8">span="8"</Col>
              <Col span="8">span="8"</Col>
            </Row>
            <Row>
              <Col span="8">span="8"</Col>
              <Col span="4" offset="4">span="8"</Col>
              <Col span="8">span="8"</Col>
            </Row>
          </div>
         <h2>设置列元素间距(单元格padding)</h2>
          <div class="base">
            <Row gutter="20">
              <Col span="8">span="8"</Col>
              <Col span="8">span="8"</Col>
              <Col span="8">span="8"</Col>
            </Row>
          </div>
        <h2>Flex 布局</h2>
          <div class="base">
              <!-- 左对齐 -->
            <Row type="flex">
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
            </Row>
            <!-- 居中 -->
            <Row type="flex" justify="center">
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
            </Row>
            <!-- 右对齐 -->
            <Row type="flex" justify="end">
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
            </Row>
            <!-- 两端对齐 -->
            <Row type="flex" justify="space-between">
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
            </Row>
            <!-- 每个元素的两侧间隔相等 -->
            <Row type="flex" justify="space-around">
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
              <Col span="4">span="8"</Col>
            </Row>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,Sticky,Row,Col} from 'vant';
Vue.use(Row).use(Col)
export default {
    components: {
        Sticky,
        NavBar,
        Row,
        Col
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

    .base {
        .van-row {
            margin-bottom: .5rem;
        }
        .van-col:nth-child(1) {
            background-color: $black-light-2
        }
        .van-col:nth-child(2) {
            background-color: $black-light-5
        }
        .van-col:nth-child(3) {
            background-color: $black-light-7
        }
    }
}
</style>