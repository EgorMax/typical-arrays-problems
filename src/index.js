function isArrayValid(array) {
    if (!array||!array.length) { return false }
    return true
}

exports.min = function min (array) {
}
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
    if (isArrayValid) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const preResult = (array.reduce(reducer());
        return preResult / array.length;
    } else {return 0};
}
