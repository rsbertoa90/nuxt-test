import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        tutoSeen:false,
        user: null,
        config: null,
        states: [],
        categories:[],
        meta:[],
        searchTerm:'',
    },
    getters: {
        getSearchTerm(store){
            return store.searchTerm;
        },
        getTutoSeen(store){
            return store.tutoSeen;
        },
        getProductSlug:(store) => (product) =>{
            let category = store.categories.find(c => {
                return c.id == product.category_id;
            });
            if (category && category.slug && product.slug){
                let res = category.slug + '/' + product.slug;
                res = res.replace('//','/');
                return res;
            }
        },
        getOffers(store) {
            let res = [];
            store.categories.forEach(cat => {
                let prods = cat.products.filter(prod => {
                    return !prod.paused && prod.offer;
                });
                if (prods.length > 0) {
                  
                    res = res.concat(prods);
                }
            });
            return res;
        },
        getMeta(store){
            return store.meta;
        },
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
        getNotPaused(store){
            let res = [];
            store.categories.forEach(cat => {
                
                cat.products = cat.products.filter(prod => {
                    return !prod.paused;
                });
                if (cat.products.length > 0){
                    res.push(cat);
                }
            });
            return res;
        },
       
        getTotal(store){
             var tot = 0;
             store.categories.forEach(function (category) {
                 category.products.forEach(function (product) {
                     if (product.units > 0) {
                         if (product.units < product.pck_units) {
                             tot += product.price * product.units;
                         } else {
                             tot += product.pck_price * product.units
                         }
                     }
                 });
             });
             return tot;
        },
        getList(store){
                   var result = [];
                  
                   store.categories.forEach(function (category) {
                       var prods = category.products.filter(function (el) {
                           return (el.units != null & el.units > 0);
                       });
                       if (prods.length > 0) {
                           result.push(prods);

                       }

                   });


                   return [].concat.apply([], result);
        },
        
        
    },
    mutations: {
        setSearchTerm(state,payload){
            state.searchTerm = payload;
        },
        setMeta(state, payload) {
            state.meta = payload;

        },
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
        setTutoSeen(state){
            state.tutoSeen=true;
        }

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
        fetchMeta: ({
            commit
        }, payload) => {

            Vue.http.get('/api/meta')
                .then(response => {
                    commit('setMeta', response.data);
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
            Vue.http.get('/api/categories')
                .then(response => {
                    commit('setCategories', response.data);
                });
        },
    },
   

});
