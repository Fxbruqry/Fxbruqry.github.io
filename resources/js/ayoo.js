var biler = ["Volvo", "Saab", "BMW", "Toyota", "Mitsubishi", "Peugeot", "Honda", "Nissan"];
document.getElementById("bil").innerHTML = biler;

function myFunction() {
  biler.sort();
  document.getElementById("bil").innerHTML = biler;
}