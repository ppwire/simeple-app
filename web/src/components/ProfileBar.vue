<template>
  <div class="form-card">
    <h3 class="input-text">Profile Image</h3>
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
        <span class="font-bold"> SUBMIT</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  methods: {
    back() {
      this.$emit("back");
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