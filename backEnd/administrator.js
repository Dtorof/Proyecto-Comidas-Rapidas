new Vue({   
    el: '#app',
    data: {
        //yeni 
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        products:"",
        nameAdditional:"",
        price:0,
        option:[
            {id:1,name:"Crear usuarios"},
            {id:2,name:"Crear productos"},
            {id:3,name:"Crear productos"},
            {id:3,name:"Crear adicionales"},
        ],
        option1:"",
        //yeni 


        
    },
    created(){
        this.products = JSON.parse(localStorage.getItem("all-products"));
        
    },
    methods: {

        validationFlag1(){
            this.flag1=true;
            if(this.flag1==true){
                this.flag2=false;
                this.flag3=false;
                this.flag4=false;
            }

        },
        validationFlag2(){
            this.flag2=true;
            if(this.flag2==true){
                this.flag1=false;
                this.flag3=false;
                this.flag4=false;
            }
        },
        validationFlag3(){
            this.flag3=true;
            if(this.flag3==true){
                this.flag1=false;
                this.flag2=false;
                this.flag4=false;
            }
        },
        validationFlag4(){
            this.flag4=true;
            if(this.flag4==true){
                this.flag1=false;
                this.flag2=false;
                this.flag3=false;
            }
        },
        
        
        
        
        
    },
   
})
