let personas = []

class Persona {
    constructor(nombre, edad, sexo, mascotas) {
        this.nombre = capitalizar(nombre)
        this.edad = parseFloat(edad)
        this.sexo = sexo.toLowerCase()
        this.mascotas = mascotas
    }
}

function obtenerNombre() {
    let nombre

    do {
        nombre = prompt("¿Cómo te llamas?")
    } while (!nombre && !isNaN(nombre))
    return capitalizar(nombre)
}

let capitalizar = (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()

function obtenerEdad(nombre) {
    let edad

    do {
        edad = prompt(`¡Hola ${capitalizar(nombre)}!\n¿Cuál es tu edad?`)
    } while (isNaN(edad) || edad === "")

    return edad
}

function obtenerSexo(nombre) {
    let sexo

    do {
        sexo = prompt(`¿ ${capitalizar(nombre)} cuál es tu sexo?\n\n Ingresa una de las opciones\n- Hombre\no\n- Mujer`).toLowerCase()
    } while (sexo !== "hombre" && sexo !== "mujer")

    return sexo
}

function crearPersona() {
    let nombre = obtenerNombre()
    let edad = obtenerEdad(nombre)
    let sexo = obtenerSexo(nombre)
    let mascotas = []

    let numMascotas = prompt("¿Cuántas mascotas tienes?")
    numMascotas = parseInt(numMascotas)

    for (let i = 0; i < numMascotas; i++) {
        let mascotaNombre = prompt(`Nombre de tu mascota #${i + 1}`)
        let mascotaEspecie = prompt(`¿Es un perro o un gato #${i + 1}`)
        mascotas.push({ nombre: mascotaNombre, especie: mascotaEspecie.toLowerCase() })
    }

    let persona = new Persona(nombre, edad, sexo, mascotas)
    personas.push(persona)
    return persona
}

let personaElegida = crearPersona()

// Lista de productos

let productos = [
    { id: 1, nombre: "Comida para perros de 15 Kg", precio: 24990, mascota: "perro" },
    { id: 2, nombre: "Comida para gatos de 8 kg", precio: 14990, mascota: "gato" },
    { id: 3, nombre: "Juguetes para mascotas", precio: 6990, mascota: "perro/gato" },
    { id: 4, nombre: "Collar", precio: 9990, mascota: "perro/gato" },
]

// Función para mostrar los productos y permitir que la persona elija qué producto comprar
function comprarProductos(persona) {
    let carrito = []
    let total = 0

    let mascotasElegidas = persona.mascotas.map((mascota) => mascota.especie)

    while (true) {
        let productosRelevantes = productos.filter((producto) => {
            let mascotaProducto = producto.mascota.toLowerCase()
            return mascotasElegidas.includes(mascotaProducto) || mascotaProducto.includes("perro/gato")
        })

        if (productosRelevantes.length === 0) {
            alert("No hay productos relevantes para tus mascotas.")
            break
        }

        let mensajeProductos = "\nProductos disponibles:\n"
        for (let producto of productosRelevantes) {
            mensajeProductos += `${producto.id}. ${producto.nombre} - Precio: $${producto.precio}\n`
        }

        mensajeProductos += "0. Finalizar compra"
        let opcion = prompt(mensajeProductos)
        opcion = parseInt(opcion)

        if (opcion === 0) {
            break
        }

        let productoElegido = productosRelevantes.find((producto) => producto.id === opcion)

        if (productoElegido) {
            let carritoItem = carrito.find((item) => item.id === productoElegido.id)

            if (carritoItem) {
                carritoItem.cantidad += 1
            } else {
                carritoItem = { ...productoElegido, cantidad: 1 }
                carrito.push(carritoItem)
            }

            total += productoElegido.precio
            alert(`Has añadido ${productoElegido.nombre} al carrito.`)
        } else {
            alert("El producto seleccionado no existe o no es relevante para tus mascotas.")
        }
    }

    if (carrito.length > 0) {
        let resumenCompra = "Resumen de la compra:\n\n"
        for (let item of carrito) {
            resumenCompra += `Producto: ${item.nombre}\nCantidad: ${item.cantidad}\nPrecio: $${item.precio * item.cantidad}\n\n`
        }
        resumenCompra += `Total a pagar: $${total}`

        alert(resumenCompra)
    } else {
        alert("No has seleccionado ningún producto en tu carrito.")
    }
}

if (personaElegida) {
    comprarProductos(personaElegida)
}
