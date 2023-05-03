function berechneZutaten() {
var mehl = 1000;
var wasser = 650;
var salz = 10;
var hefe = 1;
var n = Number(document.getElementById("pizzaForm").value);

mehl = mehl/4 * n;
wasser = wasser/4 * n;
salz = salz/4 * n;
hefe = hefe/4 * n;

document.getElementById("mehl").innerHTML =  mehl + "g";
document.getElementById("wasser").innerHTML =  wasser + "ml";
document.getElementById("salz").innerHTML =   salz + "g";
document.getElementById("hefe").innerHTML =   hefe + "g";
}