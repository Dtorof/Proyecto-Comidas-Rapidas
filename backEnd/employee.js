var app = new Vue({
    el: '#app',
    data:{
        dbOrdersEmployee:{},
        dbOrderServe: [],
        optionDomiciliary: "",
        dataStorageDomiciliary: [],
        dbOrdersDomiciliary: {},
    },
    created() {   
        this.dbOrdersEmployee = this.getParsedLocalStorage("dbOrderEmployee") 
        this.dbOrdersDomiciliary = this.getParsedLocalStorage("users-domiciliary") 
        console.log(this.dbOrdersEmployee)
        console.log(this.dbOrdersDomiciliary)
        this.dataStorageEmployee = JSON.parse(localStorage.getItem("dbOrderDomiciliary") || null)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        client(){
            let client = {
                ...this.dbOrdersEmployee,
                domiciliary: this.optionDomiciliary
            }
            this.dbOrderServe = [...this.dbOrderServe, client];
            console.log( client)
            console.log( this.dbOrderServe)
        },
        clever(index){
          this.client()
          this.dbOrdersEmployee.splice(index, 1)
          this.updateLocalStorage()
        },
        updateLocalStorage(){
            localStorage.setItem("dbOrderDomiciliary", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
