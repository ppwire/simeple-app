<template>
  <div class="flex flex-wrap justify-center content-center" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

body,
html {
  height: 100%;
  width: 100%;
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  min-height: 100vh;
}

.input-text {
  @apply text-white font-medium;
}

.input-text-field {
  @apply mb-4 rounded-lg border-8 border-opacity-0;
}

.form-card {
  @apply flex flex-col bg-main-blue p-8 rounded-xl;
}

.from-flex {
  @apply flex bg-main-blue p-8 rounded-xl;
}

.img {
  @apply object-contain max-h-60 max-w-xl mb-4;
}

.form-btn {
  @apply bg-white text-main-blue rounded-lg p-2 my-2 mt-5 font-bold;
}
</style>
