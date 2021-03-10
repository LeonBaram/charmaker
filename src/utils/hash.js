/**
 * @module libma/hash
 * @exports hashCode
 */

/**
 * @function hashCode
 * A JS implementation of Java's hashCode() method, which
 * generates a numerical hash code for a given string. 
 * Code taken from blog post (see "source:" below).
 * Note: this hash code will NOT be secure.
 * @param {string} str Any string
 * @returns {number} An integer hash code
 */
function hashCode(str) {

    if ((typeof str) !== 'string') {
        return null;
    }

    // cache string length for performance
    const len = str.length;

    let hash = 0;
    if (len === 0) {
        return hash;
    }
    // use var instead of let for performance
    // ("let" would be rescoped for each iteration)
    for (var charCode, i = 0; i < len; i++) {

        charCode = str.charCodeAt(i);

        // 1. bit-shift hash by 5 (similar to hash * 2^5)
        // 2. subtract hash (similar to hash * (2^5 - 1))
        // 3. add charCode (a 5-digit integer, see MDN docs)
        hash = ((hash << 5) - hash) + charCode;

        // convert hash to a 32-bit integer
        hash &= hash;
    }
    return hash;
}
// source: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/

export default hashCode();