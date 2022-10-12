var app = new Vue({
    el: '#app',
    data:{
        dbOrdersEmployee:{},
        dbOrderServe: [],
        optionDomiciliary: "",
        dataStorageDomiciliary: [],
        dbOrdersDomiciliary: {}    
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
        clever(index){
          this.dbOrderServe = [...this.dbOrderServe, this. dbOrdersEmployee.splice(index,1)];
          this.updateLocalStorage( this.dbOrderServe)
        },
        updateLocalStorage(){
            localStorage.setItem("dbOrderDomiciliary", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
