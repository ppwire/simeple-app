<template>
  <div class="form-card">
    <h3 class="input-text">Address</h3>
    <input class="input-text-field" type="text" />

    <h3 class="input-text">Income</h3>
    <select class="input-text-field" v-model="income">
      <option
        class="rounded-lg"
        v-for="obj in incomeList"
        :key="obj.id"
        :value="obj.id"
      >
        {{ income.incomeName }}
      </option>
    </select>

    <h3 class="input-text">Gender</h3>
    <select class="input-text-field" v-model="gender">
      <option v-for="obj in genderList" :key="obj.id">
        {{ obj.value }}
      </option>
    </select>

    <h3 class="input-text">Sub District</h3>
    <select class="input-text-field"></select>

    <h3 class="input-text">District</h3>
    <select class="input-text-field"></select>

    <h3 class="input-text">Province</h3>
    <select class="input-text-field"></select>

    <h3 class="input-text">Zip Code</h3>
    <select class="input-text-field"></select>

    <div class="flex flex-row justify-between">
      <button class="form-btn">
        <span class="font-bold" @click="back"> BACK </span>
      </button>
      <button class="form-btn" @click="next">
        <span class="font-bold"> NEXT STEP</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      incomeList: [
        {
          id: 0,
          incomeName: "test",
        },
        {
          id: 1,
          incomeName: "test2",
        },
      ],
      genderList: [
        {
          id: 0,
          value: "MALE",
        },
        {
          id: 1,
          value: "FEMALE",
        },
        {
          id: 2,
          value: "OTHER",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    next() {
      this.$emit("next-step");
    },
  },
  computed: {
    ...mapFields(["information.income", "information.gender"]),
  },
};
</script>