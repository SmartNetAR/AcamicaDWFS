/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  posicion: 'abajo',
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  mover: function (velocidadX, velocidadY) {
    this.x += velocidadX;
    this.y += velocidadY;
    this.girar(velocidadX, velocidadY);
  },
  girar: function (velocidadX, velocidadY) {
    if (velocidadX > 0){
      this.posicion = "derecha";
    }else if (velocidadX < 0) {
      this.posicion = "izquierda";
    }else if (velocidadY > 0) {
      this.posicion = "abajo";
    }else if (velocidadY < 0) {
      this.posicion = "arriba";
    }else {
      return
    }
    this.actualizarSprite();
  },
  actualizarSprite: function () {
    if (this.sprite != 'imagenes/auto_rojo_' + this.posicion + '.png') {
      this.sprite = 'imagenes/auto_rojo_' + this.posicion + '.png';
      if (this.posicion == "arriba" || this.posicion == "abajo") {
        this.ancho = 15;
        this.alto= 30;
      }else{
        this.ancho = 30;
        this.alto= 15;
      }
    }
  },
  perderVidas: function ( numVidas = 1) {
    if (this.vidas >0) this.vidas-= numVidas;
    return this.vidas;
  }

}
