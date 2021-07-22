import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";

import Primevue from 'primevue/config'
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(Primevue);


app.component('AutoComplete', AutoComplete);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('Message', Message)

app.use(store);
app.use(router);
app.mount("#app");
