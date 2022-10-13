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
        updateLocalStorage(){
            return localStorage.setItem("dbOrdersDom", JSON.stringify(this.dbOrdersDomic))
        },
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        clever(index){
            if(index) {
                this.dbOrdersDom.splice(index, 1)
            }
            this.updateLocalStorage()
          },

    },
})
