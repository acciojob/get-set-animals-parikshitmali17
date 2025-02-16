//complete this code
class Animal {
	constructor(Species){
		this.Spcies=Species
	}

	get Species(){
		return Species
	}

	makeSound(){
		return console.log(`{The ${this.Species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor (Species){
		super(Species)
	}
	bark(){
		return console.log("woof")
	}
}

class Cat extends Animal {
	constructor (Species){
		super(Species)
	}
	purr(){
		return console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
