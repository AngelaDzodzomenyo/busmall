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
const rightItemPElem = document.getElementById('right_item_p');

let leftItem = null;
let rightItem = null;
let middleItem = null;

let rounds = 25;

const allItems = [];

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
allItems.push(new Item('Banana Cutter', './images/banana.jpg'));
allItems.push(new Item('Tech Toilet Roll Stand', './images/bathroom.jpg'));
allItems.push(new Item('Rainless boots', './images/boots.jpg'));
allItems.push(new Item('All-In-One Breakfast', './images/breakfast.jpg'));
allItems.push(new Item('Meatwad for yo mouf!', './images/bubblegum.jpg'));
allItems.push(new Item('Chair For Your Enemies', './images/chair.jpg'));
allItems.push(new Item('Cosmic Entity Figurine', './images/cthulhu.jpg'));
allItems.push(new Item('"Where is Fiddo?" Doggie Disguise', './images/dog-duck.jpg'));
allItems.push(new Item('Dragonmeant(Tastes Just Like Cow!)', './images/dragon.jpg'));
allItems.push(new Item('Is it a pen or a fork? Novelty Item', './images/pen.jpg'));
allItems.push(new Item('Tidy Dogs Floor Cleaner', './images/pet-sweep.jpg'));
allItems.push(new Item('Scissors Nobody Asked For', './images/scissors.jpg'));
allItems.push(new Item('Sharknado Sleeping Bag', './images/shark.jpg'));
allItems.push(new Item('Train Them to Clean The House Early! Bodymop!', './images/sweep.png'));
allItems.push(new Item('Jedi Sleeping Bag', './images/tauntaun.jpg'));
allItems.push(new Item('The Last Unicorn', './images/unicorn.jpg'));
allItems.push(new Item('Water Recycler', './images/water-can.jpg'));
allItems.push(new Item('Undrinkable Wine Glass', './images/wine-glass.jpg'));
allItems.push(new Item('R2D2 Luggage Bag', './images/bag.jpg'));
// allItems = [];

//put two paramenters: so one is img and the other is <p>. both are reference variables

Item.prototype.renderSingleItem = function(img, p) {
  console.log('here');
  img.src = this.image;
  p.textContent = this.name;
  this.timesShown++;
  this.votes++;
}

//************************************ Global Function ********************************/

// > Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// > make left, middle, right variables
// render the items
// -------------------
function makeAnItem(name, image) {
  allItems.push(new Item(name, image));
}
  // let middleIndex = math.foor(math.random() * Iten.allItems.length);
  // let rightIndex = math.foor(math.random() * Iten.allItems.length);

  
  function renderThreeItems() {
    /// when we refactor consider putting the random equation in a function
    const leftIndex = Math.floor(Math.random() * allItems.length);
    let rightIndex = Math.floor(Math.random() * allItems.length);
    let middleIndex = Math.floor(Math.random() * allItems.length);
    leftItem = allItems[leftIndex];
    rightItem = allItems[rightIndex];
    middleItem = allItems[middleIndex]

    while (rightIndex === leftIndex) {
      rightIndex = Math.floor(Math.random() * allItems.length);
      rightItem = allItems[rightIndex];
    }

    while (middleIndex === leftIndex || middleIndex === rightIndex) {
      middleIndex = Math.floor(Math.random() * allItems.length);
      middleItem = allItems[middleIndex]

      
    }



    leftItem.renderSingleItem(leftItemImgElem, leftItemPElem);
    rightItem.renderSingleItem(rightItemImgElem, rightItemPElem);
    middleItem.renderSingleItem(middleItemImgElem, middleItemPElem);


    // // leftItem = allItems[index];
    // // middleItem = allItems[index];
    // // rightItem = allItems[index];

    // // // if (leftItem === middleItem || leftItem === rightItem || middleItem === rightItem){
    // // //   renderThreeItems();
    // // // }
    // // // leftItem.timesShown++;
    // // // middleItem.timesShown++;
    // // // rightItem.timesShown++;
    // // // leftItem.votes++;
    // // // middleItem.votes++;
    // // // rightItem.votes++;
  
    // // leftItemImgElem.src=leftItem.image
    // // middleItemImgElem.src=middleItem.image
    // // rightItemImgElem.src=rightItem.image

    // while (!rightItem || rightItem === leftItem) {
    //   const rightIndex = Math.floor(Math.random() * allItems.length);
    //   const rightIndex = Math.floor(Math.random() * 10);
    //   rightItem = allItems[rightIndex];
    // }
  
    // while (!centerItem || centerItem === leftItem || centerItem === rightItem) {
    //   const centerIndex = Math.floor(Math.random() * allItems.length);
    //   const centerIndex = Math.floor(Math.random() * allItems.length);
    //   centerItem = allItems[centerIndex];
    // }

    //render goes here
    // leftItem.renderSingleItem(leftItemImgElem, leftItemPElem);
  
    // rightItem.renderSingleItem(rightItemImgElem, rightItemPElem);
    // middleItem.renderSingleItem(middleItemImgElem, middleItemPElem);
  } 
