//Puerto 3000 para el front, 3001 para el back
const API = `http://localhost:3001/favoritos`
/* 
?nombre=
?descripcion=
?imagen=
*/

export const getData = async () => {
    const res = await fetch(API, {
        method: "GET",
    })
    console.log(res) 
    return await res.json()
}

export const setFavoritos = async (creacion) => {
    const res = await fetch(API + '/', {
        method: "POST",
        body: {
            id: creacion.id,
            nombre: creacion.nombre,
            descripcion: creacion.descripcion,
            imagen: creacion.imagen
        }
    })
    console.log(res) 
    return await res.json()
}