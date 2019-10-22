<template>
    <div class="content">
        <div class="title">欢迎来到USM系统</div>
        <Button type="info" long @click="toLogin">去登陆</Button>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'view-design';
Vue.component('Button', Button);

export default {
    data () {
        return {
            
        }
    },
    methods: {
        toLogin(){
            this.$router.push({
                path: '/login',
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        width: 500px;
        margin: 0 auto;
        padding-top: 50px;
        .title{
            text-align: center;
            font-size: 20px;
            margin-bottom: 20px
        }
        a{
            color: #fff;
        }
    }
</style>