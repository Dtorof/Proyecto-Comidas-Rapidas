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
        this.dbOrdersDomiciliary = this.getParsedLocalStorage("registered-users")
        this.filterDomi()
        this.dbOrdersDomiciliary = this.filterDomi()
        console.log(this.dbOrdersEmployee)
        console.log(this.dbOrdersDomiciliary)
        this.dataStorageEmployee = JSON.parse(localStorage.getItem("dbOrderDomiciliary") || null)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        filterDomi(){
            let domic = this.dbOrdersDomiciliary.filter((domic)=> domic.rol === "domiciliario")
            return domic
        },
        clever(index){
            if(index>=0) {
                let [serve] =  this.dbOrdersEmployee.splice(index,1)
                this.dbOrderServe.push(serve)
                console.log(this.dbOrderServe)
                console.log(serve)
            }
              this.updateLocalStorage()
            },
           
            updateLocalStorage(){
                localStorage.setItem("dbOrderEmployee", JSON.stringify(this.dbOrdersEmployee))
                localStorage.setItem("listDomiciliary", JSON.stringify(this.dbOrdersDomiciliary))
                localStorage.setItem("dbOrderDomiciliary", JSON.stringify(this.dbOrderServe))
            },
    },
})
