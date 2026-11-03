function addition(a,b){
    return a+b
}
console.log("task01")
console.log(addition(7,9))

console.log("task02")
function bitwiseAND(a,b){
    return a & b
}
console.log(bitwiseAND(2,2))

function bitwiseOR(a,b){
        return a | b
}
console.log(bitwiseOR(4,8))

function bitwiseXOR(a,b){
    return a^b
}
console.log(bitwiseXOR(2,6))

function addUp(a){
    let sum=0

    for(let i=1;i<=a;i++){
        sum= sum + i 
}
return sum
}
console.log("task03")
console.log(addUp(4))


function progressBar(a){
    let result=""
    for(let i=1;i<=a;i++){
        if(i*10<=a){
            result=result+"#"
        }
        else{
            result=result+"-"
        }
    }
     return result
}
console.log(progressBar(10))

function minMax(arr){
    let min=arr[0]
    let max=arr[0]
    let arrlength=arr.length

    for(let i=1;i<=arr.length;i++) //task05
        if(arr[i]<min){
            min=arr[i]
        }
        if(arr[i]>max){
            max=arr[i]
        }
}

function calculateFinalPrice(basePrice, taxRate, discountPercentage){
    let discountPrice 
    let tax
    let finalprice
    let loyaltyPoints
       
    discountPrice=basePrice * (1 - discountPercentage / 100)
    discountPrice=Math.round(discountPrice * 100) / 100
    tax= discountPrice*(taxRate/100)         //task07
    tax=Math.round(tax * 100) / 100
    finalprice=discountPrice+tax
    finalprice=Math.round(finalprice * 100) / 100
    loyaltyPoints=Math.ceil(finalprice)
    

    return{
        discountPrice,tax,finalprice,loyaltyPoints
    }

}

function calculateRepoStats(repos){
     if(repos.length===0){
        return{
            maxStars:0,
            minStars:0,
            avgStaes:0,
            varianceScores:0
        }
}
    let stars= repos.map(function(repo){
        return repo.stars
    })
    let maxStars=Math.max(...stars)
    let minStars=Math.min(...stars)
    let totalStars=stars.reduce(function(total,current){
        return total+current},0)
    let avgStars=Math.floor(totalStars/stars.length)
    let varianceScore=Math.abs(maxStars-minStars)
                                                //task06
    return{
        maxStars,minStars,avgStars,varianceScore
    }
}
 const repos = [ 
    { name: 'repo-a', stars: 12 },
    { name:'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 } ]
console.log(calculateRepoStats(repos))



function paginateData(items, pageNumber, pageSize){
    let TotalPages= Math.ceil(items.length/pageSize)
    let startIndex=(pageNumber-1)*pageSize
    let endIndex=(pageNumber*pageSize)
    let data=items.slice(startIndex,endIndex)
    let hasPrev=pageNumber>1
    let hasNext=pageNumber<TotalPages
    return{                                     //task08
         data,TotalPages,hasNext,hasPrev}
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk',
'Chair', 'Webcam', 'Headphones'];
const result = paginateData(allProducts, 2, 3);
console.log(result);