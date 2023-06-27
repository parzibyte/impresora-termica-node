const { ConectorPluginV3 } = require("./ConectorJavaScript")
// Recuerda que siempre puedes usar async y await en lugar de then
ConectorPluginV3.obtenerImpresoras().then(impresoras => {
    console.log("Las impresoras son:");
    console.log(impresoras);
});
const licencia = ""; // Aquí la licencia en caso de que cuentes con ella
const conector = new ConectorPluginV3(null, licencia);
const nombreImpresora = "PT210"; // Aquí el nombre de tu impresora
conector
    .Iniciar()
    .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
    .DescargarImagenDeInternetEImprimir("http://assets.stickpng.com/thumbs/587e32259686194a55adab73.png", 0, 216)
    .Feed(1)
    .EscribirTexto("Parzibyte's blog\n")
    .EscribirTexto("Blog de un programador\n")
    .EscribirTexto("Teléfono: 123456798\n")
    .EscribirTexto("Fecha y hora: " + (new Intl.DateTimeFormat("es-MX").format(new Date())))
    .Feed(1)
    .EstablecerAlineacion(ConectorPluginV3.ALINEACION_IZQUIERDA)
    .EscribirTexto("____________________\n")
    .TextoSegunPaginaDeCodigos(2, "cp850", "Venta de plugin para impresoras versión 3\n")
    .EstablecerAlineacion(ConectorPluginV3.ALINEACION_DERECHA)
    .EscribirTexto("$25\n")
    .EscribirTexto("____________________\n")
    .EscribirTexto("TOTAL: $25\n")
    .EscribirTexto("____________________\n")
    .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
    .EscribirTexto("TOTAL: $25\n")
    .EstablecerEnfatizado(true)
    .EstablecerTamañoFuente(1, 1)
    .TextoSegunPaginaDeCodigos(2, "cp850", "¡Gracias por su compra!\n")
    .Feed(1)
    .ImprimirCodigoQr("https://parzibyte.me/blog", 160, ConectorPluginV3.RECUPERACION_QR_MEJOR, ConectorPluginV3.TAMAÑO_IMAGEN_NORMAL)
    .Feed(1)
    .ImprimirCodigoDeBarrasCode128("parzibyte.me", 80, 192, ConectorPluginV3.TAMAÑO_IMAGEN_NORMAL)
    .Feed(1)
    .EstablecerTamañoFuente(1, 1)
    .EscribirTexto("parzibyte.me\n")
    .Feed(3)
    .Corte(1)
    .Pulso(48, 60, 120);

conector
    .imprimirEn(nombreImpresora)
    .then(respuesta => {
        if (respuesta === true) {
            console.log("Impreso correctamente");
        } else {
            console.log("Error: " + respuesta);
        }
    });