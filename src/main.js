import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { counterMixin } from '@/mixin/counterMixin.js';

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(vuetify)

app.mixin(counterMixin)

app.mount('#app')

app.directive("focus", { 
    mounted(el) {
        el.focus();
      }
})

