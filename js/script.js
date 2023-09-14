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
    return  capitalizar(nombre)
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

function bienvenido() {
    while (true) {
        let nombre = obtenerNombre()
        let edad = obtenerEdad(nombre)
        let sexo = obtenerSexo(nombre)
        let mascotas = []

        let numMascotas = prompt("¿Cuántas mascotas tienes?")
        numMascotas = parseInt(numMascotas)

        for (let i = 0; i < numMascotas; i++) {
            let mascotaNombre = prompt(`Nombre de tu mascota #${i + 1}`)
            let mascotaEspecie = prompt(`Especie de tu mascota #${i + 1}`)
            mascotas.push({ nombre: mascotaNombre, especie: mascotaEspecie })
        }

        let persona = new Persona(nombre, edad, sexo, mascotas)
        personas.push(persona)

        let continuar = prompt("¿Deseas agregar otro perfil? (si/no)").toLowerCase()
        if (continuar !== "si") {
            break
        }
    }
}

bienvenido()
console.log(personas)
