var app = new Vue({
    el: '#app',
    data:{
        dbOrders:{}
    },
    created() {   
        this.dbOrders = this.getParsedLocalStorage("dbOrder") 
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
          }
    },
})
