

//keday electronics
/* buenos dias  */
alert("Soy el primer script JS.")

generica = 10;


function suma() 
{ 
var a = parseFloat(document.getElementById('num1').value); 
var b = parseFloat(document.getElementById('num2').value); 
document.getElementById('resultado').value = a + b; 
var resul = par
seFloat(document.getElementById('resultado').value);  
alert( "El primer numero es: " + a + "\nEl segundo numero es: " + 
b + "\nLa suma de los dos es: " + resul ) 
}
function f01()
{
var interna = 20;
alert('valor de interna = ' + interna + 'valor de generica = ' + generica);
}
function arrayf(){
    var mivector = new Array(); 
    mivector = ['coche','moto','avion'];   
    mivector[3] = 'amarillo';
    mivector[4] = 'verde';
    mivector[5] = 'azul';
    mivector[6] = 'rojo';
    var matriz = new Array();
    var fila1= new Array();
    fila1=[1,2,3]
    matriz=[[fila1],[2,1,3],[1,3,2]]
    matriz.forEach(function (elemento,índice,array){
        console.log(elemento, índice);
     })
    mivector.push('barco');
    //vemos el resultado en la consola
    console.log(mivector);
    //mivector.pop();
    //mivector.shift();
    mivector.shift();
    /*
    unshift: Nos permite agregar un elemento al inicio del vector.
    mivector.unshift('triciclo');
    indexOf: Devuelve el índice de un elemento dentro de un vector. Si el elemento buscado no existe nos devolverá -1.
    mivector.indexOf('moto'); //devuelve 1 (los índices de vectores empiezan en 0)
    splice: Nos permite eliminar el elemento que deseemos indicando el índice del mismo y la cantidad de elementos a eliminar en el segundo parámetro.
    mivector.splice(1,1); //borrara el elemento moto
    */
}
function f02(){
    var mivector = ["coche","moto","avión"];
    console.log("vector original"+mivector);
    mivector.push("barco");
    mivector.unshift("triciclo");
    console.log("vector con dos elementos más"+mivector);
    mivector.splice(mivector.indexOf("moto"),1);
    mivector.forEach(function (elemento,índice,array){
        console.log(elemento, índice);
        });
    var a = 10;
    var b = 20;
    var suma = eval("a + b");
    console.log(suma);
    var mivar;
    if(mivar === undefined){
        console.log("variable no definicdsa");
    }else{
        console.log("variable definida");
    }
    var cadena = "console.log";
    eval(cadena + '("eval(console.log(eval()))")');
}
function f03(){
    contador = 10;
    contador++;
    contador = 10;
    contador--;
    contador = 10;
    contador = -contador;
    contador = 10;
    contador2 = contador++;
    contador = 10;
    contador2 = ++contador;
    if (3 > 4) {
        console.log("f03.1()")   
    } else if (4 > 2){
        console.log("f03.2()")   
    } else if (8 == 8){
        console.log("f03.3()")   
    }else{
        console.log("f03.4()")
    }
    switch (document.getElementById('campo1').value) {
        case "str1":
            alert('La salud y los negocios no son lo tuyo esta semana');
            break;
        case "str2":
            alert('En el ámbito laboral aparecerá una oportunidad difícil de rechazar');
            break;
        case "str3":
            alert('Cuídate un poco más, o enfermarás este invierno');
            break;
        case "str4":
            alert('En lo personal deja que los amigos te aconsejen');
            break;
        case "str5":
            alert('Todo bien… sigue así');
            break;
        case "str6":
            alert('Mucho trabajo, tomate unas vacaciones. Tu salud te lo agradecerá');
            break;
        default:
            console.log("f03() switch successfull");
    }
    console.log("f03()")
    }
function f04(){
    var valorInicial=1;
    var condición="valorInicial<10";
    var incremento="valorInicial++";
    for (valorInicial; eval(condición); eval(incremento)){
        console.log(valorInicial);
    }
    for (i = 1; i < 10; i++){
        console.log(i*i);
    }
    i = 0;
    do {
        i += 1;
        console.log(i*i);
    } while (i < 20);
    i = 100;
    while (i > 20) {
        
        console.log(i*i);
        i -= 1;
    }
    for (i = 1; i < 5; i++){
        if (i == 3){
        break; //cuando i valga 3 saldrá del bucle
        }
        console.log(i + '-');
    }
    i = 0;
    while (i < 5) {
        i++;
        if (i == 3)
            continue;
        console.log(i + 'continue');
    }
    //if abreviado
    var mi_variable = (5 > 6) ? "mayor" : "menor";
    console.log(mi_variable+" if abreviado");
    var opciones= new Array();
    opciones = [1,2,"dasf",3,4,5];
    for (x in opciones){
        console.log(opciones[x])
    }
}




