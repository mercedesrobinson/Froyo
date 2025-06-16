console.log("am i connected?");

//vanilla,vanilla,vanilla,strawberry,coffee,coffee
let flavors = prompt("Please enter your flavors here: ")

console.log(flavors)


//flavorList = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]
const flavorCounter = (flavors) => {
    let obj = {}
    console.log("am i coding?");
    let flavorList = flavors.split(',');
    console.log(flavorList);
    for (let i = 0; i < flavorList.length; i++) {
        console.log(flavorList[i]); {
    if (flavorList[i] in Object.keys(obj)) {
                obj[flavorList[i]] += 1;
                console.log(obj)
    } else {
        obj[flavorList[i]] = i + 1;
    }
        console.log(obj)
    }}
    console.log(obj)
};

console.log(flavorCounter(flavors));