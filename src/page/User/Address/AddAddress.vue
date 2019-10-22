<template>
	<div class="login-content">
		<div class="title">增加地址</div>
		<form @keyup.enter="addAddressSubmit" autocomplete="off">
			<ul class="login-form">
				<li>
					<label for="address">地址：</label>
					<div class="lab-input">
						<Input v-model="address" type="text" id="address" placeholder="请添加地址" />
					</div>
				</li>
				<li>
					<Button type="info" long @click="addAddressSubmit">增加地址</Button>
				</li>
				<li class="mt10">
					<router-link to="/user/delAddress">删除地址</router-link>
				</li>
			</ul>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			address: ""
		};
	},
	methods: {
		addAddressSubmit() {
			if (!this.address) {
				this.$Message.error({
					background: true,
					content: "地址不能为空！"
				});
				return false;
			}
			this.$api
				.doAddAddress(
					this.$qs.stringify({
						address: this.address
					})
				)
				.then(res => {
					if (res.status == 1) {
						let mobile = JSON.parse(localStorage.getItem("userinfo")).mobile;
						let userId = JSON.parse(localStorage.getItem("userinfo")).userId;
						this.$store.commit('USERINFO', JSON.stringify({"mobile":mobile,"userId":userId,'address':this.address}));
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
			&.mt10 {
				margin-top: 10px;
				text-align: right;
			}
		}
	}
}
</style>