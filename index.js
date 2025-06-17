let flavorList = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
const flavorCounter = (flavors) => {
  console.log(flavors);
  let result = {};
  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i];
    if (result[flavor]) {
      result[flavor] += 1;
    } else {
      result[flavor] = 1;
    }
  }
  return result;
};
let flavorUsed = prompt("Please enter your flavor", flavorList);
console.log(flavorCounter(flavorUsed.split(",")));
