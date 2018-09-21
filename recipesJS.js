/**
 * Este método recursivo nos bloquea todos los objetos y propiedades anidados en un objeto Javascript.
 * Este método puede ser modificado para que se puedan bloquear ciertas propiedades o ciertos objetos anidados.
 * Dependiendo del nivel que queramos se puede bloquear o no.
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