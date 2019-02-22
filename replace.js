/**
 * @param {string} [string='']
 * @param {RegExp|string} pattern
 * @param {Function|string} replacement
 * @returns {string}
 * @example
 * replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
    var args = arguments;
    var string = toString(args[0]);

    return args.length < 3 ? string : string.replace(args[1], args[2]);
}