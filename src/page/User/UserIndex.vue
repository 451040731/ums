<template>
  <div class="login-content">
    <div class="title"><span>{{mobile}},</span>欢迎登录ums系统</div>
    <div class="btn clearfix">
      <router-link to="/user/addAddress"><Button type="success" class="fl">添加地址</Button></router-link>
      <router-link to="/user/delAddress"><Button type="error" class="fr">删除地址</Button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: JSON.parse(localStorage.getItem("userinfo")).mobile
    };
  }
};
</script>

<style lang="scss" scoped>
.login-content {
  width: 600px;
  margin: 0 auto;
  padding-top: 50px;
  .title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    span {
      color: #19be6b;
    }
  }
}
</style>