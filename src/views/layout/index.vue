<template>
  <div class="layout">
     <div class="nav-top" @click="goVant">
        <nav-bar title="go vant"/>
     </div>
     <div class="main">
         <div class="warp">
            <div 
            v-for="(item,index) in divCounts" 
            :key="index" 
            :style="{transform:'rotateY('+index*30+'deg)'}"
            >
            chen
            </div>
        </div>
            <div class="stars">
                <div class="star"></div>
                <div class="star pink"></div>
                <div class="star blue"></div>
                <div class="star yellow"></div>
            </div>
     </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
// import { DATE } from '@/utils/fomat_date'
// import { randomColor } from '@/utils/random'
// import URL from '@/utils/url'
// import { LocalStorage } from '@/utils/cache'

Vue.use(NavBar);
export default {
    components: {
        NavBar
    },
    mounted() {
        // const myDate = new DATE()
        // console.log(myDate.fomat())
        // console.log(randomColor())
        // let url = new URL()
        // console.log(url.getPath())
        // LocalStorage.set('user','133')
        // console.log(LocalStorage.get('user'))
        // LocalStorage.remove('user')
    },
    data() {
        return {
            divCounts:12
        }
    },
    methods: {
        goVant() {
            this.$router.push('/vant')
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background-color: $color-bg-main;

        .nav-top{
            width: 100%;
        }

        .main {
            position: relative;
            width: 100%;
            flex: 1;
            background-color: $black;
            perspective:10rem;
            overflow: hidden;

            .warp{
                position: absolute;
                width: 4rem;
                height: 4rem;
                top: 50%;
                left: 50%;
                margin-top: -2rem;
                margin-left: -2rem;
                transform-style: preserve-3d;
                animation: myDiv 6s linear infinite;
                transition: 2s;
                div {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 1px solid $white;
                    border-radius: 50%;
                    transform-style: preserve-3d;
                    text-align: center;
                    line-height: 4rem;
                    color: $white;
                }
            }
        }
    }

    @keyframes myDiv {
        from {
            transform: rotateY(0);
        }
        to {
            transform: rotateY(360deg);
        }
    }

    .star {
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $white;
        top: 100px;
        left: 400px;
        position: relative;
        transform-origin: 100% 0;
        animation: star-ani 6s infinite ease-out;
        box-shadow: 0 0 5px 5px $white-light-3;
        opacity: 0;
        z-index: 2;
    }
    .star:after {
        content: '';
        display: block;
        top: 0px;
        left: 4px;
        border: 0px solid $white;
        border-width: 0px 90px 2px 90px;
        border-color: transparent transparent transparent $white-light-3;
        transform: rotate(-45deg) translate3d(1px, 3px, 0);
        box-shadow: 0 0 1px 0 $white-light-1;
        transform-origin: 0% 100%;
        animation: shooting-ani 3s infinite ease-out;
    }
    .pink {
        top: 30px;
        left: 395px;
        background: $color-bg-2;
        animation-delay: 5s;
        -webkit-animation-delay: 5s;
        -moz-animation-delay: 5s;
    }
    .pink:after {
        border-color: transparent transparent transparent $color-bg-2;
        animation-delay: 5s;
        -webkit-animation-delay: 5s;
        -moz-animation-delay: 5s;
    }
    .blue {
        top: 35px;
        left: 432px;
        background: $color-cyan;
        animation-delay: 7s;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
    }
    .blue:after {
        animation-delay: 7s;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
        animation-delay: 7s;
    }
    .yellow {
        top: 50px;
        left: 600px;
        background: $color-bg-1;
        animation-delay: 5.8s;
    }
    .yellow:after {
        border-color: transparent transparent transparent $color-bg-1;
        animation-delay: 5.8s;
    }
    @keyframes star-ani {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0) translate3d(0, 0, 0);
            -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
            -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
            -webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
            -moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
        }
        100% {
            opacity: 0;
            transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
            -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
            -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
        }
    }
</style>