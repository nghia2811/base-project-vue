<template>
  <div class="hello">
    <h1 @click="haha">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="changeUsername">Change Username</button>
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
/* eslint-disable */
import ApiRequest from "@/module/api/apiService.js";
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["getUsername"]),
    username() {
      return this.$store.state.username;
    },
  },
  method: {
    haha(){
      alert('haha')
    },
    changeUsername() {
      console.log("click");
      debugger;
      this.$store.dispatch("handleChangeUsername", "new Name");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
