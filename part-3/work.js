let teaFlavours = ["green tea","black tea","oolong tea"]

const firsttea = teaFlavours[0]

console.log(firsttea);


let cities = ["london","tokyo","new york","paris"]
 const favouritcity = cities[2]
 console.log(favouritcity);


 let teaatypes = ["herbal tea","white tea" , "masala tea"]
 teaatypes[1]="jasmine tea" 
 console.log(teaatypes);
 

 let city = ["jaipu" , "delhi" , "kolkata"]
 city.push("berlin")
 console.log(city);

 let teaOrder = ["chai" , "masala chai" , "matcha" , "earl grey"]
 let teaexcludev= teaOrder.pop()
 console.log(teaexcludev);


 let topcity = ["nalanda" , "london" , "south"]
 let goodcity = [...topcity]
 topcity.pop()
 console.log(goodcity);
 console.log(topcity);


 let europecities = ["paris","rome,"]
 let asiancities = ["tokyo","bangkok"]
 let worldcities = europecities.concat(asiancities)
 console.log(worldcities);
 

 let teaMenu = ["masala chai","oolong tea","green tea","earl grey"]
 menuLength = teaMenu.length
 console.log(menuLength);

 let cityBucketList = ["kyoto","london","cape town","vancouver"]
 let islondon = cityBucketList.includes("london")
 console.log(islondon);
 
 
 