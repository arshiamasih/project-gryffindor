// //======================== || DATA OBJECT START ||
const cuisineObj = {
  ja: [
      {
        name: "Hama Sushi", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/hama-sushi-los-angeles"
      },
      {
        name: "Miyabi Uni", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/miyabi-uni-torrance"
      }, 
      {
        name: "Kagura", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/kagura-el-segundo-el-segundo"
      },
      {
        name: "Tsujita", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/tsujita-la-artisan-noodle-los-angeles-2"
      },
      {
        name: "Izakaya Hachi", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/izakaya-hachi-torrance"
      },
      ],
  bq: [
      {
        name: "The Park's Finest", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/the-parks-finest-los-angeles?osq=the+parks+finest"
      },
      {
        name: "Spring St Smoke House", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/spring-street-smoke-house-los-angeles-2?osq=barbeque"
      }, 
      {
        name: "Baby Blue's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/baby-blues-bbq-los-angeles-4?osq=barbeque"
      },
      {
        name: "Ray's Texas BBQ", 
        cost: "$", 
        url: "https://www.yelp.com/biz/rays-texas-bbq-huntington-park?osq=barbeque"
      },
      {
        name: "Bludso's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/bludsos-bar-and-que-los-angeles?osq=bludsos"
      },
      ],
  vi: [
      {
        name: "Quan Hy", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/quan-hy-westminster"
      },
      {
        name: "Brodard", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/brodard-restaurant-fountain-valley"
      }, 
      {
        name: "Pho 87", 
        cost: "$", 
        url: "https://www.yelp.com/biz/pho-87-los-angeles?osq=pho+87"
      },
      {
        name: "Little Sister", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/little-sister-los-angeles-3?osq=vietnamese"
      },
      {
        name: "Blossom", 
        cost: "$", 
        url: "https://www.yelp.com/biz/blossom-vietnamese-restaurant-los-angeles-4?osq=vietnamese"
      },
      ],
  th: [
      {
        name: "Manaow", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/manaow-long-beach-2"
      },
      {
        name: "Sticky Rice", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/sticky-rice-echo-park-los-angeles?osq=sticky+rice"
      }, 
      {
        name: "Ruen Pair", 
        cost: "$", 
        url: "https://www.yelp.com/biz/ruen-pair-los-angeles?osq=thai"
      },
      {
        name: "Night + Market", 
        cost: "$$", 
        url: "https://www.yelp.com/search?find_desc=night%20market&find_loc=los%20angeles"
      },
      {
        name: "Sanamluang Cafe", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/sanamluang-cafe-los-angeles-3?osq=thai"
      },
      ],
  ch: [
      {
        name: "Chengdu Taste",
        cost: "$$", 
        url: "https://www.yelp.com/biz/chengdu-taste-alhambra"
      },
      {
        name: "Ji Rong Peking Duck", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/ji-rong-peking-duck-rosemead?osq=duck+chinese"
      }, 
      {
        name: "Newport Seafood", 
        cost: "$$$$", 
        url: "https://www.yelp.com/biz/newport-seafood-restaurant-san-gabriel-4?osq=newport+seafood"
      },
      {
        name: "Yang Chow", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/yang-chow-los-angeles?osq=yang+chow"
      },
      {
        name: "Mama Lu's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/mama-lus-dumpling-house-monterey-park-17"
      },
      ],
  fr: [
      {
        name: "Republique",
        cost: "$$$", 
        url: "https://www.yelp.com/biz/r%C3%A9publique-los-angeles-2?osq=french"
      },
      {
        name: "Perch", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/perch-los-angeles?osq=french"
      }, 
      {
        name: "Little Next Door", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/little-next-door-los-angeles?osq=french"
      },
      {
        name: "Cafe Beaujolais", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/cafe-beaujolais-los-angeles?osq=french"
      },
      {
        name: "Monsieur Marcel", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/monsieur-marcel-los-angeles-5?osq=french"
      },
      ],
  in: [
      {
        name: "Badmaash",
        cost: "$$", 
        url: "https://www.yelp.com/biz/badmaash-downtown-la-los-angeles?osq=indian"
      },
      {
        name: "Biriyani Kabob House", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/biriyani-kabob-house-los-angeles?osq=indian"
      }, 
      {
        name: "Agra Cafe", 
        cost: "$", 
        url: "https://www.yelp.com/biz/agra-cafe-los-angeles-3?osq=indian"
      },
      {
        name: "India's Grill", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/indias-grill-los-angeles?osq=indian"
      },
      {
        name: "Electric Lotus", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/electric-lotus-los-angeles-3?osq=indian"
      },
      ],
  br: [
      {
        name: "Wood Spoon",
        cost: "$$", 
        url: "https://www.yelp.com/biz/wood-spoon-los-angeles?osq=brazilian"
      },
      {
        name: "Brasil Kiss", 
        cost: "$", 
        url: "https://www.yelp.com/biz/brasil-kiss-coffeebar-los-angeles-3?osq=brazilian+kiss"
      }, 
      {
        name: "M Grill", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/m-grill-los-angeles?osq=m+grill"
      },
      {
        name: "Fogo de Chao", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/fogo-de-ch%C3%A3o-brazilian-steakhouse-los-angeles-3?osq=fogo"
      },
      {
        name: "Pampa's Grill", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/pampas-grill-los-angeles?osq=brazilian"
      },
      ],
  na: [
      { 
        name: "The Nest", 
        cost: "$", 
        url: "https://www.yelp.com/biz/the-nest-a-breakfast-joint-bellflower"
      },
      { 
        name: "Tin Roof Bistro", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/tin-roof-bistro-manhattan-beach?osq=restauration"
      },
      { 
        name: "Preaux & Proper", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/preux-and-proper-los-angeles"
      },
      { 
        name: "Animal", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/animal-los-angeles?osq=animal"
      },
      { 
        name: "Majordomo", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/majord%C5%8Dmo-los-angeles?osq=new+american"
      }
      ],       
  ko: [
      { 
        name: "Jong Ro Shul Lung Tang", 
        cost: "$", 
        url: "https://www.yelp.com/biz/jong-ro-shul-lung-tang-garden-grove"
      },
      { 
        name: "T = Fish", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/t-equals-fish-los-angeles"
      },
      { 
        name: "Ahgassi Gopchang", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/ahgassi-gopchang-los-angeles-6"
      },
      { 
        name: "Dan Sung Sa", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/dan-sung-sa-los-angeles?osq=dan+sung+sa"
      },
      { 
        name: "BCD Tofu House", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/bcd-tofu-house-los-angeles-2?osq=bcd+tofu+house"
      }
      ],
  ve: [
      { 
        name: "The Grain Cafe", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/the-grain-cafe-los-angeles"
      },
      { 
        name: "Little Pine", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/little-pine-los-angeles-2?osq=vegan"
      },
      { 
        name: "Beelman's", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/beelmans-los-angeles-4?osq=vegan"
      },
      { 
        name: "Cafe Gratitude", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/cafe-gratitude-larchmont-los-angeles-3?osq=vegan"
      },
      { 
        name: "Flore Vegan", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/flore-vegan-cuisine-los-angeles-2?osq=vegan"
      }
      ],
  mx: [
      { 
        name: "Guisados", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/guisados-dtla-los-angeles-2"
      },
      { 
        name: "Leo's Taco Truck", 
        cost: "$", 
        url: "https://www.yelp.com/biz/leos-tacos-truck-los-angeles?osq=leos+taco+truck"
      },
      { 
        name: "Guelaguetza Restaurante", 
        cost: "$", 
        url: "https://www.yelp.com/biz/guelaguetza-restaurante-los-angeles?osq=mexican"
      },
      { 
        name: "Chichen Itza", 
        cost: "$", 
        url: "https://www.yelp.com/biz/chichen-itza-restaurant-los-angeles-3"
      },
      { 
        name: "Trois Familia", 
        cost: "$", 
        url: "https://www.yelp.com/biz/trois-familia-los-angeles?osq=trois+mec"
      }
      ],
  it: [
      { 
        name: "Foggia", 
        cost: "$", 
        url: "https://www.yelp.com/biz/foggia-italian-market-and-deli-lakewood"
      },
      { 
        name: "Officine Brera", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/officine-brera-los-angeles"
      },
      { 
        name: "Angelini Osteria", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/angelini-osteria-los-angeles?osq=angelini+osteria"
      },
      { 
        name: "Bestia", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/bestia-los-angeles?osq=bestia"
      },
      { 
        name: "Dan Tana's", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/dan-tanas-west-hollywood?osq=dan+tanas"
      }
      ],
  ca: [
      { 
        name: "Uncle John's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/uncle-johns-cafe-los-angeles?osq=uncle+johjns"
      },
      { 
        name: "Little Jewel of New Orleans", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/little-jewel-of-new-orleans-los-angeles-2?osq=cajun"
      },
      { 
        name: "The Little Easy", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/the-little-easy-los-angeles-2?osq=cajun"
      },
      { 
        name: "The Boiling Crab", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/the-boiling-crab-los-angeles?osq=cajun"
      },
      { 
        name: "King of Crabs", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/king-of-crabs-los-angeles?osq=cajun"
      }
      ],
  me: [
      { 
        name: "Papa Cristo's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/papa-cristos-los-angeles-2?osq=greek"
      },
      { 
        name: "Bavel", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/bavel-los-angeles-3?osq=Mediterranean+Food"
      },
      { 
        name: "Spread", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/spread-mediterranean-kitchen-los-angeles?osq=greek"
      },
      { 
        name: "Dune", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/dune-downtown-los-angeles?osq=dune+downtown"
      },
      { 
        name: "Meze", 
        cost: "$$$", 
        url: "https://www.yelp.com/biz/meze-los-angeles-2?osq=greek"
      }
      ],
  si: [
      { 
        name: "Uncle Fung's", 
        cost: "$$", 
        url: "https://www.yelp.com/biz/uncle-fung-borneo-eatery-long-beach"
      },
      {
        name: "Red Chicken",
        cost: "$$",
        url: "https://www.yelp.com/biz/red-chicken-san-gabriel?osq=singaporean"
      },
      {
        name: "Cassia",
        cost: "$$$",
        url: "https://www.yelp.com/biz/cassia-santa-monica?osq=singaporean"
      },
      {
        name: "Litz",
        cost: "$$$",
        url: "https://www.yelp.com/biz/litz-restaurant-monterey-park?osq=singaporean"
      },
      {
        name: "Borneo",
        cost: "$$$",
        url: "https://www.yelp.com/biz/borneo-kalimantan-cuisine-alhambra-2?osq=singaporena"
      }
      ]
}
//======================== || DATA OBJECT END ||

