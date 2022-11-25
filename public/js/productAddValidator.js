window.onload = function(){

    let form = document.querySelector('.ingreso-datos');
    form.nombre.focus();

    let nombre = document.querySelector("#nombre");

    nombre.addEventListener("blur", (e) => {
        let errores = [];
        if(nombre.value.length<5){
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


    form.addEventListener("submit", (evento) => {
        let errores = [];
        let nombre = document.querySelector("#nombre");
        let descuento = document.querySelector("#descuento");
        let categoria = document.querySelector("#categoria");
        let tamano = document.querySelector("#tamano");
        let imagen = document.querySelector("#imagen");
        let precio = document.querySelector("#precio");
        
        if(nombre.value == ""){
            errores.push("Nombre no puede estar vacio");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(descuento.value == ""){
            errores.push("Descuento no puede estar vacio");
            descuento.classList.add("is-invalid");
            descuento.classList.remove("is-valid");
        }else{
            descuento.classList.add("is-valid");
            descuento.classList.remove("is-invalid")
        }
        if(categoria.value == ""){
            errores.push("Categoria no puede estar vacio");
            categoria.classList.add("is-invalid");
            categoria.classList.remove("is-valid");
        }else{
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid")
        }
        if(tamano.value == ""){
            errores.push("Tamaño no puede estar vacio");
            tamano.classList.add("is-invalid");
            tamano.classList.remove("is-valid");
        }else{
            tamano.classList.add("is-valid");
            tamano.classList.remove("is-invalid")
        }
        if(precio.value == ""){
            errores.push("Precio no puede estar vacio");
            precio.classList.add("is-invalid");
            precio.classList.remove("is-valid");
        }else{
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid")
        }
        if(errores.length > 0){
            evento.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        }else{

        }
        
    })
}