/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.preguntas = obtenerPreguntasGuardadas();
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
    let nuevaPregunta = {
      'textoPregunta': nombre,
      'id': id,
      'cantidadPorRespuesta': respuestas
    };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  editarPregunta: function (id, nombre, respuestas) {
    let nuevaPregunta = {
      'textoPregunta': nombre,
      'id': id,
      'cantidadPorRespuesta': respuestas
    };
    for ( let i = 0; i < this.preguntas.length; i++ ) {
      if ( this.preguntas[i].id == id ) {
        this.preguntas[i] = nuevaPregunta;
      }
    }
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
    localStorage.clear();
    localStorage.setItem("preguntas", JSON.stringify(this.preguntas));
  },

  agregarRespuesta: function ( idPregunta, respuesta ) {
    let preguntaConRespuestaAgregada = {};
    this.preguntas.forEach( preguta => {
      if ( preguta.id == idPregunta ) {
        preguta.cantidadPorRespuesta.push( respuesta );
        return preguntaConRespuestaAgregada = preguta;
      }
    })
    this.guardar();
    this.preguntaAgregada.notificar();
    return preguntaConRespuestaAgregada;
  },

  votarRespuesta: function ( idPregunta, textoRespuesta ) {
    let preguntaVotada = {};
    this.preguntas.forEach( pregunta => {
      if ( pregunta.id == idPregunta ) {
        pregunta.cantidadPorRespuesta.forEach( respuesta => {
          if ( respuesta.textoRespuesta == textoRespuesta)
            return respuesta.cantidad++;
        })
        return preguntaVotada = pregunta; 
      }
    })
    this.guardar();
    return preguntaVotada;
  },

  borrarTodasLasPreguntas: function () {
    this.preguntas = [];
    this.ultimoId = 0;
    this.preguntaEliminada.notificar();
    this.guardar();
  },
    
};

  function obtenerPreguntasGuardadas () {
    const preguntasAlmacenadas = localStorage.getItem("preguntas");
    return JSON.parse( preguntasAlmacenadas );
  }