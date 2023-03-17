import React, { useState } from 'react'

export const Buscardor = ({listads, setListads}) => {
  const [busqueda, setBusqueda] = useState('');
  const [notFind, setNotFind] = useState(false);

  const buscarPelicula = e => {
    //Crear estado 
    setBusqueda(e.target.value)
    
      let new_movies = listads.filter(elems => {
        return elems.titulo.toLowerCase().includes(busqueda.toLowerCase());
      })


      if(busqueda.length <= 1 || new_movies <= 0){
        new_movies = JSON.parse(localStorage.getItem('Movies'))
        setNotFind(true)
      }else{
        setNotFind(false)
      }

  
      setListads(new_movies)
  }








  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {notFind === true && busqueda.length > 1 &&
          (
            <h6 className='notFound'>No encontrado</h6>
          )
        }
        <form action="">
            <input type="text" name="busqueda" autoComplete='off' onChange={buscarPelicula}/>
            <button>Buscar</button>
        </form>
    </div>
  )
}
