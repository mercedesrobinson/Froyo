let flavorList = 'vanilla,vanilla,vanilla,strawberry,coffee,coffee';
const flavorCounter = (flavors) => {
  
  let result = {};
  for (let i = 0; i < flavorList.length; i++) {
    let flavor = flavorList[i];
    if (result[flavor]) {
      result[flavor] += 1;
    } else {
      result[flavor] = 1;
    }
  }
  return result;
};
console.log(flavorCounter(flavorList));