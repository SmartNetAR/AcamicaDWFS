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
  rotacion: 'abajo',
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
      this.rotacion = "derecha";
    }else if (velocidadX < 0) {
      this.rotacion = "izquierda";
    }else if (velocidadY > 0) {
      this.rotacion = "abajo";
    }else if (velocidadY < 0) {
      this.rotacion = "arriba";
    }else {
      return
    }
    this.actualizarSprite();
  },
  actualizarSprite: function () {
    if (this.sprite != 'imagenes/auto_rojo_' + this.rotacion + '.png') {
      this.sprite = 'imagenes/auto_rojo_' + this.rotacion + '.png';
      if (this.rotacion == "arriba" || this.rotacion == "abajo") {
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
