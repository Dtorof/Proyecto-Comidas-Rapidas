var app = new Vue({
    el: '#app',
    data:{
        dbOrdersChef:{},
        dbOrderServe: [],
        dataStorageEmployee: "",
        dataChef: {}
    },
    created() {   
        this.dbOrdersChef = JSON.parse(localStorage.getItem("dbOrderChef"));
        console.log(this.dbOrdersChef)
        this.dataStorageEmployee = JSON.parse(localStorage.getItem("dbOrderEmployee") || null)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        
        clever(index){
        if(index>=0) {
            let [serve] = this.dbOrdersChef.splice(index,1)
            serve.domiciliary = ""
            this.dbOrderServe.push(serve)
            console.log(this.dbOrderServe)
            console.log(this.dbOrdersChef)
        }
          this.updateLocalStorage()
        },
        updateLocalStorage(){ 
            localStorage.setItem("dbOrderChef", JSON.stringify(this.dbOrdersChef))
            localStorage.setItem("dbOrderEmployee", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
