/**
 * @module libma/rand
 * @exports rand
 */

/**
 * @function rand
 * randomly picks from the provided arguments
 * @param  {...any} args Any number of arguments (preferably 2+)
 * @returns {any} one of the provided args at random, or null if no args
 */
function rand(...args) {

    const len = args.length;

    if (len < 2) {
        return len === 1 ? args[0] : null;
    }

    return args[
        Math.floor(Math.random() * len)
    ];
}

function shuffle(array) {

    const len = array.length;

    if (len < 2) {
        return;
    }

    for (let iRand, i = 0; i < len; i++) {
        iRand = Math.floor(Math.random() * len);

        // swap array[i] and array[iRand] (bitwise XOR)
        array[i] ^= array[iRand];
        array[iRand] ^= array[i];
        array[i] ^= array[iRand];
    }
}

export default rand;