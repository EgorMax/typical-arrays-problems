function isArrayValid(array) {
    if (!array||!array.length) { return false }
    return true
}

exports.min = function min (array) {
  if (array === undefined ||  array === null || array.length === 0) {return 0;}
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array === undefined ||  array === null || array.length === 0) {return 0;}
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (isArrayValid) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const preResult = (array.reduce(reducer());
        return preResult / array.length;
    } else {return 0};
}
