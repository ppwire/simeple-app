<template>
  <div class="form-card">
    <h2 class="text-white text-2xl mb-4 font-bold">Register</h2>

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
    <h3 class="text-white font-medium">Confirm Password</h3>
    <input
      type="text"
      name="comfirmPassword"
      class="input-text-field"
      maxlength="20"
      v-model="confirmPassword"
    />
    <button class="form-btn">
      <span class="font-bold"> NEXT STEP</span>
    </button>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields([
      "signUp.userName",
      "signUp.password",
      "signUp.confirmPassword",
    ]),
  },
};
</script>