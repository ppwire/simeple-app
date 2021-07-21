<template>
  <SignUpBar v-if="signUpState == 0" @next-step="nextStep" />
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
    back() {
      this.signUpState--;
    },

    nextStep() {
      this.signUpState++;
    },
  },
};
</script>
