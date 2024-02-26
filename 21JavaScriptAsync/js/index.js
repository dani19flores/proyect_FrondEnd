//High Order Function -- HOC
const createUser = (user,callback) => {
    const userCreated = `User ${user} was created`;
    console.log("Creando un Usuario...");
    callback(userCreated);
}
//Callback Function
const logMsg = (str) => {
    console.log(str);
}

createUser("Juan",logMsg);

//Callback Hell
let buyIngrendients = (persona,next) => {
    console.log(`${persona} esta comprando los ingrendientes`);
    next("Cocinar");
}

let cook = (food, next) => {
    console.log(`Cocinando ${food}`);
    next("Hamburgesa");
}

let serve = (cookedFood,next) => {
    console.log(`Sirviendo nuestra ${cookedFood}`);
    next("platos");
}

let washDishes = (disesh) => {
    console.log(`lavando ${disesh}`);
}
//callback en cascada
buyIngrendients("Carla",(meat) => {
    cook(meat, (burger) =>{
        serve(burger, (disesh) => {
            washDishes(disesh);
        });
    });
});


//promesas = promise
const onThePary = (juanCame) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(juanCame)
            {
                resolve("Beer");
            } else {
                reject("No beer :(")
            }
        },2000)
    })
}

const partyStarted = (started) =>{
    return new Promise((resolve,reject)=>{
        if(started){
            console.log("Diversión");
        } else {
            console.log("Aun no!");
        }
    })
}

onThePary(true).then((value) =>{
    console.log(`Tenemos ${value}`);
    return partyStarted(true);
}).then(value =>{
    console.log(value);
}).catch((error) => {
    console.warn({error});
});

const apiExample = () => {
    return new Promise((resolve,reject) =>{
        if(value === "animal"){
            resolve("Dog");
        } else {
            reject("El valor no es valido")
        }
    });
}


apiExample("animal").then(val =>{
    console.log(val);
    const value = val;
}).catch((error) => {
    console.warn({error});
});


//Async/Await
//syntatic Sugar
const asyncExample = async () =>{
    try{
        const response = await apiExample("animal");
        const res = await partyStarted(true);
        console.log(`${res} con ${response}`);
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
    }
}

asyncExample().then(val =>{
    console.log(val);
});



