// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
//   }

// let user1 = { name:prompt(""), age: +prompt() };
// let user2 = { name:prompt(""), age: +prompt()  };
// let user3 = { name:prompt(""), age: +prompt() };

// let arr = [ user1, user2, user3 ];

// sortByAge(arr);


// alert(arr[0].name); 
// alert(arr[1].name); 
// alert(arr[2].name); 


for( let i = 0; i < 1; i++){
    let obj = {
        name: prompt("name"),
        age: +prompt("age"),
        job: prompt("Job"),
    }
    console.log(obj)
    function toArr(obj){
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let result = []
    for (let i = 0; i < keys.length; i++){
        result.push(keys[i], values[i])
    }
return result
}
console.log(toArr(obj))
}


function objTwo(){
    let arr = [];
    for( let i = 0; i < 5; i++){
        let objTwo = {
            name: prompt("name"),
            age: +prompt("age"),
            
        }
        arr.push(objTwo)
    }
    console.log(arr)
    arr.sort(function(a, b){  
        return a.age-b.age
    }
    )
}
objTwo()