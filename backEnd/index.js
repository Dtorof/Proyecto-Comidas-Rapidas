new Vue({   
  el: '#app',
  data: {
  item:{
    additional:[]
  },
  userName: "",
  userPhone: "",
  userDirection: "",
  orders:[],
  cartData: [],
  additionals:0,
  totalPayment: "",
  password: "",
  username: "",
  loguedUser:[],
  registeredUsers:[{name: "Oscar",username:"admin",password:"admin", rol: "administrador"},{name: "Fernando",username:"user",password:"1234", rol: "chef"}],
  allAdditionals: [],
  productsParsed: [],
  allProducts: [],
  PRODUCTS_KEY: 'all-products',
  REGISTERED_USERS_KEY: 'registered-users',
  CURRENT_LOGUED_USER_KEY: 'current-user',
  ADDITIONALS_KEY: 'all-additionals',
  additionalOption:"",
  dataStorage: [],
  flag:0,
  error:false,
  },
  created(){
      this.setDefaultUsers()
      this.setDataProducts()
      this.productsParsed = this.getterLocalStorage(this.PRODUCTS_KEY)
      this.setterLocalStorage(this.DOMICILIARIES_KEY,this.usersRolDomiciliary)
      this.setterLocalStorage(this.CHEFS_KEY,this.usersRolChef)
      this.setterLocalStorage(this.EMPLOYEES_KEY,this.usersRolEmployee)
      this.setterLocalStorage(this.REGISTERED_USERS_KEY, this.registeredUsers)
      this.dataStorage = JSON.parse(localStorage.getItem("dbOrder") || null)
  },
  methods: {
    setterLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getterLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key) || "[]");
    },
    setDefaultUsers(){
      if(localStorage.getItem(this.REGISTERED_USERS_KEY) == null){
        this.setterLocalStorage(this.REGISTERED_USERS_KEY,this.registeredUsers)
      }else{
        this.registeredUsers = this.getterLocalStorage(this.REGISTERED_USERS_KEY)
      }
    },
    updateLocalStorage(){
      localStorage.setItem("dbOrder", JSON.stringify(this.orders))
  },
    addCartButton(item){
      const productBuy = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        description: item.description,
        image: item.image,
      }
      productBuy.subTotal = this.thousandSeparator(productBuy.quantity * productBuy.price);
      productBuy.subTotalNumber =  (item.qty * item.price)
      console.log(item.additional)
      console.log(item.additional.push(this.item.adicional))
      productBuy.additional = item.additional
      // console.log(productBuy.additional)

      this.cartData.push(productBuy);
      this.totalToPay(); 
    },
    addOrder(){
       let order = {
         user: this.userName,
         phone: this.userPhone,
         direction: this.userDirection, 
         totalPayment: this.totalPayment
      }
      order.description = this.cartData.map(prod => {
        return `${prod.quantity} ${prod.name}`
      })
      order.numOrder = this.numOrder();
      this.orders.push(order)
      this.updateLocalStorage(this.orders)
      this.clearForm()
      this.cartData =[]
      this.totalPayment = ""
      // setTimeout(function() {location.href="./index.html"}, 2000);
    },
    numOrder(){
      let id =  `000${Math.floor(Math.random() * 101)}`;
      return id 
    },
    clearForm(){    
      this.userName = ""
      this.userPhone = "" 
      this.userDirection = ""
    },
    thousandSeparator(number = 0, decimalsQuantity = 2) {
      return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },  
    updateQtyHotDogs(action, id){
      const product = this.productsParsed.hot_dogs.find(product => product.id === id)
      if(product){
        const qty = product.qty;
        product.qty = action === "add" ? qty + 1 : qty - 1;
      }
    },
    updateQtyBurgers(action, id){
      let product = this.productsParsed.burgers.find(product => product.id === id)
      if(product.qty >=0){
        const qty = product.qty;
        product.qty = action === "add" ? qty + 1 : qty - 1;
      }else{
        const qty = product.qty;
        product.qty = action === "add" ? qty + 1 : qty - 0;
      }
    },
    messageB(){
      alert("Ingrese una cantidad valida")
    },
    
    totalToPay() {        
        let payData = this.cartData.map((prod)=> {return prod.subTotalNumber})
        let pay = payData.reduce((value, num) => value + num,0)
        this.totalPayment  = this.thousandSeparator(pay, 0);
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
      if(user.rol === 'administrador') {
        return 'administrator'
      } else if(user.rol === 'chef'){
        return 'chef'
      }else if(user.rol === 'empleado'){
        return 'employed'
      }else return 'domiciliary'
    },
    messageSuccessLogin(user){
      this.message(
          "success", 
          "!Login exitoso!",
          2600,
          "center",
          "¡Será redireccionado en unos segundos!",
          false)
      
    setTimeout(() => window.location.href = `/frontEnd/view/${this.validateRolUser(user)}.html`, 2600)
  }, 
  loginUser(user,key){
    let loguedUser = [];
    let session = this.registeredUsers.filter(
     (({username, password})  => username === user && password === key)
     )
     loguedUser = [...session]
     let [currentUser] = loguedUser
     this.setterLocalStorage(this.CURRENT_LOGUED_USER_KEY,loguedUser )

     this.password = ""
     this.username = ""

    return loguedUser.length === 0
    ?
    this.message(
    "warning",
    "Oops",
    2200,
    "center",
    "Verifique que los datos sean correctos",
    false
    )
    : 
    this.messageSuccessLogin(currentUser)
},
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
        "qty": 1,
        "description": "Hamburguesa con carne de 50gr y queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Sencilla_c4zql2.jpg",
        "additional": []
      },
      {
        "id": this.v4(),
        "name": "Bacon",
        "price": 25000,
        "qty": 1,
        "description": "Hamburguesa con dos carnes de res de 50gr,  125 gr de tocineta, queso cheddar, cebolla, salsa de tomate y mostaza.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Bacon_h8vzrt.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Magna",
        "price": 60000,
        "qty": 1,
        "description": "Prueba la deliciosa Magna. Cinco carnes de res de 50gr con salsa especial de la casa y queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Magna_hoka4e.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Triple Carne",
        "price": 35000,
        "qty": 1,
        "description": "Hamburguesa con tres carnes de 50gr, dos queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.",
        "image": "https://st3.depositphotos.com/3957801/12810/i/600/depositphotos_128102518-stock-photo-big-beef-burger.jpg",
        "additional": []
      }],
      hot_dogs:[{
        "id": this.v4(),
        "name": "Básico",
        "price": 9000,
        "qty": 1,
        "description": "Hot dog básico con mostaza y pan recién horneado.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118573/carrito-market-mix/Hot-sencillo_pzc1oe.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Texano",
        "price": 20000,
        "qty": 1,
        "description": "Hot dog con salchicha texana, lechuga, tomate, cebolla, chips de patata y un toque de queso.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117307/carrito-market-mix/Texano_uccuwd.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Viena",
        "price": 15000,
        "qty": 1,
        "description": "Hot dog con salchicha tipo viena,lechuga, tomate, cebolla y un toque de queso.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117299/carrito-market-mix/Viena_i7rbd7.jpg",
        "additional": []
      },{
        "id": this.v4(),
        "name": "Quesudo",
        "price": 17000,
        "qty": 1,
        "description": "Hot dog con salchicha especial de la casa,lechuga, tomate, cebolla y abundante queso derretido.",
        "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117323/carrito-market-mix/Cheeser_uwf5us.jpg",
        "additional": []
      }]
    }
    this.allProducts = products
    if(localStorage.getItem(this.PRODUCTS_KEY) == null){
      this.setterLocalStorage(this.PRODUCTS_KEY,this.allProducts)
    }else{
      this.productsParsed = this.getterLocalStorage(this.PRODUCTS_KEY)
    }
    
  },
    closeTotal(){
      let closeModal2 = document.getElementById('close2');
      closeModal2.click();
      let closeModal3 = document.getElementById('close3');
      closeModal3.click();
      let closeModal = document.getElementById('closeinvisible');
         closeModal.click();
      let closeModalCarrito = document.getElementById('closeCar');
        closeModalCarrito.click();
      
    },

    closeModal1(){
      let closeModal1 = document.getElementById('close1');
      closeModal1.click();
      this.validationmodalpay()
    },

    cancelOrder(){
      let closeModal = document.getElementById('closeinvisible');
         closeModal.click();
      this.cartData.pop()
      this.totalToPay()
    },
    
    validationmodalpay(){
    
        let openCar = document.getElementById('car');
        openCar.click()
     
      
    },
    validation2(){
      let closeModal5 = document.getElementById('segI');
      closeModal5.click();
    },
    valadation1(){
      let closeModal5 = document.getElementById('segI');
      closeModal5.click();
      let closeModal = document.getElementById('not');
          closeModal.click();
      let closeModal2 = document.getElementById('not1');
          closeModal2.click();
      let closeModal3 = document.getElementById('not2');
      closeModal3.click();
    },
    messageDelete(index) {
      swal({
        title: "listo",
        text: "Enviar pedido",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((result) => {
        if (result) {
          this.dataOrder.splice(index,1);
          this.message(
            "Se envio el pedido",
            2000,
            "center",
            "¡Bien!"
          )
          this.updateLocalStorage()
        }
      })
  }
    
  },
  
})