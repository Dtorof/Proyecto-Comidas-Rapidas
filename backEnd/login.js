new Vue({
    el: "#app",
    data: {
      username:"",
      password:"",
      users:[],
      userCredentials:[{username:"admin",password:"admin",type: "administrator"}],
      loguedUser:[]
    },
    created(){
     
    },
    methods: {
    setterLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    },
    getterParsedLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key) || "[]")
    },
    getError() {
     if (this.username == "") {
        this.error = true;
     } else {
        this.error = false;
    }
    if (this.password == "") {
        this.error2 = true;
    } else {
        this.error2 = false;
    }
    },
    login() {
     this.getError()
    if (this.error == true || this.error2 == true) {
    } else {
        return
    }
    },
    validateCredentials(user, key) {
    this.login();
    let loguedUser = [];
    let res = this.userCredentials.filter((usr) => usr.username === user && usr.password === key)
    loguedUser = [...res];
    this.loguedUser = [...res]
    if(loguedUser.length === 0){
    this.message('https://media2.giphy.com/media/jSQCODNIa6k5myYjyL/200w.webp',"Oops",2200,"center", "Verifique que los datos sean correctos", "error");
    }else{
    this.updateLocalStorage()
    if(loguedUser[0].type=='1'){
    if(loguedUser.length === 0){
    this.message("Oops", 2200,"center","Verifique que los datos sean correctos","error");
    }else{
    this.message("https://media1.giphy.com/media/J1XU9sjU2K2pCluvXo/200w.webp","¡Enhorabuena!", 2200, "center",
    "Ingreso exitoso",
    "success"
    ) 
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
    "error");
    }else{
    this.updateLocalStorage()
    this.message(
    "https://media1.giphy.com/media/J1XU9sjU2K2pCluvXo/200w.webp",
    "¡Enhorabuena!",
    2200,
    "center",
    "Ingreso exitoso",
    "success"
    ) 
    setTimeout(function() {location.href="./frontEnd/menuMain.html"}, 2000);
    }
    }
    }},
    message(imageUrl,title, timer, position, text, icon)  {
        Swal.fire({
        imageUrl,
        position,
        text,
        icon,
        title,
        showConfirmButton: false,
        timer,
        });
    },
    }
  });