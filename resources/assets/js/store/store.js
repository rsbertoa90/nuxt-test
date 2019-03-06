import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        user: null,
        config: null,
        states: [],
        categories:[]
    },
    getters: {
        getUser(store) {
            return store.user;
        },
        getCategories(store) {
            return store.categories;
        },
        getConfig(store) {
            return store.config;
        },
        getStates(store) {
            return store.states;
        },
        
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;

        },
        setConfig(state, payload) {
            state.config = payload;
        },
        setStates(state, payload) {
            state.states = payload
        },
        setCategories(state, payload) {
            state.categories = payload
        },

    },
    actions: {
        fetchUser: ({
            commit
        }, payload) => {

            Vue.http.get('/getuser')
                .then(response => {
                    commit('setUser', response.data);

                });
        },
        fetchConfig: ({
            commit
        }, payload) => {

            Vue.http.get('/config')
                .then(response => {
                    commit('setConfig', response.data);
                });
        },
        fetchStates: ({
            commit
        }, payload) => {
            Vue.http.get('/api/states')
                .then(response => {
                    commit('setStates', response.data);
                });
        },
        fetchCategories: ({
            commit
        }, payload) => {
            Vue.http.get('/api/productsnotpaused')
                .then(response => {
                    commit('setCategories', response.data);
                });
        },
    },
   

});
