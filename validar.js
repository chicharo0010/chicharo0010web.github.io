function validar(form){
    //validar nombre
    let nombre = form.nombre.value.trim()
    if(nombre==""){
        alert("por favor, ingrese su nombre")
    }
    let edad=form.edad.value.trim()
    if(edad==="" || isNaN(edad) || edad<0){
        alert("por favor, ingresa una edad valida")
    }

    let sexo =form.sexo.value.trim()
    if(sexo===""){
        alert("por favor, selecciona un sexo")
    }
    
    let deporte = form.deporte.value.trim()
    if(deporte==="ninguno"){
        alert("por favor, selecciona un deporte")
    }

}