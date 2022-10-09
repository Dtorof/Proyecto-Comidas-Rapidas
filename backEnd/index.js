new Vue({   
    el: '#app',
    data: {
    quantity:0,
    total:0,
    cartData: [],
    productBuy:{},
    password: "",
    username: "",
    loguedUser:[],
    registeredUsers:[{username:"admin",password:"admin", rol: "administrator"}],
    REGISTERED_USERS_KEY: 'registered-users',
    CURRENT_LOGUED_USER_KEY: 'current-user',
    },
    created(){
        this.products = this.getterLocalStorage(this.PRODUCTS_KEY)
        this.setterLocalStorage(this.REGISTERED_USERS_KEY, this.registeredUsers)
    },
    methods: {
      setterLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
      },
      getterLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key) || "[]");
      },
      addCart(itemId) {
        this.productBuy = this.products.burgers.find((prod)=> {
          if(prod.id === itemId) {
            console.log(prod.id === itemId)
            console.log(prod)
            return prod
          }
        })
        this.addProduct(this.productBuy)
        return this.productBuy
      },
      addProduct(){
        this.cartData.push(this.productBuy);
        return this.cartData;
      },
    },
})
