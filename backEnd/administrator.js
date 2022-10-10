new Vue({   
    el: '#app',
    data: {
        roles: ['administrator', 'chef', 'employee','domiciliary'],
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
        image:""
        }
        },
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:false,
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
        validateCredentials(){

        },
        validateErrorLogin(){

        },
        createNewBurger(){
            this.productsParsed.burgers.push({
            id:this.v4(),
            name: this.forms.product.name,
            price: this.forms.product.price,
            description: this.forms.product.description,
            image: this.forms.product.image,
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        },
        createNewHotDog(){
            this.productsParsed.hot_dogs.push({
            id:this.v4(),
            name: this.forms.product.name,
            price: this.forms.product.price,
            description: this.forms.product.description,
            image: this.forms.product.image,
        })
        this.setterLocalStorage(this.PRODUCTS_KEY,this.productsParsed)
        },
        createAdditional(){
          this.allAdditionals.push({
            name: this.forms.additional.name,
            price: this.forms.additional.price
          })
        this.setterLocalStorage(this.ADDITIONALS_KEY,this.allAdditionals)
        },
        createEmployee(){
          this.registeredUsers.push({
            name: this.forms.user.name,
            username: this.forms.user.username,
            password:this.forms.user.password,
            rol:this.forms.user.rolDefault
          })
        this.setterLocalStorage(this.REGISTERED_USERS_KEY,this.registeredUsers)
        },

        //yeni
        

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
      }
    }
})