// put chart function here:
// how many votes did each item get?



  function renderChart() {


  const itemData = [];
  const itemLabels = [];

  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    itemData.push(item.votes);
    itemLabels.push(item.name);
  }


    var ctx = document.getElementById('itemChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: itemLabels,
        datasets: [{
            label: '# of Votes',
            data: itemData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }


 








  function renderResults() {
    const resultsElem = document.getElementById('results');
    resultsElem.innerHTML = '';
    for (let item of allItems) {
      const liElem = document.createElement('li');
      liElem.textContent = `${item.name} was shown ${item.timesShown} times and was clicked ${item.votes} times.`;
      resultsElem.appendChild(liElem);  
    }
  }












  renderThreeItems(); 
 
// ----------------------------------------------
// function handleClick(event) {
//   console.log(event.target);
//   const validTargets = [leftItemImgElem, middleItemImgElem, rightItemImgElem]
//   if ( validTargets.includes(event.target)) {
//     rounds--;
//     for (let i = 0; i < allItems.length; i++) {
//       if ( allItems[i].image === event.target.src){
//         allItems[i].votes+=1
//       }
//     }
//     renderThreeItems();
//    }
//    if (rounds === 0) {
//     leftItemImgElem.removeEventListener('click', handleClick)
//     middleItemImgElem.removeEventListener('click', handleClick)
//     rightItemImgElem.removeEventListener('click', handleClick)

//     renderResults();
//    }
// }  


// --------------------

function handleClick(event) {
  console.log(event.target);
  const validTargets = [leftItemImgElem, middleItemImgElem, rightItemImgElem];
  if (validTargets.includes(event.target)) {
    rounds--;
    if (event.target === validTargets[0]) {
      validTargets[0].votes++;
    } else if (event.target === validTargets[1]) {
      validTargets[1].votes++;
    } else {
      validTargets[2].votes++;
    }
    if (rounds === 0) {
      //if they are out of rounds render the results and turn off the listener
      leftItemImgElem.removeEventListener('click', handleClick);
      middleItemImgElem.removeEventListener('click', handleClick);
      rightItemImgElem.removeEventListener('click', handleClick);

      // render results
      alert('Thank you for participating!');
      renderResults();
      renderChart();
    } else {
      renderThreeItems();
      
    }
  }
  // count down rounds if they clicked on a valid target
  // update votes on the correct target
  // if they are out of rounds render the results and turn off the listener
  // else get three new things to vote on
}

//------------------------

//   let middleIndex;
//   while (middleIndex === undefined || middleIndex === leftIndex) {
//     middleIndex = math.foor(math.random * Iten.allItems.length);
//   }
//   let rightIndex;
//   while (rightIndex === undefined || rightIndex === leftIndex) {
//     rightIndex = math.foor(math.random * Iten.allItems.length);
//   }
//   middleItem = allItems[middleIndex];
//   rightItem = allItems[rightIndex];

//   renderThreeItems(leftItem, middleItem, rightItem)
// }

// -----------




// function renderThreeItems(leftItem, middleItem, rightItem) {
//  leftItem.renderSingleItem (leftItemImgElem, leftItemPElem);
//   middleItem.renderSingleItem (middleItemImgElem, middleItemPElem);
//   rightItem.renderSingleItem (rightItemImgElem, rightItemPElem)
// }








// renderThreeItems(leftItem, middleItem, rightItem);





// ----------------------------------------- Listener -------------------------------------------- //

leftItemImgElem.addEventListener('click', handleClick);
middleItemImgElem.addEventListener('click', handleClick);
rightItemImgElem.addEventListener('click', handleClick);



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

