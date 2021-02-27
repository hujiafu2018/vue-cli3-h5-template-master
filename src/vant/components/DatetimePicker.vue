<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>选择完整时间</h2>
      <div>
        <DatetimePicker 
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        />
      </div>
      <h2>选择日期（年月日）</h2>
      <div>
        <DatetimePicker 
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        />
      </div>
      <h2>选择日期（年月）</h2>
      <div>
        <DatetimePicker 
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :formatter="formatter"
        />
      </div>
      <h2>选择时间</h2>
      <div>
        <DatetimePicker 
        v-model="currentTime"
        type="time"
        :min-date="minDate"
        />
      </div>
      <h2>选项过滤器</h2>
      <div>
        <DatetimePicker 
        v-model="currentTime"
        type="time"
        :min-date="minDate"
        :filter="filter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TopBar from './../TopBar'
import { DatetimePicker  } from 'vant';

Vue.use(DatetimePicker);
export default {
  components: {
    TopBar,
    DatetimePicker 
  },
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2020, 10, 1),
      currentDate: new Date(),
      currentTime: '12:00'
    }
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    },
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0)
      }

      return options;
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>