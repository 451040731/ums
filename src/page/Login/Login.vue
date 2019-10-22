<template>
    <div class="login-content">
        <div class="title">欢迎登录ums</div>
        <form @keyup.enter="LoginSubmit" autocomplete="off">
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
                    <Button type="info" long @click="LoginSubmit">立即登录</Button>
                </li>
				<li class="mt10">
					<router-link to="/register">注册</router-link>
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
            password: ''
        }
    },
    methods: {
        LoginSubmit(){
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
			if(!this.password){
                this.$Message.error({
                    background: true,
                    content: '密码不能为空'
                })
                return false;
            }
            this.$api.doLogin(this.$qs.stringify({
                mobile: this.mobile,
                password: this.password,
            })).then(res => {
				if (res.status == 1) {
					const token = res.data.token;
					const mobile = res.data.info.mobile;
                    const userId = res.data.info.user_id;
                    const address = res.data.info.address;
					this.$store.commit('LOGIN', token);
					this.$store.commit('USERINFO', JSON.stringify({"mobile":mobile,"userId":userId,'address':address}));
					
					this.$Message.success({
						background: true,
                        content: res.msg,
                        onClose: ()=>{
                            this.$router.push({
                                path: '/user/index',
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