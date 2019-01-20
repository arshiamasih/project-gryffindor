function generateRandomNum(array) {
  return Math.floor(Math.random() * array.length)
}

function getValue () {
  var name = document.querySelector('#name').value;
  var last = document.querySelector('#last').value;
  var pref = document.querySelector('#pref').value;
  
  const cuisineObj = {
    ja: [ 'Daikokuya', 'Shinsengumi', 'Yoshinoya'],
    fr: [ 'test1', 'test2', "test5"],
    me: [ 'Qdoba', 'Don Cucos', "Chipotle", "Taco Bell"],
    nada: ['Whatever'],
    ch: [ 'Panda Express', 'Dim Sum', "Din Tai Fung", "Sam Woo"],
    ba: [ 'Ribs', 'Pulled Pork', "Beef", "Chicken"],
    vi: [ 'Pho', 'Spring Rolls', "Bun Bao", "Lee's"],
    th: [ 'Manaow', 'Long Beach Thai', "ST Noodle Bar", "Kha Soi"],
    in: [ 'Kabobs', 'Curry', "Samosas", "Saffron"],
    br: [ 'Pickles', 'Bananas', "Strawberries", "Peanuts"],
    na: [ 'Bay', 'Basil', "Tomato", "Ice Cream"],
    ko: [ 'Cream', 'Butter', "Sugar", "Flour"],
    ve: [ 'Meatballs', 'Ketchup', "Mustard", "Eggs"],
    me: [ 'Salt', 'Pepper', "Anchovies", "Pizza"],
    it: [ 'Grapefruit', 'Chickpeas', "Kidney Beans", "Rice"],
    ca: [ 'Lentils', 'Sesame', "Ghee", "Cumin"],
    gr: [ 'Cardamom', 'Mustard', "Fish", "More Fish"],
    si: [ 'Bread', 'Marijuana', "Cheese", "Kimchi"],
  }

  let arrayIndex = generateRandomNum(cuisineObj[pref]);

  let restaurant = cuisineObj[pref][arrayIndex];

  console.log(restaurant);
}