// Map ------ key and value 

// Create a Map 
const browser = new Map();

//set some values in map

browser.set("chrome", "v120")
browser.set("edge", "v121")
browser.set("safari", "v122")



//get the values from map ----- getMethod

br = browser.get("chrome") 

console.log("value of browser: " + br);


//size property ---- number of elements in a Map
elementCount = browser.size;
console.log("elements into Map are: " + elementCount);



// //remove / delete map elements
// console.log("==============/remove / delete map elements==============");
// browser.delete("edge")
// console.log(browser);


// //clear - method remove all elements from the Map
// console.log("==============clear==============");
// browser.clear();
// console.log(browser);


//has method return true if a key exists in Map
isChromePresent = browser.has("chrome")

console.log(`is chrome key present into browser Map : ${isChromePresent}`);


console.log(typeof(browser));
