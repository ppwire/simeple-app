<template>
  <SignUpBar
    v-if="signUpState == 0"
    @back-to-login="signInLink"
    @next-step="nextStep"
  />
  <InformationBar
    v-else-if="signUpState == 1"
    @back="back"
    @next-step="nextStep"
  />
  <ProfileBar @back="back" v-else />
</template>

<script>
import SignUpBar from "@/components/SignUpBar.vue";
import InformationBar from "@/components/InformationBar.vue";
import ProfileBar from "@/components/ProfileBar.vue";
import router from "../router";
export default {
  components: {
    SignUpBar,
    InformationBar,
    ProfileBar,
  },
  data() {
    return {
      signUpState: 0,
    };
  },
  methods: {
    signInLink() {
      router.push({ name: "Home" });
    },
    back() {
      this.signUpState--;
    },

    nextStep() {
      this.signUpState++;
    },
  },
};
</script>
