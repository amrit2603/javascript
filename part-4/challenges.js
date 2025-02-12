let teacollection = []
let tea 

do{
    tea = prompt(`enter your favourite tea (type "stop" to finsh)`)

    if(tea !== "stop"){
        teacollection.push(tea)
    }
}while(tea !== "stop")