var a = +prompt("Birnchi raqamni kiriting")    
var b = +prompt("Ikkinchi raqamni kiriting")
var c = +prompt("Uchinchi raqamni kiritin")
if((a > b && c > a) || (a > c && a < b)){
    alert(a + " O'rta raqam shu");
}else if ((a < b && c > b) || (b > c && a > b)) {
    alert(b + " O'rta raqam shu");
}else if((a < c && c < b) || (b < c && a > c)){
    alert(c + " O'rta raqam shu");
}else {
    alert('Nimadir xato')
}