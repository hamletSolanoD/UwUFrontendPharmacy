import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            token: ""
        }
    },
    mutations: {
        setToken(state, value) {
            state.token = value
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
