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
    },
    created(){
        this.setDataProducts()
        this.productsParsed = JSON.parse(localStorage.getItem("all-products"));
        this.createNewProduct()
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
        v4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16)
            })
          },
          setDataProducts(){
          let products = {
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
            this.allProducts.burgers.push({
                name: 'Vegana',
                price: 22000,
                description: 'Prueba la deliciosa Vegana. Porción de vegetales de 125gr con un increible sabor y textura a carne, salsas de la casa y los más frescos vegetales.',
                image: 'https://assets.unileversolutions.com/recipes-v2/211056.jpg',
                id: this.v4()
            })
            this.setterLocalStorage(this.PRODUCTS_KEY,this.allProducts)
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
