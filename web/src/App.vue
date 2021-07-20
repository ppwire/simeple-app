<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
import 'primeflex/primeflex.css';

export default {
  components:{
    Header
  },
  setup() {
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
