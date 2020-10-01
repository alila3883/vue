<template>
  <div class="header">
    <div class="container">
      <div class="logo">Ali Vue</div>
      <ul class="text-right">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/help">Help</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
    a {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
