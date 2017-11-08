/*
Must have one FarmAnimal prototype
FarmAnimal must have name and image instance properties as well as a talk instance method
At least 5 animals, and at least two animals must have subclasses
Use vanilla JS or jQuery to create elements based off your FarmAnimal objects and bind them to the DOM
When you click on animal an alert should show display the sound it makes (i.e. mooo!)
Each animal element should have position styles, such as left and top, so images aren't stacked */

var imgs = [
  "http://cookdiary.net/wp-content/uploads/images/Cooked_Chicken.jpg",
  "http://mancunion.com/wp-content/uploads/2013/02/photo-500x375.jpg",
  "http://swansonnatural.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bacon_plate.png",
  "http://www.fictionalfood.net/wp-content/uploads/2011/07/110724-Roasted-Rabbit1.jpg",
  "http://3.bp.blogspot.com/-I8u2zIqdQ3Q/VSbwwjWFLLI/AAAAAAAADdk/8NeaXe23iJo/s1600/A-chunk-of-beef-2.jpg"
];

function FarmAnimal(animalType, img, message, modeOfMovement, legs) {
  this.animalType = animalType;
  this.img = img;
  this.message = message;
  this.talk = function() {
    return alert("The " + animalType + " says " + message + "!");
  };
  this.modeOfMovement = modeOfMovement;
  this.legs = legs;
}

function JerseyCow(animalType, img, message, modeOfMovement, legs, color) {
  FarmAnimal.call(this, animalType, img, message, modeOfMovement, legs);
  this.color = color;
}

function TexasLonghorn(animalType, img, message, modeOfMovement, legs, color) {
  FarmAnimal.call(this, animalType, img, message, modeOfMovement, legs);
  this.color = color;
  this.specialMessage = function() {
    return alert("The Texas Longhorn says 'Go Longhorns!'");
  };
}

JerseyCow.prototype = Object.create(FarmAnimal.prototype);
JerseyCow.prototype.construtor = JerseyCow;

JerseyCow.prototype.origin = "British Channel Island of Jersey";
JerseyCow.prototype.SpecialCharacteristic = "High fertility";

TexasLonghorn.prototype = Object.create(FarmAnimal.prototype);
TexasLonghorn.prototype.construtor = TexasLonghorn;

TexasLonghorn.prototype.origin = "Texas WOOOOOO";
TexasLonghorn.prototype.SpecialCharacteristic = "Two Long Horns";

//texasLonghorn.specialMessage();
var chicken = new FarmAnimal("chicken", imgs[0], "bok bok", "fly", 2);
var horse = new FarmAnimal("horse", imgs[1], "neiiiighhhh", "walk or run", 4);
var pig = new FarmAnimal("pig", imgs[2], "oink oink", "scurry", 4);
var bunny = new FarmAnimal("bunny", imgs[3], "nothing", "hop", 4);
var cow = new FarmAnimal("cow", imgs[4], "mooooooo", "walk mostly", 4);
var NjCow = new JerseyCow("cow", imgs[4], "moo", "walk", 4, "tan");
//var TxCow = new FarmAnimal("cow", imgs[4], "moo", "walk", 4, "red and white");

console.log(NjCow);

var allAnimals = [chicken, horse, pig, bunny, cow];

function render(arr) {
  return arr
    .map(function(animal) {
      return `
        <div class="animal">
          <figure class="${animal.animalType}">
            <img id=${animal.animalType} height=100 width=100  src="${animal.img}"/>
            <figcaption>${animal.animalType}</figcaption>
          </figure>
        </div>
      `;
    })
    .join("");
}

// console.log(render(allAnimals));

$(".animal-container").append(render(allAnimals));

$(".animal").click(function() {

  let imgs = $(this)
    .find("img")
    .attr("Id");
  let response = "";
  switch (imgs) {
    case "chicken":
      response = chicken.talk();
      break;
    case "horse":
      response = horse.talk();
      break;
    case "pig":
      response = pig.talk();
      break;
    case "cow":
      response = cow.talk();
      break;
    case "bunny":
      response = bunny.talk();
      break;
  }
  return true;
});
