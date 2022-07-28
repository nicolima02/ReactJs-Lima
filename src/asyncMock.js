const productos = [
    {
        codigo: "1111",
        nombre: "Cartel Naranja",
        precio: 500,
        categoria: "Retroiluminado",
        img: "./images/Trabajo1.jpg"
        
    },
    {
        codigo:"2222",
        nombre: "Cartel Azul",
        precio: 1000,
        categoria: "Neon",
        img: "./images/Trabajo2.jpg"
    },
    {
        codigo: "3333",
        nombre: "Cartel Blanco",
        precio: 1500,
        categoria: "MDF",
        img: "./images/Trabajo4.jpg"
    }
]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}


