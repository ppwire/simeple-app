<template>
  <div class="form-card">
    <h3 class="font-bold text-white text-xl">
      Welcome {{ this.$store.state.signIn.name }}
    </h3>
    <button class="form-btn">VIEW CONTENT</button>
    <button class="form-btn" @click="signOut">SIGN OUT</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  setup() {},
  methods: {
    signOut() {
      this.$store.commit("destroyToken");
      router.push({ name: "Home" });
    },
  },
};
</script>