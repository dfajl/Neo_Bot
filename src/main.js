import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
//import './scss/variables.scss';

// Vuetify
//import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

const vuetify = createVuetify({
	components,
	directives,
});

createApp(App).use(vuetify).use(store).use(router).mount('#app');
