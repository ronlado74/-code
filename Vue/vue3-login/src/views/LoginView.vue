<template>
  <div class="login">
    <el-form :model="formInline" class="demo-form-inline">
      <el-form-item label="账号">
        <el-input v-model="formInline.user" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formInline.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const Router = useRouter()


const formInline = reactive({
  user: '',
  password: '',
})

const onSubmit = () => {
  localStorage.setItem('token', '1')
  Router.push("/about")
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
