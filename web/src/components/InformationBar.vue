<template>
  <div class="form-card">
    <h3 class="input-text">Address</h3>
    <InputText v-model="address"></InputText>

    <h3 class="input-text">Income</h3>
    <Dropdown
      v-model="income"
      :options="incomeList"
      optionLabel="incomeName"
      placeholder="Select an Income"
    />
    <h3 class="input-text">Gender</h3>
    <Dropdown
      v-model="gender"
      :options="genderList"
      optionLabel="value"
      placeholder="Select a Gender"
    ></Dropdown>

    <h3 class="input-text">Province</h3>
    <InputText v-model="province" type="text"></InputText>

    <h3 class="input-text">District</h3>
    <InputText v-model="district" type="text"></InputText>

    <h3 class="input-text">Sub District</h3>
    <InputText v-model="subDistrict" type="text"></InputText>

    <h3 class="input-text">Zip Code</h3>
    <InputText v-model="zipCode" type="text"></InputText>

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
import api from "../api/data";
export default {
  data() {
    return {
      incomeList: [],
      subDistrictList: [],
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
    onChange() {},
  },
  computed: {
    ...mapFields([
      "information.income",
      "information.gender",
      "information.address",

      "information.province",
      "information.district",
      "information.subDistrict",
      "information.zipCode",
    ]),
  },
  beforeMount() {
    api.getIncome().then((res) => {
      this.incomeList = res;
    });
  },
};
</script>