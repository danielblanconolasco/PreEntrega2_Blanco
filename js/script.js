let personas = []
let mascotas = []

class Persona {
    constructor(nombre, edad, sexo, mascotas) {
        this.nombre  = nombre.toUpperCase()
        this.edad  = parseFloat(edad)
        this.sexo = sexo
        this.mascotas = this.mascotas(mascotas)
    }
    mascotas(mascotaIngreso) {
        let  { nombre, especie } = mascotaIngreso
        this.mascotaNombre = nombre
        this.mascotaEspecie = especie.toLowerCase()
    }
}
function bienvenido (){
    let persona
    alert("mensaje")
    nombre = prompt("Como te llamas")
    persona.push(new persona(nombre, edad, sexo, mascotas))
}
bienvenido ()
