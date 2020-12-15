<template>
<div id="app">
  <ul class="links">
    <li>
      <router-link to="/sign_in" exact>ログイン</router-link>
    </li>
    <li>
      <router-link to="/sign_up">アカウントの作成</router-link>
    </li>
    <li>
      <router-link to="/account">マップ</router-link>
    </li>
  </ul>

  <div class="page">
    <transition name="router">
      <router-view />
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
