<template>
<div id="sign_up">
  <h1>アカウント作成</h1>
  <p>アカウント名:<input type="text" name="account"></p>
  <p>プロフィール画像(1:1推奨):</p>
  <p><img v-show="uploadedImage" :src="uploadedImage" id="image1"></p>
  <p><input type="file" v-on:change="onFileChange" accept="image/*"></p>
  <p>国家名:<input type="text" name="country"></p>
  <p>国家の選択:</p>
  <p>パスワード:<input type="password" name="password"></p>
  <p><button type="submit">ログイン</button></p>
  <p><button type="submit">アカウント登録</button></p>
</div>
</template>
<script>

export default {

  data() {
    return {
      uploadedImage: '',
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
},
}
</script>
<style>
#app {
  margin: 0;
  padding: 0;
}

#image1 {
  width: 200px;
  height: 200px;
}
</style>
