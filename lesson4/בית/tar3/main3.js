function sum(num1,num2=0){
    return num1+num2 
}
function sumAllDigit(londgNum)
{
    let arr=String(londgNum).split('').map(Number)
    let total=0
    for(let i=0; i<arr.length;i+=2)
    {
        total+= sum(arr[i],arr[i+1])
    }
    return total
}
module.exports={sum,sumAllDigit}
