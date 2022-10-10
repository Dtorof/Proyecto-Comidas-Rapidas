new Vue({   
    el: '#app',
    data: {
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
        nameAdditional:"",
        price:0,
        registeredUsers: [],
        allAdditionals: [],
        allProducts: [],
        PRODUCTS_KEY: 'all-products',
        productsParsed:"",
        
    },
    created(){
        this.productsParsed = JSON.parse(localStorage.getItem("all-products"));
        console.log('new data');
        console.log(this.allProducts)
    },
    methods: {
        setterLocalStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data))
          },
          getterParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || "[]")
        },
        validateCredentials(){

        },
        validateErrorLogin(){

        },
        createProduct(){

        },
        createAdditional(){

        },
        createEmployee(){

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
