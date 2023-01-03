window.onload = function(){

    let form = document.querySelector('.ingreso-datos');
    form.nombre.focus();

    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let password = document.querySelector("#password");
    
    
    password.addEventListener("blur", (e) => {
        console.log("aqui")
        let errores = [];
        if(password.value.length<3){
            errores.push("Password demasiado corto");
            password.classList.add("is-invalid");
            password.classList.remove("is-valid");
        }else{
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })

    nombre.addEventListener("blur", (e) => {
        let errores = [];
        if(nombre.value.length<2){
            errores.push("Nombre demasiado corto");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })

    apellido.addEventListener("blur", (e) => {
        let errores = [];
        if(apellido.value.length<2){
            errores.push("Apellido demasiado corto");
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
        }else{
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })



    form.addEventListener("submit", (evento) => {
        let errores = [];
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido");
        let categoria = document.querySelector("#categoria");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let imagen = document.querySelector("#imagen");
        
        if(nombre.value.length <2){
            errores.push("Nombre demasiado corto");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(apellido.value.length <2){
            errores.push("Apellido demasiado corto");
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
        }else{
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid")
        }
        if(categoria.value == ""){
            errores.push("Categoria no puede estar vacio");
            categoria.classList.add("is-invalid");
            categoria.classList.remove("is-valid");
        }else{
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid")
        }
        if(email.value == ""){
            errores.push("Email no puede estar vacio");
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
        }else{
            email.classList.add("is-valid");
            email.classList.remove("is-invalid")
        }
        if(password.value.length <3 ){
            errores.push("Password demasiado corto");
            password.classList.add("is-invalid");
            password.classList.remove("is-valid");
        }else{
            password.classList.add("is-valid");
            password.classList.remove("is-invalid")
        }
        if(errores.length > 0){
            evento.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        }
    })
}