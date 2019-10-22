<template>
	<div class="login-content">
		<div class="title">删除地址</div>
		<form @keyup.enter.native="delAddressSubmit" autocomplete="off">
			<ul class="login-form">
				<li>
					<label for="address">地址：</label>
					<div class="lab-input">
						{{address}}
					</div>
				</li>
				<li>
					<Button type="info" long @click="delAddressSubmit">删除地址</Button>
				</li>
				<li class="mt10">
					<router-link to="/user/addAddress">增加地址</router-link>
				</li>
			</ul>
		</form>
	</div>
</template>

<script>

export default {
	data() {
		return {
			address: JSON.parse(localStorage.getItem("userinfo")).address || '暂无地址'
		};
	},
	methods: {
		delAddressSubmit() {
			this.$api.doDelAddress(
				this.$qs.stringify({
					address: this.address
				})
			)
				.then(res => {
					if (res.status == 1) {
						let mobile = JSON.parse(localStorage.getItem("userinfo")).mobile;
						let userId = JSON.parse(localStorage.getItem("userinfo")).userId;
						this.$store.commit('USERINFO', JSON.stringify({"mobile":mobile,"userId":userId,'address':''}));
						this.$Message.success({
							background: true,
							content: res.msg,
							onClose: () => {
								this.$router.push({
									path: "/user/index"
								});
							}
						});
					} else {
						this.$Message.error({
							background: true,
							content: res.msg
						});
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
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
		margin-bottom: 30px;
	}
	.login-form {
		li {
			margin-top: 20px;
			.lab-input{
				font-size: 24px;
				color: #19be6b;
			}
			&.mt10 {
				margin-top: 10px;
				text-align: right;
			}
		}
	}
}
</style>