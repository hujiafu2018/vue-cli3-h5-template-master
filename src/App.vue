<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
// import { Button } from 'vant';
// import IconSvg from '@/components/icon-svg'
// import LayOut from '@/views/layout'
export default {
  components:{
    // Button
    // LayOut
  },
  data () {
    return {
      // arr1:[1,2,3,4,5,6],
      // arr2:[6,5,4,3,2,1],
      // testArr:[]
    }
  },
  mounted() {
    // this.testArr = [...this.arr1,...this.arr2]
  }
}
</script>>

<style lang="scss">
//demo
// .test-ellipsis{
//   @include text-ellipsis(2);
// }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
 

//   a {
//     font-weight: bold;
//      color: $text-color;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// .test-data{
//   font-size: .3rem;
// }

// .icon-test{
//   width: 10px;
//   height: 10px;
//   color: $text-color;
//   font-size: .1rem;
// }
</style>
