// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
	// Devuelve el primer elemento de un  array (pasado por parametro)
	// Tu código:
}

function devolverUltimoElemento(array) {
	// Devuelve el último elemento de un array
	// Tu código:
}

function obtenerLargoDelArray(array) {
	// Devuelve el largo de un array
	// Tu código:
}

function incrementarPorUno(array) {
	// "array" debe ser una matriz de enteros (int/integers)
	// Aumenta cada entero por 1
	// y devuelve el array
	// Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
	// Añade el "elemento" al final del array
	// y devuelve el array
	// Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
	// Añade el "elemento" al comienzo del array
	// y devuelve el array
	// Pista: usa el método `.unshift`
	// Tu código:
}

function dePalabrasAFrase(palabras) {
	// "palabras" es un array de strings/cadenas
	// Devuelve un string donde todas las palabras estén concatenadas
	// con espacios entre cada palabra
	// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
	// Tu código:
}

function arrayContiene(array, elemento) {
	// Comprueba si el elemento existe dentro de "array"
	// Devuelve "true" si está, o "false" si no está
	// Tu código:
}

function agregarNumeros(numeros) {
	// "numeros" debe ser un arreglo de enteros (int/integers)
	// Suma todos los enteros y devuelve el valor
	// Tu código:
}

function promedioResultadosTest(resultadosTest) {
	// "resultadosTest" debe ser una matriz de enteros (int/integers)
	// Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
	// Tu código:
}

function numeroMasGrande(numeros) {
	// "numeros" debe ser una matriz de enteros (int/integers)
	// Devuelve el número más grande
	// Tu código:
}

function multiplicarArgumentos() {
	// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
	// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
	// Escribe tu código aquí:
}

function cuentoElementos(arreglo) {
	//Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
	//Escribe tu código aquí
}

function diaDeLaSemana(numeroDeDia) {
	//Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
	//Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
	//si el día corresponde a Sábado o Domingo y “Es dia Laboral ” ' " en caso contrario.
	//Escribe tu código aquí

	if (numeroDeDia === 1 || numeroDeDia === 7) {
		return 'Es fin de semana';
	} else {
		return 'Es dia Laboral';
	}
}

function empiezaConNueve(n) {
	// '9123'   12443
	//Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
	//inicia con 9 y false en otro caso.
	//Escribe tu código aquí
	var string = n.toString(); // '934'
	if (string[0] == 9) {
		return true;
	}
	return false;
}

function todosIguales(arreglo) {
	// [5,5]
	//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
	//retornar true, caso contrario retornar false.
	//Escribe tu código aquí
	// 5
	var aux = arreglo[0];
	for (let i = 1; i < arreglo.length; i++) {
		if (aux !== arreglo[i]) {
			return false;
		}
	}
	return true;
}
//   0      1       2       3
function mesesDelAño(array) {
	// [enero, febrero, marzo, diciembre]
	//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
	// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
	//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
	// Tu código:

	var aux = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
			aux.push(array[i]);
		}
	}
	//["Enero", "Marzo"]
	if (aux.length !== 3) {
		return 'No se encontraron los meses pedidos';
	}
	return aux;
}

function mayorACien(array) {
	// [22, 12, 11, 200, 100]  ===>  [200]
	//La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
	//valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
	// Tu código:
	var aux = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 100) {
			aux.push(array[i]);
		}
	}
	return aux;
}

function breakStatement(numero) {
	// 8 + 2 =>[10]  10+2=>[10,12]
	//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
	//Guardar cada nuevo valor en un array.
	//Devolver el array
	//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
	//devolver: "Se interrumpió la ejecución"
	//Pista: usá el statement 'break'
	// Tu código:

	var array = [];
	var suma = numero;
	for (let i = 0; i < 10; i++) {
		suma = suma + 2;
    if (suma === i){return"Se interrumpió la ejecución" }
    array.push(suma)
	}
  return array
}

function continueStatement(numero) { // 50  ====> [52, 54.... ]
	//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
	//Guardar cada nuevo valor en un array.
	//Devolver el array
	//Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
	//Pista: usá el statement 'continue'
	// Tu código:
  var array = [];
	var suma = numero;
	for (let i = 0; i < 10; i++) { // 3, 4
    if (i === 5){continue }
		suma = suma + 2;  // 56
    array.push(suma)   //[52, 54, 56, 58, 62]
	}
  return array

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	devolverPrimerElemento,
	devolverUltimoElemento,
	obtenerLargoDelArray,
	incrementarPorUno,
	agregarItemAlFinalDelArray,
	agregarItemAlComienzoDelArray,
	dePalabrasAFrase,
	arrayContiene,
	agregarNumeros,
	promedioResultadosTest,
	numeroMasGrande,
	multiplicarArgumentos,
	cuentoElementos,
	diaDeLaSemana,
	empiezaConNueve,
	todosIguales,
	mesesDelAño,
	mayorACien,
	breakStatement,
	continueStatement
};
