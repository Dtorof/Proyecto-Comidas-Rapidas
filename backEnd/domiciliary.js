var app = new Vue({
    el: '#app',
    data:{
        dbOrdersDomic:{}
    },
    created() {   
        this.dbOrdersDomic= this.getParsedLocalStorage("dbOrderDomiciliary") 
        console.log(this.dbOrdersDomic)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        clever(index){
            this.dbOrdersDomic.splice(index, 1)
            this.updateLocalStorage()
          },

    },
})
