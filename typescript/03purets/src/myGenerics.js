"use strict";
exports.__esModule = true;
var arr = [1];
function identityOne(val) {
    return val;
}
identityOne(10);
function identityTwo(val) {
    return val;
}
identityTwo({ brand: "", type: 2 });
function getProducts(products) {
    console.log(products.length);
    return products[2];
}
getProducts([3, 4, 5]);
var allBooks = function (books) {
    return books[1];
};
