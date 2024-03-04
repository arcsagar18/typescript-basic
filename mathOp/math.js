var mathOp = function (val1, val2, op) {
    switch (op) {
        case 'add':
            return "addtion is = ".concat(val1 + val2);
        case 'sub':
            return (val1 - val2).toString();
        case 'mul':
            var opMul = val1 * val2;
            return opMul + '';
        case 'div':
            return (val1 / val2).toString();
        default:
            return "".concat(val1, " , ").concat(val2, ",  ").concat(op, " - something went wrong");
    }
};
var main = function () {
    var output = mathOp(2, 3, 'add1');
    console.log('output', output);
};
main();
