<template>
  <div class="form-card">
    <img class="img" :src="profilePic" />
    <h1 class="input-text text-center text-xl">You are {{ name }}</h1>
    <h1 class="input-text text-center text-xl">You gender is {{ gender }}</h1>
  </div>
</template>

<script>
export default {
  props: ["name", "gender", "profilePic"],
};
</script>