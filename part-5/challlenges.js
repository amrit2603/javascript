let teas = ["green tea" , "black tea" , "chai" , "oolong tea"]
let selectedtea = []
let t
for(t = 0 ; t<= teas.length ; t++){
    if(teas[t] === "chai"){
        break;
    }
    selectedtea.push(teas[t])
}
console.log(selectedtea);



let city = ["london" , "new york" , "paris" , "berlin"]
let selectedscity = []
for(let i = 0 ; i <= city.length ; i++){
    if(city[i] === "paris"){
        continue;
    }
    selectedscity.push(city[i])
}
console.log(selectedscity)



let numbers = [1,2,7,8,3,4,5]
let smallnumbers = []

for (const num of numbers) {
    if(num === 4 ){
        break;
    }
    smallnumbers.push(num)
}
console.log(smallnumbers);


let tea = ["chai" , "green tea" , "herbal tea" , "black tea"]
let prefferedteas = []

for (const ele of tea) {
    if(ele === "herbal tea"){
        continue;
    }
    prefferedteas.push(ele)
}
console.log(prefferedteas);

let worldcity = {
    sydney : 20000 ,
    tokyo : 323133 ,
    london : 863782372,
    china : 3231313131 ,
}
let largcities = {} 

for (const city  in worldcity) {
      if(worldcity[city] <  350000){
        continue
      }
      largcities[city] = worldcity[city]
}
console.log(largcities);
