/**
 * Peticion de tipo POST sin usar jQuery
 * @param {string} ruta peticion
 * @param {string || object} parametros
 * @param {function} Funcion a ejecutar al terminar
 */
function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}
postAjax(Metronic.getGlobalStorePath() + "/storeAccess.html", { node: "newprofile", profile: this.getAttribute('data-dkid') }, function(data){
    var jsoResp = JSON.parse(data);
    if (jsoResp["success"]) {
        console.log(jsoResp)
    } else {
        console.error("pailas");
    }
});

/**
 * Ejemplo recorrer un objeto
 * Nota: en este metodo no se puede hacer un return o break para esos casos use for tipico
 */
// JSON
Object.keys(obj).forEach(function(key) {
    console.log(obj[key])
});
// ARRAY
array.forEach(function(element, index) {
    console.log(element)
});


/**
 * Ejemplos asignacion de eventos
 */
// Vanilla
document.addEventListener('DOMContentLoaded', function() {
    // code
});
element.addEventListener('click', function() {
    // code
});

/**
 * Ejemplo selector
 */
document.querySelectorAll('li[data-dkid]')
document.getElementById('container').getElementsByTagName('li');

/**
 * Ejemplo establecer atributos, clases
 */
element.setAttribute('alt', 'My image')
element.classList.add('foo')
element.classList.remove('foo')
element.classList.toggle('foo')

/**
 * Ejemplos manipulacion del DOM
 */
document.body.appendChild(document.createElement('p'))
document.getElementById('about').cloneNode(true)
document.getElementById('about').parentNode
document.getElementById('wrap').hasChildNodes()
document.getElementById('wrap').nextSibling
// empty elemeny wrap
var wrap = document.getElementById('wrap')
while(wrap.firstChild) wrap.removeChild(wrap.firstChild)

/**
 * Ejemplo iteracion de elemento encontrados por un selector
 */
[].forEach.call(document.querySelectorAll('li[data-dkid]'), function(el) {
    console.log('el: ', el);
});