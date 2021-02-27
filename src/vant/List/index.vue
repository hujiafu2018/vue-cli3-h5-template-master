<template>
  <div class="vant-list">
    <Sticky>
        <Nav-Bar
        :title="vantComponent"
        left-arrow
        @click-left="onClickLeft"
        >
            <Icon
                name="search"
                slot="right"
            />
        </Nav-Bar>
    </Sticky>
    
    <div class="main-list">
        <Cell class="list-item" v-for="(item,index) in vantComponentData" :key="index">
            <router-link :to="item.path || '/'">
                {{item.title}}
                <Icon name="arrow"/>
            </router-link>
        </Cell>
    </div>
  </div>
</template>

<script>
import { NavBar,Icon,Cell,Sticky  } from 'vant';
import Url from '@/utils/url'
import componentData from './../vant'
export default {
    name: 'vantList',
    components: {
        NavBar,
        Icon,
        Cell,
        Sticky
    },
    data() {
        return {
            listData: [],
            loading: false,
            finished: false,
            vantComponent: '',
            vantComponentData: []
        }
    },
    mounted() {
        this.handleUrl();
        this.handleCompontentData();
    },
    methods: {
        handleUrl () {
            let url = new Url(window.location.href)
            this.vantComponent = url.getQuery('component')
        },
        handleCompontentData() {
            componentData.map(item => {
                if(this.vantComponent === item.title){
                    this.vantComponentData = item.content
                }else{
                    return
                }
            })
        },
        onClickLeft() {
            history.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-list {
        .list-item {
            .van-cell__value a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: $black;
            }
        }
    }
</style>