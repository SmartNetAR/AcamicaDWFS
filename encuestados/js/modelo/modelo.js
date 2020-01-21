/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    this.preguntas.forEach( pregunta => {
      if ( pregunta.id > this.ultimoId )
        this.ultimoId = pregunta.id
    });
    return this.ultimoId;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {
      'textoPregunta': nombre,
      'id': id,
      'cantidadPorRespuesta': respuestas
    };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  borrarPregunta: function( id ) {
    this.preguntas = this.preguntas.filter( pregunta => pregunta.id != id );
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
  },

  agregarRespuesta: function ( respuesta ) {
    
  },

  votarRespuesta: function ( idPregunta, textoRespuesta ) {
    let preguntaVotada = {}
    this.preguntas.forEach( pregunta => {
      if ( pregunta.id == idPregunta ) {
        pregunta.cantidadPorRespuesta.forEach( respuesta => {
          if ( respuesta.textoRespuesta == textoRespuesta)
            return respuesta.cantidad++;
        })
        return preguntaVotada = pregunta; 
      }
    })
    return preguntaVotada;
  },

  borrarTodasLasPreguntas: function () {
    this.preguntas = [];
    this.ultimoId = 0;
  }
};
