//Declaración de variables
var nombreUsuario = "San Martín" ;
var codigo = "1234" ;
var saldoCuenta = 16800 ;
var limiteExtraccion = 5000 ;
var servicios = [];
var cuentas = [];

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    leerServicios() ;
    leerServicios().then( response => {
        servicios = response ;
    })
    leerCuentas().then( response => {
        cuentas = response ;
    })
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    nuevoMonto = parseInt( prompt( "Ingrese el nuevo límite de extracción" ) ) ;
    if ( nuevoMonto > 0 ) {
        limiteExtraccion = nuevoMonto ;
        actualizarLimiteEnPantalla();
    }
}

function extraerDinero() {
    var dineroAExtraer = parseInt( prompt( "Ingrese el monto en múltiplos de 100 a extraer" ) ) ;
    if ( dineroAExtraer % 100 == 0 ) {
        if ( dineroAExtraer <= limiteExtraccion ) {
            if ( restarDinero( dineroAExtraer ) ) {
                actualizarSaldoEnPantalla() ;
            } else {
                alert ( "El saldo es insuficiente" ) ;
            }
        } else {
            alert ( "El monto ingresado supera el límite" ) ;
        }
    }else {
        alert( "El importe debe ser múltiplo de 100 ya que solo se entregan billetes de esa denominación" ) ;
    }
}

function depositarDinero() {
    nuevoMonto = parseInt( prompt( "Ingrese el monto del dinero a depositar" ) ) ;
    if ( nuevoMonto > 0 ) {
        sumarDinero( nuevoMonto ) ;
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {
    var idServicio = parseInt( prompt( templateServicios() ) ) ;
    if ( idServicio > 0 && idServicio <= cantidadServicios() ) {
        var precioServicio = obtenerImporteServicio( idServicio ) ;
        if ( restarDinero( precioServicio ) ) {
            actualizarSaldoEnPantalla() ;
        } else {
            alert( "El saldo no es suficiente para realizar el pago del servicio" ) ;
        }
    } else {
        alert( "Ha ingresado un id inválido" ) ;
    }
}

function transferirDinero() {
    var dineroATransferir = parseInt( prompt( "Ingrese el monto a transferir" ) ) ;
    if ( dineroATransferir <= saldoCuenta ) {
        var nroCuenta = prompt( "Ingrese el número de cuenta amiga" ) ;
        if ( comprobarCuenta( nroCuenta ) ) {
            restarDinero( dineroATransferir ) ;
            actualizarSaldoEnPantalla() ;
            alert( "Se ha realizado la transferencia a la cuenta " + nroCuenta ) ;
        } else {
            alert ( "Solo se pueden hacer transferencias a una cuenta amiga registrada" ) ;
        }
    } else {
        alert( "El saldo no es suficiente para realizar realizar la transferencia" ) ;
    }
}

function iniciarSesion() {
    codigoIngresado = prompt( "Ingrese el código de seguridad" ) ;
    if ( codigoIngresado != codigo ) {
        saldoCuenta = 0 ;
        alert( "Su saldo ha sido retenido porque el código ingresado es incorrecto" ) ;
    }
}

function sumarDinero( importe ) {
    saldoCuenta += importe ;
}

function restarDinero( importe ) {
    if ( saldoCuenta >= importe ) {
        saldoCuenta -= importe ;
        return true ;
    }
    return false ;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Leer json de servicios
async function leerServicios() {
    const data = await fetch( "js/servicios.json" ) ;
    const jsonData = await data.json() ;
    return jsonData.servicios ;
}

//armar template de servicios
function templateServicios() {
    var result = "" ;
    servicios.forEach(element => {
        result += `${element.id} - ${element.nombre} $ ${element.precio}\n` ;
    });
    return result ;
}

function cantidadServicios() {
    return servicios.length ;
}

function obtenerImporteServicio( idServicio ) {
    return servicios[idServicio -1].precio ;
}

//Leer json de cuentas
async function leerCuentas() {
    const data = await fetch( "js/cuentas.json" ) ;
    const jsonData = await data.json() ;
    return jsonData.cuentas ;
}

function comprobarCuenta( nroCuenta ) {
    result = false ;
    cuentas.forEach(element => {
        if ( element.numeroCuenta == nroCuenta ) 
            result = true ;
    });
    return result ;
}
