var app = new Vue({
    el: '#app',
    data:{
        dbOrdersEmployee:{},
        dbOrderServe: [],
        dataStorageDomiciliary: [] 
    },
    created() {   
        this.dbOrdersEmployee = this.getParsedLocalStorage("dbOrderEmployee") 
        console.log(this.dbOrdersEmployee)
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
