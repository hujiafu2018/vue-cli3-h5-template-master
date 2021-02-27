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
              <Popup key="base" v-model="show" :style="{ height: '20%' }">内容</Popup>
              <Popup 
              key="position" 
              :closeable="position === 'top' || position === 'bottom'"
              :round="position === 'left' || position === 'right'"
              close-icon="close"  
              :style="{ height: '20%' }" 
              v-model="positionShow" 
              :position="position"
              >
              {{position}}
              </Popup>
          </div>
      </div>
      <div class="handle-btn">
          <Button @click="showPopup()" type="primary">基础用法</Button>
          <div>
              <Button @click="showPopup('top')" type="primary">top</Button>
              <Button @click="showPopup('bottom')" type="primary">bottom</Button>
              <Button @click="showPopup('left')" type="primary">left</Button>
              <Button @click="showPopup('right')" type="primary">right</Button>
          </div>
      </div>
  </div>
</template>

<script>
import { NavBar,Sticky,Popup,Button} from 'vant';
export default {
    components: {
        Sticky,
        NavBar,
        Popup,
        Button
    },
    data() {
        return {
           show: false,
           positionShow: false,
           position: ''
        }
    },
    methods: {
        onClickLeft() {
            history.go(-1)
        },
        showPopup(op) {
            if(!op){
                this.show = !this.show
            }else {
                this.positionShow = !this.positionShow
                this.position = op
            }
        }
    }
}
</script>

<style scoped lang="scss">
.main-con {
    padding: 0 .15rem;
    color: $black-light-5;
}
.handle-btn button {
    margin: .1rem;
}
</style>