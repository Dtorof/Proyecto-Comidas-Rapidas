var app = new Vue({
    el: '#app',
    data:{
        dbOrdersChef:{},
        dbOrderServe: [],
        dataStorageEmployee: "",
        // dbChef: []
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
        
        clever(index){
        if(index) {
            let [serve] = this.dbOrdersChef.splice(index,1)
            this.dbOrderServe.push(serve)
            console.log(this.dbOrderServe)
        }
          this.updateLocalStorage()
        },
        updateLocalStorage(){
            localStorage.setItem("dbChef", JSON.stringify( this.dbOrdersChef))
            localStorage.setItem("dbOrderEmployee", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
