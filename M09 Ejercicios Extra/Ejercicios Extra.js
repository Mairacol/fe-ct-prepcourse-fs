/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arregloResultante = [];

  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      arregloResultante.push([clave, objeto[clave]]);
    }
  }

  return arregloResultante;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const resultado = {};

   // Iterar sobre el string
   for (let letra of string) {
     // Si la letra no está en el objeto resultado, inicializarla en 1, de lo contrario, aumentar su valor en 1.
     if (!resultado.hasOwnProperty(letra)) {
       resultado[letra] = 1;
     } else {
       resultado[letra]++;
     }
   }
 
   // Ordenar las propiedades alfabéticamente
   const propiedadesOrdenadas = Object.keys(resultado).sort();
 
   // Crear el objeto final ordenando las propiedades
   const objetoOrdenado = {};
   for (let propiedad of propiedadesOrdenadas) {
     objetoOrdenado[propiedad] = resultado[propiedad];
   }
 
   return objetoOrdenado;
 }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = "";
   let minusculas = "";
 
   // Separar letras en mayúscula y minúscula
   for (let letra of string) {
     if (letra === letra.toUpperCase()) {
       mayusculas += letra;
     } else {
       minusculas += letra;
     }
   }
 
   // Concatenar en el orden correcto
   return mayusculas + minusculas;
 }


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabras = frase.split(" ");

   // Invertir cada palabra y unirlas nuevamente
   const fraseInvertida = palabras
     .map(palabra => {
       // Invertir cada palabra utilizando un bucle for
       let palabraInvertida = "";
       for (let i = palabra.length - 1; i >= 0; i--) {
         palabraInvertida += palabra[i];
       }
       return palabraInvertida;
     })
     .join(" ");
 
   return fraseInvertida;
 
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
      const numeroStr = numero.toString();
      
      
      const numeroInvertido = numeroStr.split('').reverse().join('');
      
      if (numeroStr === numeroInvertido) {
        return "Es capicua";
      } else {
        return "No es capicua";
      }
    }
    


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const nuevoString = string.replace(/[abc]/g, '');
  return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
  
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  
  const interseccion = new Set();

  
  for (let elemento of set1) {
    if (set2.has(elemento)) {
      interseccion.add(elemento);
    }
  }

  // Convertir el conjunto de intersección a un arreglo
  const resultado = Array.from(interseccion);

  return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
