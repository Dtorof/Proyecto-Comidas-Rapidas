var app = new Vue({
    el: '#app',
    data:{
        dbOrdersDomic:{},
        dbloginUser: "",
        userDomic: "",
        userDomicLoginOut: "",
        dbArray: []
    },
    created() {   
        this.dbOrdersDomic= this.getParsedLocalStorage("dbOrderDomiciliary") 
        this.dbloginUser = this.getParsedLocalStorage("current-user") 
        this.userDomicLoginOut =  this.filterLoginOut()
        this.userDomic = this.filterLogin()
        console.log(this.userDomicLoginOut)
        console.log(this.userDomic)
    },
    methods: {
        getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null);
        },
        filterLogin() {
            let [otro] =  this.dbloginUser
            let userLogin =  this.dbOrdersDomic.filter((domic) => domic.domiciliary === otro.name)
            return userLogin
        },
        filterLoginOut() {
            let [otro] =  this.dbloginUser
            let userLogin =  this.dbOrdersDomic.filter((domic) => domic.domiciliary !== otro.name)
            return userLogin
        },
        clever(index){
            if(index) {
                this.userDomic.splice(index, 1)
                console.log(this.userDomic)
            }
            this.dbArray =  this.userDomic.concat(this.userDomicLoginOut)  
            console.log(this.dbArray)
            this.updateLocalStorage()
          },
          updateLocalStorage(){
            localStorage.setItem("dbOrderDomiciliary", JSON.stringify(this.dbArray ))
        },

    },
})
