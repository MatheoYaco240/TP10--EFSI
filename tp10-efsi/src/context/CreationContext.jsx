import React from "react";
import { useEffect } from "react";
import Snifterly from '../img/snifterly.PNG'
import SandBox from '../img/the-sandbox.PNG'

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
        }
    ]);


    return <CreationContext.Provider value={{ creaciones, setCreaciones }}>{props.children}</CreationContext.Provider>
}

export default CreationProvider;