import React from 'react'


export const EditarComponente = ({peli, conseguirPeli, setEditar, setL}) => {
  const guardarEdit = (e,id) => {
    e.preventDefault()
    
    let toma = e.target


    //Conseguir peliculas
    const peliculasAlmacen = conseguirPeli();
    
    // Conseguir indice
    const indicepelicula = peliculasAlmacen.findIndex(peli => peli.id === id)


    let moviesobj = {
      id,
      titulo: toma.titulo.value,
      descripcion: toma.descripcion.value
    };


    //Actualizar objeto
    peliculasAlmacen[indicepelicula] = moviesobj


    //Guardar
    localStorage.setItem("Movies", JSON.stringify(peliculasAlmacen))


    setL(peliculasAlmacen)
    setEditar(0);
  }

  return (
    <div className='form-edit'>
        <h4>Editar Pelicula</h4>
        <br></br>
        <form onSubmit={e => guardarEdit(e, peli.id)}>
          <input type='text' name='titulo' defaultValue={peli.titulo}/>
          <textarea name='descripcion' id='areaedit' defaultValue={peli.descripcion}/>
          <button type='submit'>Editar</button>
        </form>
    </div>
  )
}
