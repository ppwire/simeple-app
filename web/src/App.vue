<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.input-text-field {
  @apply mb-4 rounded-lg border-8 border-opacity-0;
}

.form-card {
  @apply flex flex-col bg-main-blue p-8 rounded-xl mx-auto max-w-md;
}

.form-btn {
  @apply bg-white text-main-blue rounded-lg p-2 my-2;
}
</style>
