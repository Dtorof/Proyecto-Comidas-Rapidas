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
        // client(){
        //     let client = {
        //         ...this.dbOrdersEmployee,
        //         domiciliary: this.optionDomiciliary
        //     }
        //     // this.dbOrderServe = [...this.dbOrderServe, client];
        //     this.dbOrderServe.push(client);
        //     console.log( client)
        //     console.log( this.dbOrderServe)
        // },
        clever(index){
            if(index) {
                let [serve] =  this.dbOrdersEmployee.splice(index,1)
                console.log(serve.domiciliary = this.optionDomiciliary)
                this.dbOrderServe.push(serve)
                // this.dbOrderServe.push( this.optionDomiciliary)
                console.log(this.dbOrderServe)
            }
              this.updateLocalStorage()
            },
            updateLocalStorage(){
                localStorage.setItem("dbOrderDomiciliary", JSON.stringify(this.dbOrderServe))
            },
    },
})
