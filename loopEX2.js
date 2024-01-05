// Create a Map 


const browser = new Map();

//set some values in map

browser.set("chrome", "v120")
browser.set("edge", "v121")
browser.set("safari", "v122")




//for each loop ------ invoke a callback 

browser.forEach(    function (value,key){


        console.log(`Key are: ${key} and value are ${value}`);


} )



console.log("===============================================");

for( let x of browser.entries()){

    console.log(`map element details are: ${x} `);

}

console.log("==================keys============================");

for( let x of browser.keys()){

    console.log(`map element details are: ${x} `);

}




console.log("==================values============================");

for( let x of browser.values()){

    console.log(`map element details are: ${x} `);

}
