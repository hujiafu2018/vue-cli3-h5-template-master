<template>
  <div class="ck-box">
    <Top-Bar />
    <div class="main-con">
      <h2>基础用法</h2>
      <div>
        <Field v-model="value" placeholder="请输入用户名"/>
      </div>
      <h2>自定义类型</h2>
      <div>
        <Field 
        v-model="value" 
        placeholder="请输入用户名" 
        label="用户名" 
        right-icon="question-o"/>
        <Field 
        v-model="value" 
        placeholder="请输入密码" 
        type="password"
        label="密码"/>
      </div>
      <h2>禁用输入框</h2>
      <div>
        <Field v-model="value" placeholder="请输入用户名" disabled/>
      </div>
      <h2>错误提示</h2>
      <div>
        <Field v-model="value" placeholder="请输入用户名" error/>
        <Field v-model="value" placeholder="请输入用户名" error-message="手机号格式错误"/>
      </div>
      <h2>高度自适应</h2>
      <div>
        <Field     
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码">
          <Button type="primary" slot="button">发送验证码</Button>
        </Field>
      </div>
      <h2>基础用法</h2>
      <div>
        <Field v-model="value" autosize  placeholder="请输入用户名"/>
      </div>
      <h2>基础用法</h2>
      <div>
        <Field 
        v-model="value" 
        autosize 
        label="留言"
        type="textarea"
        maxlength="50" 
        placeholder="请输入用留言"
        rows="2"
        show-word-limit
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './../TopBar'
import { Field,Button } from 'vant';


export default {
  components: {
     TopBar,
      Field,
      Button
  },
  data() {
    return {
      value: '',
      sms: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>