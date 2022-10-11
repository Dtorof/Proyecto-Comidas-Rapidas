new Vue({
    el: '#app',
    data: {
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
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:false,
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
    },
    created(){
      this.productsParsed = this.getterLocalStorage(this.PRODUCTS_KEY)
      this.registeredUsers = this.getterLocalStorage(this.REGISTERED_USERS_KEY)
    },
    methods: {
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
            description: this.forms.product.description,
            image: this.forms.product.image,
            additional:[]
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        this.message(
          "success", 
          "!Creación exitosa!",
          2200,
          "center",
          "¡Ahora tienes un nuevo tipo de hamburguesa!",
          false)
          this.clearProduct()
        },
        createNewHotDog(){
            this.productsParsed.hot_dogs.push({
            id:this.v4(),
            name: this.forms.product.name,
            price: this.forms.product.price,
            description: this.forms.product.description,
            image: this.forms.product.image,
            additional:[]
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        this.message(
          "success", 
          "!Creación exitosa!",
          2200,
          "center",
          "¡Ahora tienes un nuevo tipo de perro caliente!",
          false)
          this.clearProduct()
        },
        createProduct(){
        if(this.product==="Hamburguesas"){
          this.createNewBurger();
        }else{
          this.createNewHotDog()
        }
        },
        createAdditional(){
          this.allAdditionals.push({
            name: this.forms.additional.name,
            price: this.forms.additional.price
          })
        this.setterLocalStorage(this.ADDITIONALS_KEY,this.allAdditionals)
        this.clearAdditional();
        this.message(
          "success", 
          "!Creación exitosa!",
          2200,
          "center",
          "¡Ahora tienes un nuevo tipo de adicional!",
          false)
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
         this.setterLocalStorage(this.REGISTERED_USERS_KEY,this.registeredUsers)}
         this.message(
          "success", 
          "!Creación exitosa!",
          2200,
          "center",
          `¡Ahora tienes un nuevo ${this.forms.user.rolDefault} en el sistema!`,
          false)
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