function getValue () {
  // User Name Input - String
  const name1 = document.querySelector('#name1').value; 
  const name2 = document.querySelector('#name2').value; 
  // User Last Eaten Input - cuisineObject Key
  const last1 = document.querySelector('#last1').value; 
  const last2 = document.querySelector('#last2').value; 
  // User Cuisine Preference Input - cuisineObject Key
  let pref1 = document.querySelector('#pref1').value; 
  let pref2 = document.querySelector('#pref2').value; 
  // User Cost Input - String
  const cost1 = document.querySelector('#cost1').value; 
  const cost2 = document.querySelector('#cost2').value; 
  // Array of cuisines
  let cuisineArray = ['ja', 'bq', 'vi', 'th', 'ch', 'fr', 'in', 'br', 'na', 'ko', 've', 'mx', 'it', 'ca', 'me', 'si'];
  
  // Generates random number constrained by array length.
  const generateRandomNum = array => Math.floor(Math.random() * array.length);
  // Generates random index according to cuisineArray length
  let nadaIndex = generateRandomNum(cuisineArray);
  let nadaChoice = cuisineArray[nadaIndex];
  if (pref1 === 'nada') { pref1 = nadaChoice };
  if (pref2 === 'nada') { pref2 = nadaChoice };

  // ACCESS CUISINE ARRAYS AND CONCAT

  let user1Array = cuisineObj[pref1];
  let user2Array = cuisineObj[pref2];

  let combinedArray = user1Array.concat(user2Array);

  // FILTER CONCATENATED ARRAY BY COST
  let cheapestCost;
  
  if (cost1 <= cost2) { 
    cheapestCost = cost1; 
  } else {
    cheapestCost = cost2;
  };

  let filteredArray = combinedArray.filter((restObj) => {
    return restObj.cost.length <= cheapestCost.length;
  })

  // PICK RANDOM OUT OF FINAL ARRAY
  let finalPick = filteredArray[generateRandomNum(filteredArray)];

  // Captures restaurant URL - String
  let yelpURL = finalPick.url
  // Captures restaurant name - String
  let restaurantName = finalPick.name
  // HTML element that displays final output
  const total = document.querySelector('#result'); 
  // Sets HTML element text and URL to output
  const outputData = (name, url) => {
    total.setAttribute("href", url)
    total.innerText = name;
  }

  // TEST LOGS
  console.log("First User --> ", name1);
  console.log("Second User --> ", name2);
  console.log("First History --> ", last1);
  console.log("Second History --> ", last2);
  console.log("First Preference --> ", pref1);
  console.log("Second Preference --> ", pref2);
  console.log("First Budget --> ", cost1);
  console.log("Second Budget --> ", cost2);
  console.log("Ambivalent Choice  --> ", nadaChoice);
  console.log("All Options --> ", combinedArray);
  console.log("Lowest Budget --> ", cheapestCost);
  console.log("Filtered Options --> ", filteredArray);
  console.log("Final Restaurant Object --> ", finalPick);

  outputData(restaurantName, yelpURL);
}


/*

Access pref1 and concatenate to pref2. If either are equal to last1 or last2, omit from result. 
Array of restaurantObjects and two cost variables. Filter for lower of two costs into choiceArray.
Take filtered choiceArray, pick random restaurantObject using index.
Assign restaurantObject name key and URL key to variables: restaurantName & yelpURL

*/