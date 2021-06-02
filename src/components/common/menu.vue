<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="1"><a href="/contacts">Contacts</a></el-menu-item>
    <el-menu-item index="2"><a href="/favorites">Favourites</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  mounted() {
    this.getCurrentIndex();
  },
  methods: {
    getCurrentIndex() {
      const route = this.$router.history.current.path;
      if (route == "/" || route == "/contacts") this.activeIndex = "1";
      else if (route == "/favorites") this.activeIndex = "2";
    },
  },
};
</script>

<style></style>
