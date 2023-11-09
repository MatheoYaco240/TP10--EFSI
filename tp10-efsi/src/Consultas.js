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
        headers: {
            'Content-Type': 'application/json',
         },
        body: JSON.stringify({
            'idCreacion': creacion.id,
            'nombre': creacion.nombre,
            'descripcion': creacion.descripcion,
            'imagen': creacion.imagen,
            'respositorio': creacion.repositorio,
        })
    })
    console.log(res) 
    return await res.json()
}

export const deleteFavoritos = async (creacion) => { //Recibe la creacion de la lista de todas las creaciones, no tiene idCreacion
    const data = await getData()
    const index = data.findIndex((item) => item.idCreacion === creacion.id)
    const res = await fetch(API + `/${data[index].id}`, {
        method: "DELETE",
    })
    console.log(res) 
    return await res.json()
}