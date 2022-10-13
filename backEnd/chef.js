var app = new Vue({
    el: '#app',
    data:{
        dbOrdersChef:{},
        dbOrderServe: [],
        dataStorageEmployee: ""
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
          this.dbOrdersChef.splice(index,1)
          this.dbOrderServe = [...this.dbOrderServe, ...this.dbOrdersChef];
          this.updateLocalStorage()
        },
        updateLocalStorage(){
            localStorage.setItem("dbOrderEmployee", JSON.stringify(this.dbOrderServe))
        },
        
    },
})
