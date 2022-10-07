new Vue({   
    el: '#app',
    data: {
        userType:[{id:1,name:"Chef"},{id:2,name:"Mesero"},{id:3,name:"Domiciliario"}],
        user:"",
        productType:[{id:1,name:"Hamburguesa"},{id:2,name:"Perros"}],
        product:"",
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
    },
    created(){
        
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
        }
        
    },
   
})
