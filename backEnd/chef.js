var app = new Vue({
    el: '#app',
    data:{
        dbOrdersChef:{},
        dbOrderServe: [],
        dataStorageEmployee: [] 
    },
    created() {   
        this.dbOrdersChef = this.getParsedLocalStorage("dbOrder") 
        console.log(this.dbOrdersChef)
        this.dataStorageEmployee = JSON.parse(localStorage.getItem("dbOrderEmployee") || null)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        cleverOrder(index){
          this.dbOrderServe = [...this.dbOrderServe, this.dbOrdersChef.splice(index,1)];
          this.updateLocalStorage( this.dbOrderServe)
        },
        updateLocalStorage(){
            localStorage.setItem("dbOrderEmployee", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
