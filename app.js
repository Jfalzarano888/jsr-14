/*
Must have one FarmAnimal prototype
FarmAnimal must have name and image instance properties as well as a talk instance method
At least 5 animals, and at least two animals must have subclasses
Use vanilla JS or jQuery to create elements based off your FarmAnimal objects and bind them to the DOM
When you click on animal an alert should show display the sound it makes (i.e. mooo!)
Each animal element should have position styles, such as left and top, so images aren't stacked */

var imgs = ["http://cookdiary.net/wp-content/uploads/images/Cooked_Chicken.jpg", "http://mancunion.com/wp-content/uploads/2013/02/photo-500x375.jpg", "http://swansonnatural.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bacon_plate.png","http://www.fictionalfood.net/wp-content/uploads/2011/07/110724-Roasted-Rabbit1.jpg","http://3.bp.blogspot.com/-I8u2zIqdQ3Q/VSbwwjWFLLI/AAAAAAAADdk/8NeaXe23iJo/s1600/A-chunk-of-beef-2.jpg"];
var chicken = new farmAnimal ("chicken", imgs[0], "bok bok", "fly", 2);
var horse = new farmAnimal ("horse", imgs[1], "neiiiighhhh", "walk or run", 4);
var pig = new farmAnimal ("pig", imgs[2], "oink oink", "scurry", 4);
var bunny = new farmAnimal ("bunny", imgs[3], "can't speak", "hop", 4);
var cow = new farmAnimal ("cow", imgs[4], "mooooooo", "walk mostly", 4, "tan");
var jerseyCow = new jerseyCow ("cow", imgs[4], "moo", "walk", 4, "tan");
var texasLonghorn = new texasLonghorn ("cow", imgs[4], "moo", "walk", 4, "red and white");

function farmAnimal (animalType, img, talk, modeOfMovement, legs) {
  this.animalType = animalType;
  this.img = img;
  this.talk = function() {
  	return alert("The " + name + " says " + talk + "!");
  };
  this.modeOfMovement = modeOfMovement;
  this.legs = legs;
}
function jerseyCow(animalType, img, talk, modeOfMovement, legs, color) {
	farmAnimal.call(this, animalType, img, talk, modeOfMovement, legs, color);
  this.color = color;
}
function texasLonghorn(animalType, img, talk, modeOfMovement, legs, color) {
	farmAnimal.call(this, animalType, img, talk, modeOfMovement, legs, color);
  this.color = color;
  this.specialMessage = function() {
		return alert("The Texas Longhorn says 'Go Longhorns!'");
	};
}

jerseyCow.prototype = Object.create(farmAnimal.prototype);
jerseyCow.prototype.construtor = jerseyCow;
jerseyCow.prototype.origin = "British Channel Island of Jersey";
jerseyCow.prototype.SpecialCharacteristic = "High fertility";

texasLonghorn.prototype = Object.create(farmAnimal.prototype);
texasLonghorn.prototype.construtor = texasLonghorn;
texasLonghorn.prototype.origin = "Texas WOOOOOO";
texasLonghorn.prototype.SpecialCharacteristic = "Two Long Horns";

//texasLonghorn.specialMessage();

//console.log(cow.img);
console.log(horse.img);
