<template>
    <div class="login-content">
        <div class="title">注册</div>
        <form @keyup.enter="regSubmit" autocomplete="off">
            <ul class="login-form">
                <li>
                    <label for="mobile">手机号：</label>
                    <div class="lab-input">
                        <Input prefix="ios-contact" v-model="mobile" type="text" id="mobile" placeholder="请输入账号"/>
                    </div>
                </li>
                <li>
                    <label for="password">密码：</label>
                    <div class="lab-input">
                        <Input prefix="ios-lock" password v-model="password" type="password" id="password" placeholder="请输入密码"/>
                    </div>
                </li>
                <li>
                    <label for="confirm_password">确认密码：</label>
                    <div class="lab-input">
                        <Input prefix="ios-lock" v-model="confirm_password" type="password" id="confirm_password" placeholder="请输入确认密码"/>
                    </div>
                </li>
                <li>
                    <Button type="info" long @click="regSubmit">立即注册</Button>
                </li>
                <li class="mt10">
					<router-link to="/login">登录</router-link>
				</li>
            </ul>
        </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            mobile: '',
            password: '',
            confirm_password: ''
        }
    },
    methods: {
        regSubmit(){
            let reg = /^1[3456789]\d{9}$/;
            if(!this.mobile){
                this.$Message.error({
                    background: true,
                    content: '手机号不能为空!'
                })
                return false;
            }
            if (!reg.test(this.mobile)) {
                this.$Message.error({
                    background: true,
                    content: '请输入正确的手机号！'
                })
                return false;
            }
            if(!this.password || !this.confirm_password){
                this.$Message.error({
                    background: true,
                    content: '密码不能为空'
                })
                return false;
            }
            if(this.password != this.confirm_password){
                this.$Message.error({
                    background: true,
                    content: '两次输入密码不一致！'
                })
                return false;
            }
            this.$api.doReg(this.$qs.stringify({
                mobile: this.mobile,
                password: this.password,
                confirm_password: this.confirm_password,
            })).then(res => {
				if (res.status == 1) {
					this.$Message.success({
						background: true,
                        content: res.msg,
                        onClose: ()=>{
                            this.$router.push({
                                path: '/login',
                            })
                        }
					})
				}else{
					this.$Message.error({
						background: true,
						content: res.msg
					})
				}
			})
			.catch(error => {
				console.log(error);
			});
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-content{
        width: 600px;
        margin: 0 auto;
        padding-top: 50px;
        .title{
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
        }
        .login-form{
            li{
				margin-top: 20px;
				&.mt10{
					margin-top: 10px;
					text-align: right;
				}
            }
        }
    }
</style>