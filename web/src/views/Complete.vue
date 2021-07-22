<template>
  <div class="form-card">
    <h3 class="font-bold text-white text-xl">Sign Up Completed</h3>
    <button class="form-btn" @click="backToMain">BACK TO HOME</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  setup() {
    const backToMain = () => {
      router.push({ name: "Home" });
    };

    return { backToMain };
  },
};
</script>