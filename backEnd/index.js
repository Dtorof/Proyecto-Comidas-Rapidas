new Vue({   
    el: '#app',
    data: {
    PRODUCTS_KEY: 'all-products'
    },
    created(){
        this.setDataProducts()
    },
    methods: {
      setterLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
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
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Sencilla_c4zql2.jpg",
            "adicionales": []
          },
          {
            "id": v4(),
            "name": "Bacon",
            "price": 25000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Bacon_h8vzrt.jpg",
            "adicionales": []
          },{
            "id": v4(),
            "name": "Magna",
            "price": 60000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Magna_hoka4e.jpg",
            "adicionales": []
          },{
            "id": v4(),
            "name": "Triple Carne",
            "price": 35000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Medium_numhp4.jpg",
            "adicionales": []
          }],
          
          hot_dogs:[{
            "id": v4(),
            "name": "Básico",
            "price": 9000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118573/carrito-market-mix/Hot-sencillo_pzc1oe.jpg",
            "adicionales": []
          },{
            "id": v4(),
            "name": "Texano",
            "price": 20000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117307/carrito-market-mix/Texano_uccuwd.jpg",
            "adicionales": []
          },{
            "id": v4(),
            "name": "Viena",
            "price": 15000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117299/carrito-market-mix/Viena_i7rbd7.jpg",
            "adicionales": []
          },{
            "id": v4(),
            "name": "Quesudo",
            "price": 17000,
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117323/carrito-market-mix/Cheeser_uwf5us.jpg",
            "adicionales": []
          }]
        }

        this.setterLocalStorage(this.PRODUCTS_KEY,products)
      }
    },
    // yeni empieza aca 
    localstorage(){
        
    }
   
})