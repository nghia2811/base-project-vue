
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="changeUsername">Change Username</button>
    <button @click="callApi">Call Api</button>
    <button @click="eventBus">eventBus</button>
    <h2>{{ username }}</h2>
    <h2>{{ $filters.formatMoney(accountBalance) }}</h2>
    <h2>{{ $filters.formatMoney(accountBalance2) }}</h2>
  </div>
</template>

<script>
import ApiRequest from "@/module/api/apiService.js";
import { mapGetters } from "vuex";
import _ from 'lodash';
import mixin from "../../mixins/mixin.js"

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      accountBalance: 100000,
      accountBalance2: 200000

    };
  },
  mixins: [mixin],
  mounted() {
    this.emitter.on("toggle-sidebar", value => {
      this.accountBalance2 = value;
    });
  },
  computed: {
    ...mapGetters(['getUsername']),
    username() {
      return this.$store.getters.getUsername;
    },
  },
  methods: {
    /* eslint-disable no-unused-vars */
    changeUsername() {
      this.$store.dispatch("handleChangeUsername", "new Name");
    },
    callApi(){
      ApiRequest.getData().then(function (res) {
            let response = res.data.data;
            if (response) {
            _.each(response, (val) => {

            });
            }
        })
        .catch(function (error) {});
    }, 
    eventBus(){
      this.emitter.emit("toggle-sidebar", this.accountBalance);
    }
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
