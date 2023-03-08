function add(num) {
    return num + "20";
}
add(10);
function logIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return name + email;
}
logIn("Mack", "mack@gmail.com");
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "My hero is " + hero;
});
function printNumber(n) {
    console.log(n);
    // return n;
}
printNumber(5);
function consoleError(err) {
    throw new Error(err);
}
consoleError("New error");
// export {}
