


var string = "Hello I'm Ivelina. I am from Bulgaria. I am learning JavaScript.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 90);
})();



