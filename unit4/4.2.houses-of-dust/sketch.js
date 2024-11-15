let quatrain = '';
let grammar; 

///I used the code you walked us through in class as a foundation, and I also referenced Alison Knowles' "House of Dust"
// source code to gather the different phrases she used. Then, I applied what we learned in class to create variations
// for the "send" and "family" sections.

function setup() {
  createCanvas(800, 800);
  frameRate(.1); 

  grammar = tracery.createGrammar({
    "material": [
      "STONE",
      "GLASS",
      "CLAY",
      "COTTON",
      "RUBBER",
      "METAL",
      "FABRIC",
      "ICE",
      "PLASTIC",
      "MARBLE",
      'PAPER'
    ],

    'place': [ 
      "IN A GREEN, MOSSY TERRAIN", 
      "IN AN OVERPOPULATED AREA", 
      "BY THE SEA", 
      "BY AN ABANDONED LAKE", 
      "IN A DESERT", 
      "IN A DESERTED FACTORY", 
      "IN DENSE WOODS", 
      "IN JAPAN", 
      "AMONG SMALL HILLS", 
      "IN SOUTHERN FRANCE", 
      "AMONG HIGH MOUNTAINS", 
      "ON AN ISLAND", 
      "ON OPEN GROUND", 
      "IN A COLD, WINDY CLIMATE", 
      "IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN", 
      "IN A DESERTED AIRPORT", 
      "IN A HOT CLIMATE", 
      "INSIDE A MOUNTAIN", 
      "ON THE SEA", 
      "IN MICHIGAN", 
      "IN HEAVY JUNGLE UNDERGROWTH", 
      "BY A RIVER", 
      "AMONG OTHER HOUSES", 
      "IN A DESERTED CHURCH", 
      "IN A METROPOLIS", 
      "UNDERWATER"
    ],
    
    'family': [
      "MOM", 
      "DAD", 
      "BROTHER", 
      "SISTER",
      "DOG",
      "CAT",
      "ROCK",
      "RAT",    ],

    'inhabitants' : [
      "PEOPLE WHO SLEEP VERY LITTLE", 
      "VEGETARIANS", 
      "HORSES AND BIRDS", 
      "PEOPLE SPEAKING MANY LANGUAGES WEARING LITTLE OR NO CLOTHING", 
      "ALL RACES OF MEN REPRESENTED WEARING PREDOMINANTLY RED CLOTHING", 
      "CHILDREN AND OLD PEOPLE", 
      "VARIOUS BIRDS AND FISH", 
      "LOVERS", 
      "PEOPLE WHO ENJOY EATING TOGETHER", 
      "PEOPLE WHO EAT A GREAT DEAL", 
      "COLLECTORS OF ALL TYPES", 
      "FRIENDS AND ENEMIES", 
      "PEOPLE WHO SLEEP ALMOST ALL THE TIME", 
      "VERY TALL PEOPLE", 
      "AMERICAN INDIANS", 
      "LITTLE BOYS", 
      "PEOPLE FROM MANY WALKS OF LIFE", 
      "FRIENDS", 
      "FRENCH AND GERMAN SPEAKING PEOPLE", 
      "FISHERMEN AND FAMILIES", 
      "PEOPLE WHO LOVE TO READ"
    ],

    'SEND' : 
    [
      "THE POLICE",
      "TRUMP",
      "DORA",
      "BIDEN",
      "DR.WHALEN", 
      "PRESIDENT TROY PAINO"

    ],

    "origin": "A HOUSE OF #material# #place# MY #family# GOT KIDNAPPED BY #inhabitants#!!! SEND #SEND#!!"  
  });
}

function draw() {
  background(220);

  quatrain = grammar.flatten("#origin#");
  
  textFont('Impact'); 
  textSize(40);
  textWrap(WORD); 
  text(quatrain, 50, 70, width - 100, height - 100); 
}
