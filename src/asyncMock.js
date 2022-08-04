const productos = [
    {
        id:"111",
        nombre: "Cartel Naranja",
        precio: 500,
        categoria: "retroiluminado",
        img: "./images/Trabajo1.jpg",
        stock: 13,
        descripcion: "Cartel naranja retroiluminado"
        
    },
    {
        id:"222",
        nombre: "Cartel Azul",
        precio: 1000,
        categoria: "neon",
        img: "./images/Trabajo2.jpg",
        stock: 15,
        descripcion: "Cartel azul Neon"
    },
    {
        id: "333",
        nombre: "Cartel Blanco",
        precio: 1500,
        categoria: "mdf",
        img: "./images/Trabajo4.jpg",
        stock: 45,
        descripcion: "Cartel blanco MDF"
    }
]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    })
}

export const getProducto = (id) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 10);
    })
}


export const getProductByCategory = (categoryId) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.categoria === categoryId))
        }, 10)
        
    })
}