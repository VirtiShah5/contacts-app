<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/common/menu";
export default {
  name: "App",
  components: {
    Menu,
  },
  mounted() {
    // if (this.$router.history.current.path == "/")
    //   this.$router.push("/contacts");
    this.$store.dispatch("contacts/getAllContacts");
  },
};
</script>

<style></style>
