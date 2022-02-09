<template>
  <div>
    <Header></Header>
    <div class="congrates-block">
      <div class="congrates-dialoug">
        <div class="col text-right" v-if="showprogressbar">
          <b-progress class="mt-3" :value="progressvalue" variant="primary"></b-progress>
          <span class="progress-count">{{ progressvalue + "%" }}</span>
        </div>
        <div class="congrates-image mb-4">
          <img
            src="https://static-graphics.eroam.com/eRoam/onboarding/congraculation-img.png"
            class="img-fluid"
            alt=""
            srcset=""
          />
        </div>
        <div class="congrates-content text-center">
          <h1>Congratulations!</h1>
          <p>
            Your eRoam SHOP is being configured - this could take up to 10
            minutes
          </p>
          <b-button
            variant="primary"
            block
            @click="redirectTo"
            :disabled="tempDisable"
            >Go To Dashboard</b-button
          >

          <b-link>Help me via eLearning</b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/Module/Global/components/header/Header.vue";
import Ls from "@/Module/Global/Services/ls.js";
import Authanticated from "@/Module/Global/Services/auth.js";

@Component({
  components: {
    Header,
  },
})
export default class congratulation extends Vue {
  tempDisable: any = true;
  timelimit: any = 300;
  countdown: any = null;
  seconds: any = 0;
  progressvalue: any = 0;
  showprogressbar: boolean = true;
  mounted() {
    this.showprogressbar = true;
    this.countdown = setInterval(() => {
      this.timeCounter();
    }, 1000);
  }
  redirectTo() {
    let token_id = Ls.get("auth.token_id");
    let URL = this.$store.state.step2.domainName;

    Authanticated.logout(token_id)
      .then(() => {
        this.$store.dispatch("setLoginInfomationValue", {});
        this.$store.dispatch("setStep1Value", {});
        this.$store.dispatch("setStep2Value", {});
        this.$store.dispatch("setStep3Value", {});
        Authanticated.clearLocalStorage();
        window.location.href = `http://${URL}`;
      })
      .catch(function () {});
  }
  timeCounter() {
    if (this.seconds >= this.timelimit) {
      this.tempDisable = false;
      this.stopTimer();
      this.resetTimer();
      this.showprogressbar = false;
    } else {
      this.seconds++;
      this.progressvalue = Math.round((100 * this.seconds) / this.timelimit);
    }
  }
  stopTimer() {
    clearInterval(this.countdown);
    this.countdown = null;
  }
  resetTimer() {
    this.seconds = 0;
    this.progressvalue = 0;
  }
}
</script>