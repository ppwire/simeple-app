<template>
  <div class="form-card">
    <h3 class="input-text mb-2">Profile Image</h3>
    <small class="text-red-500" v-if="v$.profilePic.$error"
      >Please upload profile picture.</small
    >

    <label
      class="text-main-blue font-bold font-xl p-10 bg-white rounded-lg mb-4 text-center"
    >
      Upload your Image
      <input
        type="file"
        class="input-text-field"
        ref="file"
        @change="handleFileUpload"
        accept="image/*"
      />
    </label>

    <img :src="profilePic" class="img" />
    <div class="flex flex-row justify-between">
      <button class="form-btn" @click="back">BACK</button>
      <button class="form-btn" @click="submit">SUBMIT</button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
    };
  },

  validations() {
    return {
      profilePic: { required },
    };
  },

  methods: {
    back() {
      this.$emit("back");
    },
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("next-step");
      }
    },
    handleFileUpload(event) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.profilePic = fileReader.result;
      });
      fileReader.readAsDataURL(event.target.files[0]);
    },
  },
  computed: {
    ...mapFields(["information.profilePic"]),
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
</style>