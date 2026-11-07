//עמוד 101
//תרגיל2.2
//דרך א
const list1=["a,b,c,d"]
const list2=["f,g,h,i,j,k"]
function  shopings(list1,list2) {
    return new Promise((resolve,reject)=>{
        if(list1.length!=list2.length)
            reject()
        else
        list1.sort()
        list2.sort()
        for(let i=0;i<list1.length;i++){
            if(list1[i]!=list2[i])
                reject()
        resolve()    
        }
    })
}
shopings(list1,list2)
    .then(consol.log('Good Work'))
    .catch(consol.log('You forget some products'))
//דרך ב
async function main() {
    try{
        await shopings(list1,list2)
        consol.log("Good Work")
    }
    catch(error){
        await shopings(list1,list2)
        consol.log('You forget some products')

    }
}

