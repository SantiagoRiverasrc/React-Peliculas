export const guardarEnLocal = (clave, pel) => {

    //Conseguir los elementos que ya tenemos en LocalStorage
    let elemento = JSON.parse(localStorage.getItem(clave));
    console.log(elemento);
    //Comprobar si es un array 
    if(Array.isArray(elemento)){
        elemento.push(pel)
    }else{
        elemento = [pel];
    }


    //Guardar en el Local
    localStorage.setItem(clave, JSON.stringify(elemento))

    //Devolver el objeto guardado
    return pel


}