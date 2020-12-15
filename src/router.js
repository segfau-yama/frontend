import Vue from "vue";
import Router from "vue-router";

import Sign_in from "./components/pages/sign_in";
import Sign_up from "./components/pages/sign_up";
import Account from "./components/pages/account";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //ログイン画面
    {
      path: "/sign_in",
      component: Sign_in,
      name: 'sign_in'
    },
    //登録画面
    {
      path: "/sign_up",
      component: Sign_up,
      name: 'sign_up'
    },
    //アカウント画面
    {
      path: "/account",
      component: Account,
      name: 'account'
    },
  ]
});
