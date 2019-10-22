import http from "./request";

//接口类
export default {
	// 用户登录
	doLogin(params) {
		return http.post("/user/login", params);
	},
	// 用户注册
	doReg(params) {
		return http.post("/user/doreg", params);
	},
	// 用户退出
	doLogout(params) {
		return http.post("/logout", params);
	},
	// 添加地址
	doAddAddress(params) {
		return http.post("/user/addAddress", params);
	},
	// 删除地址
	doDelAddress(params) {
		return http.post("/user/delAddressAction ", params);
	}
};
