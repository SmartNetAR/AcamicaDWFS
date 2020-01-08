var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter( (horario) => horario != horarioReservado )
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    return Math.round(promedio( this.calificaciones ) * 10) / 10;
}

const sumatoria = ( numeros ) => {
    return numeros.reduce( (acumulado, numero ) => acumulado + numero )
}

const promedio = ( numeros ) => {
    return numeros.length == 0 ? 0 : sumatoria( numeros ) / numeros.length
}