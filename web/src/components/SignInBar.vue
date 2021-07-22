<template>
  <div class="form-card">
    <h3 class="input-text">User Name</h3>
    <InputText type="text" v-model="userName" />
    <h3 class="input-text">Password</h3>
    <InputText type="password" v-model="password" />
    <button class="form-btn">
      <span class="font-bold"> SIGN IN </span>
    </button>
    <p class="text-white cursor-pointer" @click="registerLink(`/register`)">
      Not a member?
    </p>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import router from "../router";
export default {
  methods: {
    registerLink() {
      router.push({ name: "Register" });
    },
  },
  computed: {
    ...mapFields(["signIn.userName", "signIn.password"]),
  },
};
</script>

<style >
</style>

