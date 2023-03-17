import React, { useEffect, useState } from 'react'
import { EditarComponente } from './EditarComponente';

export const Listado = ({Listas, setListas}) => {

    // const [Listado, setListado] = useState([])
    const [editar, setEdicion] = useState(0);

    useEffect(() => {
        conseguirDatosPeliculas()
    }, [])

    const conseguirDatosPeliculas = () => {
        let movies = JSON.parse(localStorage.getItem('Movies'))
        setListas(movies)
        return movies
    }


    
    const BorrarPelicula = (id) => {
        //Conseguir peliculas almacenadas
        let peliculasAlmacenadas = conseguirDatosPeliculas()

        //Filtrar las peliculas y eliminar 
        let nuevoPeliculas = peliculasAlmacenadas.filter(peli => peli.id !== parseInt(id))

        //Actualizar estado del estado
        setListas(nuevoPeliculas)

        //Actualizar datos en el local
        localStorage.setItem('Movies', JSON.stringify(nuevoPeliculas))
    }

  return (
    <>
        {Listas != null ? 
            Listas.map(pelis => {
            return(
                <article className="peli-item" key={pelis.id}>
                    <h3 className="title">{pelis.titulo}</h3>
                    <p className="description">{pelis.descripcion}</p>
    
    
                    <button className="edit" onClick={() => setEdicion(pelis.id)}>Editar</button>
                    <button className="delete" onClick={() => BorrarPelicula(pelis.id)}>Borrar</button>

                    {/* */}
                    {editar === pelis.id  &&
                        (
                            <EditarComponente peli={pelis} conseguirPeli={conseguirDatosPeliculas} setEditar={setEdicion} setL = {setListas}/>
                        )
                    }
                </article>
            )
        }): 
            <h2>No hay peliculas disponibles</h2>
        
        }
       

    </>
  )
}
