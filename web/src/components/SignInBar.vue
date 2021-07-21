<template>
  <div class="form-card">
    <h3 class="text-white font-medium">User Name</h3>
    <input
      type="text"
      name="userName"
      class="input-text-field"
      maxlength="20"
      v-model="userName"
    />
    <h3 class="text-white font-medium">Password</h3>
    <input
      type="text"
      name="password"
      class="input-text-field"
      maxlength="20"
      v-model="password"
    />
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
  computed: {
    ...mapFields(["signIn.userName", "signIn.password"]),
  },
  methods: {
    registerLink() {
      router.push({ name: "Register" });
    },
  },
};
</script>

<style >
</style>

