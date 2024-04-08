// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

// appends a cat to the end of the cats array
function destructivelyAppendCat(name){
  cats.push(name);
};

destructivelyAppendCat("Cute")

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
  cats.unshift(name);
};

destructivelyPrependCat("Cute2")

// removes the last cat from the cats array
function destructivelyRemoveLastCat(){
  cats.pop();
};

destructivelyRemoveLastCat()

// removes the first cat from the cats array
function destructivelyRemoveFirstCat(){
  cats.shift();
};

destructivelyRemoveFirstCat()

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
  return [...cats, name];
};

appendCat("Cute3")

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
  return [name, ...cats];
};

prependCat("Cute4")

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
  return cats.slice(0, -1);
};

removeLastCat()

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
  return cats.slice(1);
};

removeFirstCat()
