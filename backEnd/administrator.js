new Vue({
    el: '#app',
    data: {
        hotDogsoptionalImages: ['https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525209/carrito-market-mix/hot-dog-2_w0bkos.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525201/carrito-market-mix/hot-dog-3_dhqaka.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525196/carrito-market-mix/hot-dog-4_fka3ay.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525190/carrito-market-mix/hot-dog-1_qpjgb1.jpg'],
        burgersOptionalImages: ['https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525205/carrito-market-mix/burger-1_ixxrg1.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525196/carrito-market-mix/burger-2_c33tcx.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525190/carrito-market-mix/burger-3_aoiknm.jpg','https://res.cloudinary.com/jorge-tarifa/image/upload/v1665525189/carrito-market-mix/burger-4_of9olc.jpg'],
        optionImage:"",
        roles: ['administrador', 'chef', 'empleado','domiciliario'],
        forms: {
        user: {
        name: "",
        username: "",
        password:"",
        rolDefault:null
        },
        product:{
        name: "",
        description: "",
        price:"",
        image:""
        },
        additional:{
        name: "",
        description: "",
        price:"",
        image:"",
        }
        },
        error: false,
        error2: false,
        error3: false,
        error4: false,
        //
        error5: false,
        error6: false,
        error7: false,
        error8: false,
        error9: false,
        //
        error10: false,
        error11: false,
        //
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:false,
        //
        prueba:"23",
        option:[{name:"Crear usuarios"},{name:"Crear productos"},{name:"Crear adicionales"}],
        option1:"",
        products:"",
        productType:[{name:"Hamburguesas"},{name:"Perros calientes"}],
        product:"",
        productsParsed: [],
        registeredUsers: [],
        allAdditionals: [],
        PRODUCTS_KEY: 'all-products',
        ADDITIONALS_KEY: 'all-additionals',
        REGISTERED_USERS_KEY: 'registered-users',
        CURRENT_LOGUED_USER_KEY: 'current-user',
        CHEFS_KEY: 'users-chef',
        DOMICILIARIES_KEY: 'users-domiciliary',
        EMPLOYEES_KEY: 'users-employee',
        CONSOLIDATION_CARTS_KEY: 'total-carts',
        usersRolChef:[],
        usersRolDomiciliary: [],
        usersRolEmployee: [],
        parsedShoppingCart: [],
        consolidationTotal: ""
        // Es la de Arriba
    }, 

    created(){
      this.productsParsed = this.getterLocalStorage(this.PRODUCTS_KEY)
      this.registeredUsers = this.getterLocalStorage(this.REGISTERED_USERS_KEY)
      this.separateUsersByRol(this.registeredUsers)
      this.parsedShoppingCart = this.getterLocalStorage("dbOrder") 
      this.getTotalsCart(this.parsedShoppingCart)
    },
    methods: {
        saveOptionImage(url){
          this.optionImage=url;
        },
        setterLocalStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data))
          },
          getterLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || "[]")
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
        getTotalsCart(elem){
          let copyData = [...elem]
          const res = (copyData) => copyData.map(x => x.totalPayment)
          .reduce((x,y) => x + y)
          console.log(copyData);
          this.consolidationTotal = res(copyData)
          console.log(this.consolidationTotal);
          if(localStorage.getItem(this.CONSOLIDATION_CARTS_KEY) == null || (this.CONSOLIDATION_CARTS_KEY) !== null){
            this.setterLocalStorage(this.CONSOLIDATION_CARTS_KEY,this.consolidationTotal)
          }else{
            this.consolidationTotal = this.getterLocalStorage(this.CONSOLIDATION_CARTS_KEY)
          }
         
        },
        separateUsersByRol (arr) {
          let data = [...arr]
           data.map(user => {
          if(user.rol === 'domiciliario'){
              this.usersRolDomiciliary.push(user)
              this.setterLocalStorage(this.DOMICILIARIES_KEY, this.usersRolDomiciliary)
          }else if(user.rol === 'empleado'){
              this.usersRolEmployee.push(user)
              this.setterLocalStorage(this.EMPLOYEES_KEY, this.usersRolEmployee)
          }else if(user.rol === 'chef') {
              this.usersRolChef.push(user)
              this.setterLocalStorage(this.CHEFS_KEY, this.usersRolChef)
          }else return
      })
      },
        validateCredentials(){
        },
        v4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16)
          })
        },
        clearProduct(){
          this.product = null
          this.forms.product.name = ""
          this.forms.product.price = ""
          this.forms.product.description = ""
          this.forms.product.image = ""
        },
        clearInputs(){
          this.forms.user.name="";
          this.forms.user.username="",
          this.forms.user.password="",
          this.forms.user.rolDefault=null;
        },
        clearAdditional(){
          this.forms.additional.name = ""
          this.forms.additional.price = ""
        },
        createNewBurger(){
            this.productsParsed.burgers.push({
            id:this.v4(),
            name: this.forms.product.name,
            price: this.forms.product.price,
            qty:1,
            description: this.forms.product.description,
            image: this.optionImage,
            additional:[]
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        this.message(
          "success", 
          "!Creaci??n exitosa!",
          2200,
          "center",
          "??Ahora tienes un nuevo tipo de hamburguesa!",
          false)
          this.clearProduct()
        },
        createNewHotDog(){
            this.productsParsed.hot_dogs.push({
            id:this.v4(),
            name: this.forms.product.name,
            price: this.forms.product.price,
            qty:1,
            description: this.forms.product.description,
            image: this.optionImage,
            additional:[]
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        this.message(
          "success", 
          "!Creaci??n exitosa!",
          2200,
          "center",
          "??Ahora tienes un nuevo tipo de perro caliente!",
          false)
          this.clearProduct()
        },
        createProduct(){
          this.getError2()
          if(this.error5 == true || this.error6 == true || this.error7 == true || this.error8 == true || this.error9 == true ){
               
          }else{
          if(this.product==="Hamburguesas"){
            this.createNewBurger();
          }else{
            this.createNewHotDog()
          }
        }
        },
        imageAdd(){
          this.message(
            "success", 
            "!Imagen guardada!",
            2200,
            "center",
            "??Puede continuar!",
            false)
        },
        createAdditional(){
          this.getError3();
          if(this.error10 == true || this.error11 == true ){
               
          }else{
          this.allAdditionals.push({
            name: this.forms.additional.name,
            price: this.forms.additional.price
          })
            this.setterLocalStorage(this.ADDITIONALS_KEY,this.allAdditionals)
            let [newAdditionals] = [...this.allAdditionals]
            this.productsParsed.additional.push(newAdditionals)
            this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)

            this.setterLocalStorage()
            this.clearAdditional();
            this.message(
              "success", 
              "!Creaci??n exitosa!",
              2200,
              "center",
              "??Ahora tienes un nuevo tipo de adicional!",
              false)
            }
        },
        getError() {
          
          if (this.forms.user.name.length == 0) {
            this.error = true;
          } else {
            this.error = false;
          }
          if (this.forms.user.username.length == 0) {
              this.error2 = true;
          } else {
              this.error2 = false;
          }
          if (this.forms.user.password.length == 0) {
              this.error3 = true;
          } else {
              this.error3 = false;
          }
          if (this.forms.user.rolDefault == null ) {
          this.error4 = true;
          } else {
          this.error4 = false;
          }
        },
        getError2() {
          if (this.product == "") {
            this.error5 = true;
          } else {
            this.error5 = false;
          }
          if (this.forms.product.name.length == 0) {
            this.error6 = true;
          } else {
            this.error6 = false;
          }
          if (this.forms.product.description.length == 0) {
              this.error7 = true;
          } else {
              this.error7 = false;
          }
          if (this.forms.product.price.length == 0) {
              this.error8 = true;
          } else {
              this.error8 = false;
          }
          if (this.optionImage == "") {
          this.error9 = true;
          } else {
          this.error9 = false;
          }
        },
        getError3() {
          
          if (this.forms.additional.name.length == 0) {
            this.error10 = true;
          } else {
            this.error10 = false;
          }
          if (this.forms.additional.price.length == 0) {
              this.error11 = true;
          } else {
              this.error11= false;
          }
        },
        createEmployee(){
          this.getError();
          if(this.error == true || this.error2 == true || this.error3 == true || this.error4 == true  ){
               
          }else{
          console.log(this.forms.user.name.length)
            this.registeredUsers.push({
              name: this.forms.user.name,
              username: this.forms.user.username,
              password:this.forms.user.password,
              rol:this.forms.user.rolDefault
            })
            this.message(
              "success", 
              "!Creaci??n exitosa!",
              2200,
              "center",
              `??Ahora tienes un nuevo ${this.forms.user.rolDefault} en el sistema!`,
              false)
            this.setterLocalStorage(this.REGISTERED_USERS_KEY,this.registeredUsers)
          }
         this.clearInputs();
         
        },
        
       },
    //yeni
    watch:{
      option1(){
        if(this.option1==this.option[0].name){
          this.flag1=true;
          this.flag2=false;
          this.flag5=false;
        }
        if(this.option1==this.option[1].name){
          this.flag1=false;
          this.flag2=true;
          this.flag5=false;
        }
        if(this.option1==this.option[2].name){
          this.flag1=false;
          this.flag2=false;
          this.flag5=true;
        }
      },
      product(){
        if(this.product==this.productType[0].name){
          this.flag3=true;
          this.flag4=false;
        }
        if(this.product==this.productType[1].name){
          this.flag3=false;
          this.flag4=true;
        }
      },
    }
})