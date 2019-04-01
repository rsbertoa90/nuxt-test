Vue.filter('price', val => {
    if (val % 1 != 0) {
        return val.toFixed(2);
    }
    return val;
});
Vue.filter('ucFirst', val => {
    val = val.toLowerCase();

    return val.charAt(0).toUpperCase() + val.slice(1);
});
Vue.filter('uc', val => {
    return val.toUpperCase();
});
