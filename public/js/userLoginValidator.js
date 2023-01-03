window.onload = function(){

    let form = document.querySelector('.ingreso-datos');

    form.addEventListener("submit", (evento) => {
        let errores = [];
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        
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