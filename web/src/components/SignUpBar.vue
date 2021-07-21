<template>
  <div class="form-card">
    <h2 class="text-white text-2xl mb-4 font-bold">Register</h2>

    <h3 class="input-text">User Name</h3>
    <input
      type="text"
      name="userName"
      class="input-text-field"
      maxlength="20"
      v-model="userName"
    />
    <h3 class="input-text">Password</h3>
    <input
      type="text"
      name="password"
      class="input-text-field"
      maxlength="20"
      v-model="password"
    />
    <h3 class="input-text">Confirm Password</h3>
    <input
      type="text"
      name="comfirmPassword"
      class="input-text-field"
      maxlength="20"
      v-model="confirmPassword"
    />
    <button class="form-btn" @click="next">
      <span class="font-bold"> NEXT STEP</span>
    </button>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  methods: {
    next() {
      this.$emit("next-step");
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