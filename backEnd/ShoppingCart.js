var app = new Vue({
    el: '#app',
    data:{
        product:"",
        quantity:0,
        total:0,
        dbProducts:{}
    },
    methods:{
       getParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || null)
       },
       updateQuantity(id){
         
       },
       addCart(){
         let productBuy = dbProducts.find((prod)=> prod.id === itemId)
         return productBuy
       }
    },
    created(){
        this.dbProducts = this.getParsedLocalStorage("all-products") 
    }
})