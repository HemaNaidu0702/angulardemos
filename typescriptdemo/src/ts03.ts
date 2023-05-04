//this is how object is created
// '?' will make is optional property
const car: {make: string, model:string, year?:number} = {
    make: "toyota",
    model:"Innova",
    year:2023,
};

console.log(car);

const house = {
    type: "duplex",
};


interface Interfacecar {
    make: string;
    model: string;
    year: number;
    colour: string;
}

const newcar: Interfacecar = {
    make: "Honda",
    model: "City",
    year: 2020,
    colour: "black",
};

console.log(newcar);

interface ISafeCar extends Interfacecar {
   airbags: number;
}

const mysafecar: ISafeCar = {
    make: "Honda",
    model: "City",
    year: 2020,
    colour: "black",
    airbags: 4,
};
console.log(mysafecar);