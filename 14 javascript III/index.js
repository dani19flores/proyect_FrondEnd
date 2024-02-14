console.log("inicio");

const message = () => {
    console.log("tardé 5s");
}

//ejecuta una vez con retraso
setTimeout(() => {
    message();
    console.log("final");
}, 5000);
//ejecuta un periodo de tiempo
const intervalTime = setInterval(() => {
    console.log("cada 2 segundos");
    const date = Date();
    const time = date.toLocalTimeString();

    console.log(time);
},2000);

setTimeout(() => {
    clearInterval(intervalTime);
}, 5000);

//SCOPE

//Scope Global
var x = 23;

function y(){
    console.log(x);
}

y();
console.log(x);


//scope de bloque
const boo = true;

if(true){
    const text = "hello world";
    console.log(text);//este si lo permite
}

console.log(text);//esta variable no se puede ver en este punto porque solo puede estar en el bloque


//Scope de bloque con var
if(boo){
    var num = 14;
    console.log(num);
}
console.log(num);

//scope de funciones
function sayHello(){
    var say = "Hello, user!";
    console.log(say);
}

sayHello();
console.log(say);//en función solo puede ser accesible la variable peor fuera de ella ninguna puede serlo

function x(arg){
    console.log(arg);
}

x("hello");

const arrow = (arg) =>{
    console.log(arg);
}

const name3 = (n) => { return  n };
const f = name3("world");

const l = nameTwo("return implicito");


const sum = (x,y) => x+y;
const e = sum(10,5);

console.log(f);
console.log(l);

arrow("hola");

//Default parameters
const presentacion = (name = "generico", lastName = "apellido") => {
    console.log("Hola mi nombre es " + name + lastName);
}

presentacion("Josue ");
//Miltile string
const string = `hola mundo
asd
asd
asd
asd`

//Template literals
const txt = "Mundo";
const str = `Hola ${text}`;
const antes = "Hola" + " " + txt;

//Destructuring

const animals = ["perro", "gato", "ave"];
const animals1 = animals[0];
const animals2 = animals[1];

const [an1, an2, an3 ] = animals;

const obj = {
    name: "Dog",
    species : "Perro",
}

const {name, species} = obj;

console.log(an1);

//spread operator

const arr = [1,2,3,4,5];
const arr2 = [...arr,"q","d",false]
const newArr = [...arr2, true];

const obj2 = {...obj, age: 23, country: "Mexico",};

console.log(obj2);

//Rest operator

const loopArr = () => {
    for( val of ex) {
        console.log(val);
    }
}

loopArr("vitod", "luis", "samantha", "karla");



class Dog{
    constructor (name, color, weight, size) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.size;
    }

    bark(){
        console.log("Guaf guaf!!!!!");
    }

    addColor(newColor){
        this.color.push(newColor);
    }

    showColor(){
        console.log(this.color);
    }

    changeName(newName){
        this.name = newName;
    }
}

const dogOne = new Dog("Doggy","Black","15k","Medium");
const dogTwo = new Dog("Leila",["Black","Brown","Honey"],"20k","Large");
console.log(dogOne);
console.log(dogTwo.name);

dogTwo.addColor("White");
dogTwo.showColor();
dogTwo.changeName("LEA");

console.log(dogTwo);



//local storage, se mantiene hasta que el usuario lo elimina

localStorage.setItem("user","user987");//agrega un dato en este caso es key = user y el otro es el dato
localStorage.removeItem("user"); //para borrar


//session storage, solo durante la pestaña del navegador sea cerrada
sessionStorage.setItem("user","user987");
sessionStorage.getItem("user");

//Cookies 




