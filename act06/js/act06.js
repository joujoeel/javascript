//TASCA 1
function task1() {
var num1 = prompt("Primer num","");
var num2 = prompt("Segon num","");

  if (num1>num2) {
    document.write("Num " + num1 + num2 + " es mes petit")
}
  else if (num2>num1) {
    document.write("Num " + numero2 + " es mes gran i el " + numero1 + " es mes petit")
  }
  else if (numero1==numero2) {
    document.write("Dos num " + numero1 + " i " + numero2 + " son iguals!")

  }
}

//TASCA 2

function task2() {
  var taula = prompt("Quina taula de multiplicar vols?","");
  document.write("<ul>")
  for(i = 1;i<=10;i++){
    document.write("<li>")
    document.write(taula + "x " + i + "= " + taula * i)
    document.write("</li>")

    }
}

//TASCA 3

function task3(){
  var nom = prompt("Nom?","");
  var cognom = prompt("Cognom","");
  var edat = prompt("Edat?","");
  var email = prompt("Correu electronic?","");

  document.write("Hola " + nom + " " + cognom + email + " Moltes gràcies.")
}
