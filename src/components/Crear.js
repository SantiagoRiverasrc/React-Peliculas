import React, { useState } from 'react'
import { guardarEnLocal } from '../helpers/GuardaEnStorage'

export const Crear = ({setListas}) => {
    const tituloComponente = 'Añadir Pelicula'
    const [pelistate, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    })


    const {titulo, descripcion} = pelistate

    const ConseguirDatos = e => {
        e.preventDefault()
        
        //Conseguir datos
        let toma = e.target;
        let titulo = toma.titulo.value
        let descripcion = toma.descripcion.value
        
        //Crear objeto
        let movie = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }


        setPelicula(movie)
        
        //Actualizar el estado listado principal
        setListas(elements => {
            return [...elements,movie];
        })

        //Guardar en el almacenamiento local
        guardarEnLocal("Movies",movie)
    }


  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        {titulo && descripcion &&
            (
                `Has creado una pelicula ${titulo}`
            )
        }
        <form onSubmit={ConseguirDatos}>
            <input type="text" name='titulo' id='titulo' placeholder="Titulo" required/>
            <textarea  id='descripcion' name='descripcion' placeholder="Descripcion" cols="40" rows="10" required></textarea>
            <br></br>
            <button type="submit" id='save'>Enviar</button>
        </form>
    </div>
  )
}
