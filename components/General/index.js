/**
 * Funçōes gerais
 */

/**
 * Percorre um objeto javascript e chama o callback passando (key, value)
 * Similar ao map do array, porém em objetos
 * @author Davi Souto
 * @since  17/06/2018
 */
export function MapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}
