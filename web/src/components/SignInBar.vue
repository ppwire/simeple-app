<template>
  <div class="form-card">
    <h1 class="text-2xl mb-2 text-center text-white font-main font-bold">
      Simple App
    </h1>
    <h3 class="input-text">User Name</h3>
    <InputText type="text" v-model="userName" />
    <h3 class="input-text">Password</h3>
    <InputText type="password" v-model="password" />
    <Message severity="error" v-if="loginError"
      >Incorrect username or password. Please Try again.
    </Message>
    <button class="form-btn" @click="signIn">SIGN IN</button>
    <p class="text-white cursor-pointer" @click="registerLink(`/register`)">
      Not a member?
    </p>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import router from "../router";
export default {
  data() {
    return {
      loginError: false,
    };
  },
  methods: {
    registerLink() {
      router.push({ name: "Register" });
    },
    signIn() {
      this.$store
        .dispatch("userSignIn")
        .then((res) => {
          this.$store.commit("setToken", res.accessToken);
          router.push({ name: "Content" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapFields(["signIn.userName", "signIn.password"]),
  },
};
</script>

<style >
</style>

