import React from "react";
import { useEffect } from "react";
import Snifterly from '../img/snifterly.PNG'
import SandBox from '../img/the-sandbox.PNG'
import check from '../img/check.png'
import Logo from '../img/Logo.png'
import Reciclaje from '../img/Reciclaje.PNG'

export const CreationContext = React.createContext();

const CreationProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([
        {
            id: 1,
            nombre: 'Snifterly',
            descripcion: 'Snifterly es una aplicación mobile con el objetivo de promover el consumo responsable de alcohol. La aplicación trabaja con un sistema organizado por jornadas (un período de tiempo en el cual el usuario va a estar ingiriendo bebidas) donde se podrá medir la cantidad de alcohol que uno tiene en su organismo, utilizando un dispositivo alcoholímetro con bluetooth integrado. La app registrará la medición, la duración de la jornada, y el recorrido de su consumo, permitiendo al usuario observar sus hábitos comprensiblemente.',
            imagen: Snifterly,
            repositorio: 'https://github.com/sofygb/Snifterly'
        },
        {
            id: 2,
            nombre: 'The SandBox',
            descripcion: 'The SandBox es un prototipo hecho en Figma, basado en las estrevistas hechas a un cliente relacionadas con el Metaverso.',
            imagen: SandBox,
            repositorio: 'https://www.figma.com/proto/K7keqvuTEqWNtKLHJt5YeN/EFSI---Prototipado-alta?node-id=107-69&starting-point-node-id=107%3A69'
        },
        {
            id: 3,
            nombre: 'Reciclaje Plus',
            descripcion: 'Para promover las prácticas de reciclaje surge Reciclaje Plus, un sitio web el cual busca concientizar y educar para contribuir en el cuidado del medio ambiente. El sitio brinda información sobre los tachos que existen en la actualidad y también uno puede ingresar un producto y el sitio te dirá en qué tacho/s se pueden tirar y por qué.',
            imagen: Reciclaje,
            repositorio: 'https://github.com/MatheoYaco240/TP09--EFSI.git'
        },
        {
            id: 4,
            nombre: 'Librería',
            descripcion: 'El usuario podrá crear Libros en los cuales podrá personalizar la portada, personajes, agregar descripción y dejar reseñas.',
            imagen: Logo,
            repositorio: 'https://github.com/sofygb/TP09.git'
        },
        {
            id: 5,
            nombre: 'CheckList - To-Do List',
            descripcion: 'CheckList es una app móvil que permite registrar tareas/tasks y marcar si están completadas. Una aplicación funcional que sirve para no olvidar las tareas que uno tiene que hacer durante el día o la semana.',
            imagen: check,
            repositorio: 'https://github.com/sofygb/TP06---DAI.git'
        }
    ]);


    return <CreationContext.Provider value={{ creaciones, setCreaciones }}>{props.children}</CreationContext.Provider>
}

export default CreationProvider;