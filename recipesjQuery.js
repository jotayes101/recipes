/**
 * Clonar objetos, sirve para dereferenciar objetos
 * Shallow: Crea un objeto cuyas referencias son iguales
 * Deep: En este modo tambien se duplican los elementos referenciados
 */
// Shallow copy
var newObject = jQuery.extend({}, oldObject);
// Deep copy
var newObject = jQuery.extend(true, {}, oldObject);
var newArray = oldArray.slice();