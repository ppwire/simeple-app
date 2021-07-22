<template>
  <div class="form-card">
    <h3 class="input-text">Profile Image</h3>
    <small class="text-red-500" v-if="v$.profilePic.$error"
      >Please upload profile picture.</small
    >
    <input
      type="file"
      class="input-text-field"
      ref="file"
      @change="handleFileUpload"
      accept="image/*"
    />

    <img :src="profilePic" class="object-contain max-h-60 max-w-xl mb-4" />
    <div class="flex flex-row justify-between">
      <button class="form-btn">
        <span class="font-bold" @click="back"> BACK </span>
      </button>
      <button class="form-btn">
        <span class="font-bold" @click="submit"> SUBMIT</span>
      </button>
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