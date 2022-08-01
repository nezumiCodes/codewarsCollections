function zero(operation = null) { return (operation === null) ? 0 : operationSet(operation, 0)}
function one(operation = null) { return (operation === null) ? 1 : operationSet(operation, 1)}
function two(operation = null) { return (operation === null) ? 2 : operationSet(operation, 2)}
function three(operation = null) { return (operation === null) ? 3 : operationSet(operation, 3)}
function four(operation = null) { return (operation === null) ? 4 : operationSet(operation, 4)}
function five(operation = null) { return (operation === null) ? 5 : operationSet(operation, 5)}
function six(operation = null) { return (operation === null) ? 6 : operationSet(operation, 6)}
function seven(operation = null) { return (operation === null) ? 7 : operationSet(operation, 7)}
function eight(operation = null) { return (operation === null) ? 8 : operationSet(operation, 8)}
function nine(operation = null) { return (operation === null) ? 9 : operationSet(operation, 9)}

function operationSet(operation, number) { return (operation === null) ? number : operation(number)}
function plus(a) { return function (b) { return b+a } }
function minus(a) { return function (b) { return b-a } }
function times(a) { return function (b) { return b*a } }
function dividedBy(a) { return function (b) { return Math.floor(b/a) } }
