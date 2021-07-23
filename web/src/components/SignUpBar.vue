<template>
  <div class="form-card">
    <h1 class="text-white text-2xl mb-4 font-bold">Sign Up</h1>

    <h3 class="input-text">Username</h3>
    <InputText
      type="text"
      v-model="userName"
      maxlength="20"
      placeholder="MAX 20 CHARACTERS"
    />
    <small class="text-red-500" v-if="v$.userName.$error">{{
      v$.userName.$errors[0].$message
    }}</small>
    <h3 class="input-text">Password</h3>
    <InputText
      type="password"
      v-model="password"
      maxlength="10"
      placeholder="MAX 10 CHARACTERS"
    />
    <small class="text-red-500" v-if="v$.password.$error">{{
      v$.password.$errors[0].$message
    }}</small>
    <h3 class="input-text">Confirm Password</h3>
    <InputText
      type="password"
      v-model="confirmPassword"
      maxlength="10"
      placeholder="MAX 10 CHARACTERS"
    />
    <small class="text-red-500" v-if="v$.confirmPassword.$error">{{
      v$.confirmPassword.$errors[0].$message
    }}</small>

    <Message severity="error" v-if="dupNameError" :closable="false"
      >Duplicate username. Username needs to be unique.
    </Message>

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
      dupNameError: false,
    };
  },
  validations() {
    return {
      userName: { required },
      password: {
        required,
        sameAs: sameAs(this.confirmPassword),
      },
      confirmPassword: { required, sameAs: sameAs(this.password) },
    };
  },
  methods: {
    back() {
      this.$emit("back-to-login");
    },
    next() {
      this.$store
        .dispatch("getUserName")
        .then((res) => {
          if (res) {
            this.dupNameError = true;
          } else {
            this.v$.$validate();
            if (!this.v$.$error) {
              this.$emit("next-step");
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
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