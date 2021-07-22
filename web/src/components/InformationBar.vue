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

    <h3 class="input-text">Country</h3>
    <AutoComplete
      v-model="country"
      :suggestions="countryFilterList"
      @complete="searchCountry($event)"
      @item-select="getStates"
      field="name"
    ></AutoComplete>

    <h3 class="input-text">State</h3>
    <AutoComplete
      v-model="state"
      :suggestions="stateFilterList"
      @complete="searchState($event)"
      @item-select="getCitys"
      field="name"
    >
    </AutoComplete>

    <h3 class="input-text">City</h3>
    <AutoComplete
      v-model="city"
      :suggestions="cityFilterList"
      @complete="searchCity($event)"
    ></AutoComplete>

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
      countryList: [],
      countryFilterList: [],
      stateList: [],
      stateFilterList: [],
      cityList: [],
      cityFilterList: [],
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
    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.countryFilterList = [...this.countryList];
        } else {
          this.countryFilterList = this.countryList.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },

    searchState(event) {
      if (!event.query.trim().length) {
        this.stateFilterList = [...this.stateList];
      } else {
        this.stateFilterList = this.stateList.filter((state) => {
          return state.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    },

    searchCity(event) {
      if (!event.query.trim().length) {
        this.cityFilterList = [...this.cityList];
      } else {
        this.cityFilterList = this.cityList.filter((city) => {
          return city.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    },

    getStates() {
      this.state = "";
      this.city = "";
      api
        .getStates(this.country.name)
        .then((res) => {
          this.stateList = res.data.states;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getCitys() {
      this.city = "";
      api
        .getCitys(this.country.name, this.state.name)
        .then((res) => {
          this.cityList = res.data;
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

      "information.country",
      "information.city",
      "information.state",
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
      .getCountrys()
      .then((res) => {
        this.countryList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>