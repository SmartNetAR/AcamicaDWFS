var $grillaPixeles;
var $paleta;
var $indicadorColor;

var colorSeleccionado;

$(document).ready( function () {
  $paleta = $('#paleta');
  $grillaPixeles = $('#grilla-pixeles');
  $indicadorColor = $('#indicador-de-color');

  generarPaleta(nombreColores);
  generarGrilla();

  $paleta.click( function (e) {
    let color = ($(e.target).css("background-color"));
    cambiarColor(color);
  });

  $('#borrar').click(function () {
    borrarTodo();
  })


  // le adjunto el método mouseover a la grilla cuando bajo el botón del mouse
  $($grillaPixeles).mousedown(function(e) {

    $divActual = e.target;
    $($divActual).css("background-color", colorSeleccionado);
    
    $($grillaPixeles).bind('mouseover',function(e){

        $divActual = e.target;
        $($divActual).css("background-color", colorSeleccionado);

    });
  }) // le quito el método mouseover a la grilla cuando suelto el botón del mouse
  .mouseup(function() {

    $($grillaPixeles).unbind('mouseover');

  });

  $('.imgs').click(function (e) {
    idNombre = e.target.id;
    cargarImagen(idNombre);
  })

  $('#guardar').click(guardarPixelArt);

})
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cambiarColor(colorActual);
  }
);

function cambiarColor(nuevoColor) {
  if (nuevoColor != 'rgba(0, 0, 0, 0)') {
    $indicadorColor.css("background-color", nuevoColor);
    colorSeleccionado = nuevoColor;
  }
}

function generarPaleta(listaColores) {
  let $contenido = '';
  listaColores.forEach(color => {
      let $nuevoDivColor = '<div style="background-color:'+ color + '"></div>';
      $contenido = $contenido + $nuevoDivColor;
    });
    $paleta.html($contenido);  
}



function generarGrilla() {
  let $contenido = '';
  for (let index = 0; index < 1750; index++) {
    let $nuevoDivPixel = '<div></div>';
    $contenido = $contenido + $nuevoDivPixel;
  }
  $grillaPixeles.html($contenido);

  $(document).mousedown(function() {
    $($grillaPixeles).bind('mouseover',function(){
        $(this).css({background:"#333333"});
    });
  })
}

function borrarTodo() {
  var $todosLosDivs = $($grillaPixeles).children();
  $todosLosDivs.animate({
    backgroundColor: 'white'
  }, 600)
}

function cargarImagen(nombre) {
  switch (nombre) {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
    default:
      break;
  }
}