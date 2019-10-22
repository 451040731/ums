import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import api from "./fetch/api";

Vue.config.productionTip = false;

import "./assets/sass/base.scss";

//按需引入iview
import "view-design/dist/styles/iview.css";
import {
	Input,
	Button,
	Message,
	Spin,
	Icon
} from "view-design";
Vue.component("Input", Input);
Vue.component("Button", Button);
Vue.component("Message", Message);
Vue.component("Spin", Spin);
Vue.component("Icon", Icon);
Vue.prototype.$Message = Message;
Vue.prototype.$Spin = Spin;
Vue.prototype.$api = api;

//设置路由拦截
router.beforeEach((to, from, next) => {
	//判断要去的路由有没有requiresAuth
	let token = store.state.user.token;
	if (to.meta.requiresAuth && !token) {
		next({
			path: "/login",
			query: {
				redirect: to.fullPath
			}
		});
	} else {
		next();
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");