<template>
  <div class="flex flex-col bg-main-blue p-8 rounded-xl max-w-md mx-auto">
    <h3 class="text-white font-medium">User Name</h3>
    <input
      type="text"
      name="userName"
      class="mb-4 rounded-lg border-8 border-opacity-0"
      maxlength="20"
      v-model="userName"
    />
    <h3 class="text-white font-medium">Password</h3>
    <input
      type="text"
      name="password"
      class="mb-4 rounded-lg border-8 border-opacity-0"
      maxlength="20"
      v-model="password"
    />
    <button class="bg-white text-main-blue rounded-lg p-2 my-2">
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

