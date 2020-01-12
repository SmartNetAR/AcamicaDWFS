
const expect = chai.expect

describe('Test Reserva Horario Existente', () => {
    const resto1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])

    const horarioAReservar = "15:30"
    const cantidadHorariosDisponibles = resto1.horarios.length
    resto1.reservarHorario(horarioAReservar)
    it('al reservar se elimine el horario del array', () => {
        expect(resto1.horarios.length).to.be.equal(cantidadHorariosDisponibles -1)
    })
    it(`al reservar se elimine el horario ${horarioAReservar} del array y en su lugar esté el siguiente 18:00`, () => {
        expect(resto1.horarios[1]).to.be.equal("18:00")
    })
})

describe('Test Reserva Horario Inexistente', () => {
    const resto1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])

    const horarioAReservar = "12:00"
    const cantidadHorariosDisponibles = resto1.horarios.length
    resto1.reservarHorario(horarioAReservar)
    it('al reservar no se elimine el horario del array', () => {
        expect(resto1.horarios.length).to.be.equal(cantidadHorariosDisponibles)
    })

    resto1.reservarHorario()
    it('al reservar sin parámetro de horario se mantengan las reservas iguales', () => {
        expect(resto1.horarios.length).to.be.equal(cantidadHorariosDisponibles)
    })

})

describe('Test Obtener puntuación', () => {
    const resto1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
    const resto2 = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [])

    const promedio = 7.4
    it(`el promedio debe ser ${promedio} de [6, 7, 9, 10, 5]`, () => {
        expect(resto1.obtenerPuntuacion()).to.be.equal(promedio)
    })

    it(`el promedio debe ser 0 para [] 'sin calificaciones'`, () => {
        expect(resto2.obtenerPuntuacion()).to.be.equal(0)
    })
})

describe('Test calificar', () => {
    const resto1 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
    const resto2 = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [])

    const promedio = 7.8
    it(`si califico con 10 el promedio debe ser ${promedio}, sumado a las calificaciones existentes [6, 7, 9, 10, 5]`, () => {
        resto1.calificar(10)
        expect(resto1.obtenerPuntuacion()).to.be.equal(promedio)
    })

    it(`Si un resto sin calificaciones se le agrega 7 debe ser 7 su promedio`, () => {
        resto2.calificar(7)
        expect(resto2.obtenerPuntuacion()).to.be.equal(7)
    })
})

describe('Test listado buscar por id', () => {
    const listadoDeRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
    ]

    const listado = new Listado(listadoDeRestaurantes)
    
    it(`Si busco el id 3 debe devolverme el resto "Burgermeister"`, () => {
        const resto = listado.buscarRestaurante(3)
        expect(resto.nombre).to.be.equal("Burgermeister")
    })
    it(`Si busco el id 0 debe devolverme No se ha encontrado ningún restaurant`, () => {
        const resto = listado.buscarRestaurante(3)
        expect(listado.buscarRestaurante(0)).to.be.equal("No se ha encontrado ningún restaurant")
    })
    it(`Si busco el id 5 debe devolverme No se ha encontrado ningún restaurant`, () => {
        const resto = listado.buscarRestaurante(3)
        expect(listado.buscarRestaurante(5)).to.be.equal("No se ha encontrado ningún restaurant")
    })
})

describe('Test listado obtener restaurantes', () => {
    const listadoDeRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
        new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
    ]

    const listado = new Listado(listadoDeRestaurantes)
    
    it(`Debo obtener un array si busco Asiática`, () => {
        const restos = listado.obtenerRestaurantes("Asiática", null, null)
        expect(restos).to.be.a("Array")
    })
    it(`Debo obtener un array de dos elementos si busco Asiática`, () => {
        const restos2 = listado.obtenerRestaurantes("Asiática", null, null)
        console.log (restos2)
        expect(restos2.length).to.be.equal(2)
    })
    it(`Debo obtener un array de 1 elementos si de nombre "TAO Uptown"" busco Asiática, "Nueva York, 15:30`, () => {
        const restos3 = listado.obtenerRestaurantes("Asiática", "Nueva York", "15:30")
        expect(restos3[0].nombre).to.be.equal("TAO Uptown")
    })
})


//TDD
function Reserva( fecha, cantidadPersonas, precioPorPersona, codigoDescuento ) {
    this.fecha = fecha,
    this.cantidadPersonas = cantidadPersonas,
    this.precioPorPersona = precioPorPersona,
    this.codigoDescuento = codigoDescuento
}
Reserva.prototype.precioBase = function () {
    return this.cantidadPersonas * this.precioPorPersona
}

describe('Creación de Reservas', () => {


    const cantidadPersonas = 3
    const precioPorPersona = 500
    const reserva = new Reserva("10/01/2020", cantidadPersonas, precioPorPersona, "ABC123")

    it(`el precio base de una reserva con ${cantidadPersonas} personas a ${precioPorPersona} es $${cantidadPersonas * precioPorPersona}`, () => {
        expect(reserva.precioBase()).to.be.equal(precioPorPersona * cantidadPersonas)
    })
    
    const codigoDescuento = { codigo: 'DES15', porcentaje: 15 }
    const reservaConDescuento = new Reserva("10/01/2020", cantidadPersonas, precioPorPersona, codigoDescuento.codigo)

    it(`el precio con descuento de ${codigoDescuento.porcentaje}% con el código ${codigoDescuento.porcentaje}`, () => {
        expect(reservaConDescuento.precioBase()).to.be.equal( (precioPorPersona * cantidadPersonas) * )
    })

})