var num1 = +prompt("Birinchi raqamni kiriting")
var num2 = +prompt("Ikkinch raqamni kiriting")
var num3 = +prompt("Uchunchi raqamni kiriting")
a = num1
b = num2
c = num3
if (a < b < c){
    alert( num2 + " O'rta raqam shu !")
}else if(b < a < c){
    alert( num1 + " O'rta raqam shu !")
}else if(b < c < a){
    alert( num3 + " O'rta raqam shu !")
}else{
    alert("nimadir xato")
}