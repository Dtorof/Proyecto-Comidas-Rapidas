new Vue({   
    el: '#app',
    data: {
    products: [],
    quantity:0,
    order:[],
    additionals:0,
    totalPayment: '',
    cartData: [],
    PRODUCTS_KEY: 'all-products',
    },
    created(){
        this.setDataProducts()
        this.products = this.getterParsedLocalStorage(this.PRODUCTS_KEY)
        this.addQuantityToProducts();
    },
    methods: {
      setterLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
      },
     
      addQuantityToProducts(){
        if (this.products?.burgers){
          this.products.burgers = this.products.burgers.map(prod =>({...prod, qty: 1}))
        }
        if (this.products?.hot_dogs){
          this.products.hot_dogs = this.products.hot_dogs.map(prod => ({...prod, qty: 1}))
        }
      },
      addCartBurgers(itemId) {
        const productBuy = this.products.burgers.find((prod)=> prod.id === itemId)
        productBuy.quantity = productBuy.qty;
        productBuy.subTotal = this.thousandSeparator((productBuy.qty * productBuy.price) + this.additionals);
        productBuy.subTotalNumber =  (productBuy.qty * productBuy.price) + this.additionals;
        this.addProduct(productBuy)
      },
      addCartHotDog(itemId) {
        const productBuy = this.products.hot_dogs.find((prod)=> prod.id === itemId)
        productBuy.quantity = productBuy.qty;
        productBuy.subTotal =  this.thousandSeparator((productBuy.qty * productBuy.price) + this.additionals);
        productBuy.subTotalNumber =  (productBuy.qty * productBuy.price) + this.additionals;
        this.addProduct(productBuy)
      },
      addProduct(productBuy){
        this.cartData.push(productBuy);
        console.log(this.cartData)
      },
      thousandSeparator(number = 0, decimalsQuantity = 2) {
        return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },  
      updateQtyHotDogs(action, id){
        const product = this.products.hot_dogs.find(product => product.id === id)
        if(product){
          const qty = product.qty;
          product.qty = action === "add" ? qty + 1 : qty - 1;
        }
      },
      updateQtyBurgers(action, id){
        const product = this.products.burgers.find(product => product.id === id)
        if(product){
          const qty = product.qty;
          product.qty = action === "add" ? qty + 1 : qty - 1;
        }
      },
      totalToPay() {        
          let payData = this.cartData.map((prod)=> {return prod.subTotalNumber})
          let pay = payData.reduce((value, num) => value + num,0)
          this.totalPayment  = this.thousandSeparator(pay, 0);
      },
      getterParsedLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key) || "[]");
      },
      setDataProducts(){
        function v4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16)
          })
        }
        
        let products = {
          burgers: [
          {
            "id": v4(),
            "name": "Básica",
            "price": 15000,
            "description": "Hamburguesa con carne de 50gr y queso derretido.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Sencilla_c4zql2.jpg",
            "additional": []
          },
          {
            "id": v4(),
            "name": "Bacon",
            "price": 25000,
            "description": "Hamburguesa con dos carnes de res de 50gr,  125 gr de tocineta, queso cheddar, cebolla, salsa de tomate y mostaza.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Bacon_h8vzrt.jpg",
            "additional": []
          },{
            "id": v4(),
            "name": "Magna",
            "price": 60000,
            "description": "Prueba la deliciosa Magna. Cinco carnes de res de 50gr con salsa especial de la casa y queso derretido.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Magna_hoka4e.jpg",
            "additional": []
          },{
            "id": v4(),
            "name": "Triple Carne",
            "price": 35000,
            "description": "Hamburguesa con tres carne de 50gr, dos queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Medium_numhp4.jpg",
            "additional": []
          }],
          
          hot_dogs:[{
            "id": v4(),
            "name": "Básico",
            "price": 9000,
            "description": "Hot dog básico con mostaza y pan recién horneado.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118573/carrito-market-mix/Hot-sencillo_pzc1oe.jpg",
            "additional": []
          },{
            "id": v4(),
            "name": "Texano",
            "price": 20000,
            "description": "Hot dog con salchicha texana, lechuga, tomate, cebolla, chips de patata y un toque de queso.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117307/carrito-market-mix/Texano_uccuwd.jpg",
            "additional": []
          },{
            "id": v4(),
            "name": "Viena",
            "price": 15000,
            "description": "Hot dog con salchicha tipo viena,lechuga, tomate, cebolla y un toque de queso.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117299/carrito-market-mix/Viena_i7rbd7.jpg",
            "additional": []
          },{
            "id": v4(),
            "name": "Quesudo",
            "price": 17000,
            "description": "Hot dog con salchicha especial de la casa,lechuga, tomate, cebolla y abundante queso derretido.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117323/carrito-market-mix/Cheeser_uwf5us.jpg",
            "additional": []
          }]
        }

        this.setterLocalStorage(this.PRODUCTS_KEY,products)
      },
    },
    
   
})
