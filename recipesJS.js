/**
 * Este metodo recursivo nos bloquea todos los objetos y propiedades anidados en un objeto Javascript.
 * Este método puede ser modificado para que se puedan bloquear ciertas propiedades o ciertos objetos anidados.
 * Dependiendo del nivel que queramos se puede bloquear o no.
 * @param {object} Objeto a bloquear
 * @returns {object} Objeto de solo lectura
 */
function freezeObject(obj) {
    var prop, propKey;
    Object.freeze(obj);
    for (propKey in obj) {
        prop = obj[propKey];
        if (!obj.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
            continue;
        }
        freezeObject(prop);
    }
    return obj;
};


/**
 * Funciones para detectar dispositivos moviles
 * @returns {boolean} determina si se accede desde un movil
 */
function isMobile() {
    var regexps = { Android: /Android/i, iOS: /iPhone|iPad|iPod/i };
    return (regexps.Android.test(navigator.userAgent) || regexps.iOS.test(navigator.userAgent));
};
function isIPad() {
    var regexps = { iPad: /iPad/i };
    return (regexps.iPad.test(navigator.userAgent));
};


/**
 * Funciones para crear y descargar ficheros en navegador
 * Dependencia FileSaver.js
 * @see https://github.com/eligrey/FileSaver.js
 * @param {Object} Objecto blob con Array de lineas de fichero
 * @param {string} nombre del fichero a descargar
 * @returns {file} fichero descargado
 */
var content = "What's up , hello world";
// any kind of extension (.txt,.cpp,.cs,.bat)
var filename = "hello.txt";
var blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
});
saveAs(blob, filename);
/**
 * @param {string} Texto fichero
 * @param {string} Nombre fichero
 */
var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var blob = new Blob([data], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
saveData("jota mario", "jota.txt");

/**
 * Funcion para buscar el indice de un array de JSONs que cumpla la condicion que param2 = param3
 * @param {object} Array de JSONs
 * @param {string} nombre de la llave a buscar
 * @param {string} valor de la llave a buscar
 * @returns {number} primera posicion del array que cumple la condicion
 */
function getIdxJson(pObj, pAttr, pVal) {
    for (var i in pObj) {
        if ((pObj[i].config.hasOwnProperty(pAttr)) && (pObj[i].config[pAttr] == pVal)) {
            break;
        } else {
            continue;
        }
    }
    return i;
};
getIdxJson(objSearch, 'dkid', jsoComu['componentid']);