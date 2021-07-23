<template>
  <div class="form-card">
    <h3 class="input-text">Address</h3>
    <InputText v-model="address"></InputText>
    <small class="text-red-500" v-if="v$.address.$error">{{
      v$.address.$errors[0].$message
    }}</small>
    <h3 class="input-text">Income</h3>
    <Dropdown
      v-model="income"
      :options="incomeList"
      optionLabel="incomeName"
      placeholder="Select an Income"
    />
    <small class="text-red-500" v-if="v$.income.$error">{{
      v$.income.$errors[0].$message
    }}</small>
    <h3 class="input-text">Gender</h3>
    <Dropdown
      v-model="gender"
      :options="genderList"
      optionLabel="value"
      placeholder="Select a Gender"
    ></Dropdown>
    <small class="text-red-500" v-if="v$.gender.$error">{{
      v$.gender.$errors[0].$message
    }}</small>

    <h3 class="input-text">Province</h3>
    <Dropdown
      v-model="province"
      :options="provinceList"
      optionLabel="nameEn"
      placeholder="Select a Province"
      :filter="true"
      @change="getDistricts"
    >
    </Dropdown>
    <small class="text-red-500" v-if="v$.province.$error">{{
      v$.province.$errors[0].$message
    }}</small>
    <h3 class="input-text">District</h3>
    <Dropdown
      v-model="district"
      :options="districtList"
      optionLabel="nameEn"
      placeholder="Select a District"
      :filter="true"
      @change="getSubDistricts"
    >
    </Dropdown>
    <small class="text-red-500" v-if="v$.district.$error">{{
      v$.district.$errors[0].$message
    }}</small>

    <h3 class="input-text">SubDistrict</h3>
    <Dropdown
      v-model="subDistrict"
      :options="subDistrictList"
      optionLabel="nameEn"
      placeholder="Select a Sub District"
      :filter="true"
      @change="getZipCode"
    >
    </Dropdown>
    <small class="text-red-500" v-if="v$.subDistrict.$error">{{
      v$.subDistrict.$errors[0].$message
    }}</small>

    <h3 class="input-text">Zip Code</h3>
    <InputText v-model="zipCode"> </InputText>
    <small class="text-red-500" v-if="v$.zipCode.$error">{{
      v$.zipCode.$errors[0].$message
    }}</small>
    <div class="flex flex-row justify-between">
      <button class="form-btn" @click="back">BACK</button>
      <button class="form-btn" @click="next">NEXT STEP</button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import api from "../api/data";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      incomeList: [],
      provinceList: [],
      districtList: [],
      subDistrictList: [],
      genderList: [
        {
          id: 0,
          value: "Male",
        },
        {
          id: 1,
          value: "Female",
        },
        {
          id: 2,
          value: "Other",
        },
      ],
    };
  },

  validations() {
    return {
      income: { required },
      gender: { required },
      address: { required },
      province: { required },
      district: { required },
      subDistrict: { required },
      zipCode: { required },
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    next() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("next-step");
      }
    },

    getZipCode() {
      this.zipCode = this.subDistrict.zipCode;
    },

    getDistricts() {
      this.district = "";
      this.subDistrict = "";
      this.zipCode = "";
      api
        .getDistricts(this.province.id)
        .then((res) => {
          this.districtList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSubDistricts() {
      this.subDistrict = "";
      this.zipCode = "";
      api
        .getSubDistricts(this.district.id)
        .then((res) => {
          this.subDistrictList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    api
      .getIncomes()
      .then((res) => {
        this.incomeList = res;
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getProvinces()
      .then((res) => {
        this.provinceList = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>