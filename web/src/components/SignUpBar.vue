<template>
  <div class="flex flex-col bg-main-blue p-8 rounded-xl mx-auto max-w-md">
    <h2 class="text-white text-2xl mb-4 font-bold">Register</h2>

    <h3 class="text-white font-medium">User Name</h3>
    <input type="text" name="userName" class="mb-4 rounded-lg border-8
    border-opacity-0" maxlength="20" v-model='userName' />
    <h3 class="text-white font-medium">Password</h3>
    <input type="text" name="password" class="mb-4 rounded-lg border-8
    border-opacity-0" maxlength="20" v-model='password' />
    <h3 class="text-white font-medium">Confirm Password</h3>
    <input type="text" name="comfirmPassword" class="mb-4 rounded-lg border-8
    border-opacity-0" maxlength="20" v-model='confirmPassword' />
    <button class="bg-white text-main-blue rounded-lg p-2 my-2">
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