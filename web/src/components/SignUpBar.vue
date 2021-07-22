<template>
  <div class="form-card">
    <h1 class="text-white text-2xl mb-4 font-bold">Sign Up</h1>

    <h3 class="input-text">User Name</h3>
    <InputText type="text" v-model="userName" />
    <small class="text-red-500" v-if="v$.userName.$error">{{
      v$.userName.$errors[0].$message
    }}</small>
    <h3 class="input-text">Password</h3>
    <InputText type="text" v-model="password" />
    <small class="text-red-500" v-if="v$.password.$error">{{
      v$.password.$errors[0].$message
    }}</small>
    <h3 class="input-text">Confirm Password</h3>
    <InputText type="text" v-model="confirmPassword" />
    <small class="text-red-500" v-if="v$.confirmPassword.$error">{{
      v$.confirmPassword.$errors[0].$message
    }}</small>
    <div class="flex flex-row justify-between">
      <button class="form-btn" @click="back">BACK</button>
      <button class="form-btn" @click="next">NEXT STEP</button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      userName: { required },
      password: {
        required,
        sameAs: sameAs(this.confirmPassword),
        minLength: 8,
      },
      confirmPassword: { required, sameAs: sameAs(this.password) },
    };
  },
  methods: {
    back() {
      this.$emit("back-to-login");
    },
    next() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("next-step");
      }
    },
  },
  computed: {
    ...mapFields([
      "signUp.userName",
      "signUp.password",
      "signUp.confirmPassword",
    ]),
  },
};
</script>