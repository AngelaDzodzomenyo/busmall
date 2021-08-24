'use strict';

console.log('You there?');

//we have a startup that wants to create focus group app for e-commerce
  //needs group members to be able to pick one out of three items displayed at a time on which item they would most likely purchase. 

// Things I need:
      // * how to show items 
      // * how to make objects for the items
      // * how to register which one the memebers of the focus group select/choose/"click-on"
      // * how to keep track of which ones they pick 
      // * how to listen for the click
      // * array of goats
// ============================================================


// **********Global Variable********

const leftItemImgElem = document.getElementById('left_item_img');
const leftItemPElem = document.getElementById('left_item_p');
const middleItemImgElem = document.getElementById('middle_item_img');
const middleItemPElem = document.getElementById('middle_item_p');
const rightItemImgElem = document.getElementById('right_item_img');
const rightItemPElem = document.getElementById('right_item_img');

let leftItem = null;
let rightItem = null;
let middleItem = null;

let rounds = 25


// 1. Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product ---------------> Item
// File path of image
// Times the image has been shown
function Item(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0; 
  //Sara said constructor funciton should only contain things that describe the obkject, so don't ad any other things 
}

Item.allItems = [];

//put two paramenters: so one is img and the other is <p>. both are reference variables

Item.prototype.renderSingleItem = function(img, p) {
  img.src = this.image;
  p.textContent = this.name;
}

//************************************ Global Function ********************************/

// > Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// > make left, middle, right variables
// render the items
function randomItems() {
  let leftIndex = math.foor(math.random() * Iten.allItems.length);
  // let middleIndex = math.foor(math.random() * Iten.allItems.length);
  // let rightIndex = math.foor(math.random() * Iten.allItems.length);

  leftItem = Item.allItems[leftIndex];

  let middleIndex;
  let rightIndex;
  while (leftIndex === undefined || leftIndex === rightIndex || leftIndex === middleIndex) {
    rightIndex = math.foor(math.random() * Iten.allItems.length);
    middleIndex = math.foor(math.random() * Iten.allItems.length);

    
   while (rightIndex === undefined || rightIndex === middleIndex) {
    middleIndex = math.foor(math.random() * Iten.allItems.length);
    }
    middleItem = Item.allItems[middleIndex];
    rightItem = Item.allItems[rightIndex];

    renderThreeItems(leftItem, middleItem, rightItem);
  }
  
//   let middleIndex;
//   while (middleIndex === undefined || middleIndex === leftIndex) {
//     middleIndex = math.foor(math.random * Iten.allItems.length);
//   }
//   let rightIndex;
//   while (rightIndex === undefined || rightIndex === leftIndex) {
//     rightIndex = math.foor(math.random * Iten.allItems.length);
//   }
//   middleItem = Item.allItems[middleIndex];
//   rightItem = Item.allItems[rightIndex];

//   renderThreeItems(leftItem, middleItem, rightItem)
// }
}



function renderThreeItems(leftItem, middleItem, rightItem) {
 leftItem.renderSingleItem (leftItemImgElem, leftItemPElem);
  middleItem.renderSingleItem (middleItemImgElem, middleItemPElem);
  rightItem.renderSingleItem (rightItemImgElem, rightItemPElem)
}





Item.allItems.push(new Item('R2D2 Luggage Bag', './images/bag.jpg'));
Item.allItems.push(new Item('Banana Cutter', './images/banana.jpg'));
Item.allItems.push(new Item('Tech Toilet Roll Stand', './images/bathroom.jpg'));
Item.allItems.push(new Item('Yellow Rainboots', './images/boots.jpg'));
Item.allItems.push(new Item('All-In-One Breakfast', './images/breakfast.jpg'));
Item.allItems.push(new Item('Meatwad for yo mouf!', './images/bubblegum.jpg'));
Item.allItems.push(new Item('Chair For Your Enemies', './images/chair.jpg'));
Item.allItems.push(new Item('Cosmic Entity Figurine', './images/cthulhu.jpg'));
Item.allItems.push(new Item('"Where is Fiddo?" Doggie Disguise', './images/dog-duck.jpg'));
Item.allItems.push(new Item('Dragonmeant(Tastes Just Like Cow!)', './images/dragon.jpg'));
Item.allItems.push(new Item('Is it a pen or a fork? Novelty Item', './images/pen.jpg'));
Item.allItems.push(new Item('Tidy Dogs Floor Cleaner', './images/pet-sweep.jpg'));
Item.allItems.push(new Item('Scissors Nobody Asked For', './images/scissors.jpg'));
Item.allItems.push(new Item('Sharknado Sleeping Bag', './images/shark.jpg'));
Item.allItems.push(new Item('Train Them to Clean The House Early! Bodymop!', './images/sweep.jpg'));
Item.allItems.push(new Item('Jedi Sleeping Bag', './images/tauntaun.jpg'));
Item.allItems.push(new Item('The Last Unicorn', './images/unicorn.jpg'));
Item.allItems.push(new Item('Water Recycler', './images/water-can.jpg'));
Item.allItems.push(new Item('Undrinkable Wine Glass', './images/wine-glass.jpg'));


// renderThreeItems(leftItem, middleItem, rightItem);

randomItems();
// > For each of the three images, increment its property of times it has been shown by one.


// > Attach anevent listener to the section of the HTML page where the images are going to be displayed.


// > Once the users ‘clicks’ a product, generate three new products for the user to pick from. 

// ---------------------------------------------------------------------------
// 2. As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.

// > In the constructor function define a property to hold the number of times a product has been clicked.

// > After every selection by the viewer, update the newly added property to reflect if it was clicked.

// 3. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.

// > By default, the user should be presented with 25 rounds of voting before ending the session.

// > Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

// -------------------------------------------------------------------------------
// 4. As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

// > Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// > After voting rounds have been completed, remove the event listeners on the product.

// > Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// **NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.
