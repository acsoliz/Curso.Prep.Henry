// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
	//{a:e, e:a}
	// Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
	// un par clave-valor en forma de matriz.
	//Ejemplo:
	/*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
	//Escribe tu código aquí
}

function numberOfCharacters(string) {
	//La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
	//en formato par clave-valor.
	//Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
	//Escribe tu código aquí
}

function capToFront(s) {
	//Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
	//al principio de la palabra.
	//Ejemplo: soyHENRY -> HENRYsoy
	//Escribe tu código aquí
}

function asAmirror(str) {
	//La función recibe una frase.
	//Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
	//pero con cada una de sus palabras invertidas, como si fuera un espejo.
	//Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
	//Escribe tu código aquí
	// var array = str.split(' ').map(e=> (
	// 	 e.split('').reverse().join ('')
	// )).join(' ');
	let array = str.split(' ');
	let nuevoArray = [];

	array.forEach(function(element) {
		let stringReversed = '';
		for (var i = element.length - 1; i >= 0; i--) {
			stringReversed += element[i];
		}
		nuevoArray.push(stringReversed);
	});
	return nuevoArray.join(' ');
}

function capicua(numero) {
	//   100  === 001    101 === 101
	//Escribe una función, la cual recibe un número y determina si es o no capicúa.
	//La misma debe retornar: "Es capicua" si el número se número que se lee igual de
	//izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
	//Escribe tu código aquí
	var string = numero.toString(); // '101'  101
	var reversed = string.split('').reverse();
	if (numero == reversed.join('')) {
		return 'Es capicua';
	} else {
		return 'No es capicua';
	}
}

function deleteAbc(cadena) {
	//Define una función que elimine las letras "a", "b" y "c" de la cadena dada
	//y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
	//Escribe tu código aquí
	var nuevaCadena = cadena.replace('a', '').replace('b', '').replace('c', '');
	return nuevaCadena;
}

function sortArray(arr) {
	// [stin1, tring2, .....]
	//La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
	//Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
	//Escribe tu código aquí
	var ordenados = arr.sort(function(a, b) {
		return a.length - b.length;
	});

	return ordenados;
}

function buscoInterseccion(arreglo1, arreglo2) {
	//Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
	//retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
	//Si no tienen elementos en común, retornar un arreglo vacío.
	//Aclaración: los arreglos no necesariamente tienen la misma longitud
	//Escribe tu código aquí

	var nuevoArray = [];

	for (var j = 0; j < arreglo1.length; j++) {  // [4,2,3] 
		for (var i = 0; i < arreglo2.length; i++) { //[1,3,4]
			if (arreglo1[j] === arreglo2[i]) {  // 3 === 4
				nuevoArray.push(arreglo1[j]);
			}
		}
	}
	return nuevoArray; // [4, 3]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	deObjetoAmatriz,
	numberOfCharacters,
	capToFront,
	asAmirror,
	capicua,
	deleteAbc,
	sortArray,
	buscoInterseccion
};
