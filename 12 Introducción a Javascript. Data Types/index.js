/*EJERCICIOS JS I
INSTRUCCIONES: 
Resuelve cada uno de los ejercicios presentados a continuación y guarda tu resultado en una variable, esa variable colocala en la ultima linea de cada ejercicio al final de la expresión "document.getElementById('result').innerHTML = " para que pueda reflejarse en el HTML*/

//POR EJEMPLO:

let example = "Tarea";
document.getElementById('example').innerHTML = example;

// Todos los resultados tendran la variable example como valor para evitar errores en el código, reemplazala con tus propias variables

/*
1. Presentate en un parrafo.
Guarda en variables la siguiente información: tu nombre, edad, de donde eres y to hobby favorito y presentalos en una oración concatenando strings. Escribe tu código abajo
*/


let nombre = "Edgar Daniel Flores Corona";
let edad = "29";
let from = "Guadalajara";
let hobby = "jugar juegos o ver series";
let data = nombre + " " + edad + " " + from + " " + hobby; 


document.getElementById('result1').innerHTML = data;


/*
2. Convertidor de grados Farenheit a Celcius.
Guarda los grados F en una variable y realiza las operaciones necesarias para convertirlos a C en una variable nueva. Escribe tu código abajo
*/

let fahrenheit = 80;
let celsius = (fahrenheit - 32)/1.8;

document.getElementById('result2').innerHTML = celsius.toFixed(5);


/*
3. Calculador de propina para restaurante
Guarda en variables la cantidad que gastó un cliente en un restaurante, en otra el 10% de propina, suma la cuenta total y concatena en una oración la info: "El cliente gasto: , La propina total es: , El total es: " Escribe tu código abajo
*/

let clienteGasto = 350;
let propina = clienteGasto*0.1;
let total = clienteGasto + propina;

let info = `El cliente gasto: ${clienteGasto} , La propina total es: ${propina}, El total es: ${total}`;
document.getElementById('result3').innerHTML = info;


/*
4. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/
let nombre_de_factura = "Edgar Daniel Flores Corona";
let Total_de_gastos = 850;
let cantidad_de_productos = 12;

let info2 = "Nombre del cliente: " + nombre_de_factura + 
            ", gastos totales a facturar: " + Total_de_gastos + 
            ", Cantidad de productos comprados: " + cantidad_de_productos;
document.getElementById('result4').innerHTML = info2;

/*
5. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/
let largo = 5;
let ancho = 8;
let areaRectangulo = largo * ancho;
let infoRectangulo = "el área de un rectangulo de largo " + largo + " y ancho " + ancho + " es igual a " + areaRectangulo;
document.getElementById('result5').innerHTML = infoRectangulo;


/*
6. Arrays
Crea un array en una variable con los datos de tu elección, tiene que contener 10 y pueden ser de los tipos que elijas. Guarda en una variable la posición 5 y despliegala en el resultado. Escribe tu código abajo
*/

var array = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Tesla"];

let vehiculo = array[4];
document.getElementById('result6').innerHTML = vehiculo;


/*
7. Arrays
Crea un array en una variable con los tus canciones favoritas, despues reemplaza una con un nuevo valor. Guarda una en una variable y despliegala en el resultado. Escribe tu código abajo
*/
let titulosCanciones = [
  "Bohemian Rhapsody",
  "Imagine",
  "Billie Jean",
  "Like a Rolling Stone",
  "Hey Jude",
  "Shape of You",
  "Despacito",
  "Blinding Lights",
  "Rolling in the Deep",
  "Hotel California",
];

titulosCanciones[6] = "It's Time";
document.getElementById('result7').innerHTML = titulosCanciones;

/*
8. Objects
Crea un object que represente alguna cosa del mundo real con sus distintas propiedades, reemplaza el valor de una propiedad por uno nuevo y despliega en el resultado el valor de alguna de las propiedades. Escribe tu código abajo
*/

var musica = {
  cancion1: {
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    album: "A Night at the Opera",
    year: 1975
  },
  cancion2: {
    titulo: "Imagine",
    artista: "John Lennon",
    album: "Imagine",
    year: 1971
  },
  cancion3: {
    titulo: "Billie Jean",
    artista: "Michael Jackson",
    album: "Thriller",
    year: 1982
  },
  cancion4: {
    titulo: "Like a Rolling Stone",
    artista: "Bob Dylan",
    album: "Highway 61 Revisited",
    year: 1965
  },
  cancion5: {
    titulo: "Hey Jude",
    artista: "The Beatles",
    album: "The Beatles",
    year: 1968
  },
  cancion6: {
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    album: "÷",
    year: 2017
  },
  cancion7: {
    titulo: "Despacito",
    artista: "Luis Fonsi ft. Daddy Yankee",
    album: "Vida",
    year: 2017
  },
  cancion8: {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    album: "After Hours",
    year: 2020
  },
  cancion9: {
    titulo: "Rolling in the Deep",
    artista: "Adele",
    album: "21",
    year: 2010
  },
  cancion10: {
    titulo: "Hotel California",
    artista: "Eagles",
    album: "Hotel California",
    year: 1976
  }
};
musica.cancion3 = {
  titulo: "Thriller",
  artista: "Michael Jackson",
  album: "Thriller",
  year: 1982
};


document.getElementById('result8').innerHTML = musica.cancion3.titulo;

/*
9. Objects
Crea un array de objects con elementos que tengan relacion y con sus propiedades, por ejemplo, paises, una wishlist, bandas de musica, etc. Despliega cualquier valor de alguna de las propiedades de los objetos Escribe tu código abajo
*/

let paisesConWishlist = [
  {
    nombre: "Estados Unidos",
    capital: "Washington D.C.",
    poblacion: 331002651,
    wishlistBandas: ["The Beatles", "Led Zeppelin", "Rolling Stones"]
  },
  {
    nombre: "China",
    capital: "Pekín",
    poblacion: 1444216107,
    wishlistBandas: ["Beyond", "Mayday", "Faye Wong"]
  },
  {
    nombre: "India",
    capital: "Nueva Delhi",
    poblacion: 1380004385,
    wishlistBandas: ["A.R. Rahman", "Kishore Kumar", "Lata Mangeshkar"]
  },
  {
    nombre: "Brasil",
    capital: "Brasilia",
    poblacion: 212559417,
    wishlistBandas: ["Anitta", "Sepultura", "Legião Urbana"]
  },
  {
    nombre: "Rusia",
    capital: "Moscú",
    poblacion: 145912025,
    wishlistBandas: ["t.A.T.u.", "Aria", "DDT"]
  }
];
document.getElementById('result9').innerHTML = paisesConWishlist[0].nombre;