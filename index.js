function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function namedfunction() {}
}
function returnsAnAnonymousFunction() {
    return function () {}
}
