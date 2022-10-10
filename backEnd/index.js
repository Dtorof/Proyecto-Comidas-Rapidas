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
  registeredUsers:[{name: "Oscar",username:"admin",password:"admin", rol: "administrator"}],
  allAdditionals: [],
  productsParsed: [],
  allProducts: [],
  PRODUCTS_KEY: 'all-products',
  REGISTERED_USERS_KEY: 'registered-users',
  CURRENT_LOGUED_USER_KEY: 'current-user',
  ADDITIONALS_KEY: 'all-additionals',
  additionalOption:"",
  },
  created(){
      this.setDataProducts()
      this.productsParsed = this.getterLocalStorage(this.PRODUCTS_KEY)
      this.createNewProduct()
      this.setterLocalStorage(this.REGISTERED_USERS_KEY, this.registeredUsers)
  },
  methods: {
    setterLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getterLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key) || "[]");
    },
    message(icon,title, timer, position, text, button) {
      swal({
        position,
        text,
        icon,
        title,
        dangerMode: false,
        timer,
        button,
    })
    },
    validateRolUser(user){
      if(user.rol === 'administrator') {
        return 'administrator'
      } else if(user.rol === 'chef'){
        return 'chef'
      }else if(user.rol === 'employee'){
        return 'employee'
      }else return 'domiciliary'
    },
    messageSuccessLogin(){
      this.message(
          "success", 
          "¡Enhorabuena!",
          2400,
          "center",
          "¡Login exitoso!",
          false)
      
    setTimeout(() => window.location.href = `./..frontend/..views${this.validateRolUser(this.username)}.html`, 2400)
  }, 
  validateCredentials(user, key) {
    this.login();
  
    let loguedUser = [];
    let res = this.userCredentials.filter(
      (usr) => usr.username === user && usr.password === key
    )
    loguedUser = [...res];
    this.loguedUser = [...res]
    
    console.log(this.loguedUser)
    if(loguedUser.length === 0){
      this.message('https://media2.giphy.com/media/jSQCODNIa6k5myYjyL/200w.webp',"Oops",2200,"center", "Verifique que los datos sean correctos", "error");
      }else{
        this.updateLocalStorage()
      if(loguedUser[0].type=='1'){
        if(loguedUser.length === 0){
          this.message("Oops", 2400,"center","Verifique que los datos sean correctos","error");
          }else{
            this.message("https://media1.giphy.com/media/J1XU9sjU2K2pCluvXo/200w.webp","¡Enhorabuena!", 2400, "center",
              "Ingreso exitoso",
              "success"
            ) ;
            setTimeout(function() {location.href="./frontEnd/administrator.html"}, 2000);
          }      
      } else if(loguedUser[0].type=='2'){
          if(loguedUser.length === 0){
              this.message(
                'https://media2.giphy.com/media/jSQCODNIa6k5myYjyL/200w.webp',
                "Oops",
                2200,
                "center",
                "Verifique que los datos sean correctos",
                "error"
              );
              }else{
              this.setterLocalStorage(this.REGISTERED_USERS_KEY,this.registeredUsers)
              this.setterLocalStorage(this.CURRENT_LOGUED_USER_KEY, this.loguedUser)
              this.messageSuccessLogin()
              }
      }
  }},
  v4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16)
    })
  },
  setDataProducts(){
    let products = {
      additional:[
        {"id":this.v4(),"name":"papas","price":3000},
        {"id":this.v4(),"name":"yuca","price":5000},
        {"id":this.v4(),"name":"nachos","price":1500}
        ],
      burgers: [
      {
        "id": this.v4(),
        "name": "Básica",
        "price": 15000,
        "description": "Hamburguesa con carne de 50gr y queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Sencilla_c4zql2.jpg",
        "additional": []
      },
      {
        "id": this.v4(),
        "name": "Bacon",
        "price": 25000,
        "description": "Hamburguesa con dos carnes de res de 50gr,  125 gr de tocineta, queso cheddar, cebolla, salsa de tomate y mostaza.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Bacon_h8vzrt.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Magna",
        "price": 60000,
        "description": "Prueba la deliciosa Magna. Cinco carnes de res de 50gr con salsa especial de la casa y queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Magna_hoka4e.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Triple Carne",
        "price": 35000,
        "description": "Hamburguesa con tres carnes de 50gr, dos queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.",
        "image": "https://st3.depositphotos.com/3957801/12810/i/600/depositphotos_128102518-stock-photo-big-beef-burger.jpg",
        "additional": []
      }],
      hot_dogs:[{
        "id": this.v4(),
        "name": "Básico",
        "price": 9000,
        "description": "Hot dog básico con mostaza y pan recién horneado.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118573/carrito-market-mix/Hot-sencillo_pzc1oe.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Texano",
        "price": 20000,
        "description": "Hot dog con salchicha texana, lechuga, tomate, cebolla, chips de patata y un toque de queso.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117307/carrito-market-mix/Texano_uccuwd.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Viena",
        "price": 15000,
        "description": "Hot dog con salchicha tipo viena,lechuga, tomate, cebolla y un toque de queso.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117299/carrito-market-mix/Viena_i7rbd7.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Quesudo",
        "price": 17000,
        "description": "Hot dog con salchicha especial de la casa,lechuga, tomate, cebolla y abundante queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117323/carrito-market-mix/Cheeser_uwf5us.jpg",
        "additional": []
      }]
    }
    this.allProducts = products
    this.setterLocalStorage(this.PRODUCTS_KEY,this.allProducts)
  },
  createNewProduct(){
  
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
    validation(){
      let closeModal = document.getElementById('not');
          closeModal.click();
      let closeModal2 = document.getElementById('not1');
          closeModal2.click();
      let openCar = document.getElementById('car');
      openCar.click()
    },
    validation2(){
      let closeModal5 = document.getElementById('segI');
      closeModal5.click();
    }
    
  },
  
})