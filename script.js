// //complete this code
// class Animal {
// 	constructor(species){
// 		this.spcies=species
// 	}

// 	get species(){
// 		return this._species
// 	}

// 	makeSound(){
// 	console.log(`The ${this.species} makes a sound`)
// 	}
// }

// class Dog extends Animal {
// 	constructor (species){
// 		super(species)
// 	}
// 	bark(){
// 		console.log("woof")
// 	}
// }

// class Cat extends Animal {
// 	constructor (species){
// 		super(species)
// 	}
// 	purr(){
// 		console.log("purr")
// 	}
// }

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;

class Animal {
    constructor(species) {
        this.species = species; // ✅ Corrected property name
    }

    get species() { // ✅ Fixed getter syntax
        return this._species;
    }

    set species(value) { // ✅ Added setter to store species properly
        this._species = value;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`); // ✅ Fixed string formatting
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof"); // ✅ Removed unnecessary `return`
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr"); // ✅ Removed unnecessary `return`
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

