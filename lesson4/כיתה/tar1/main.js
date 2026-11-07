// תרגיל 4.1
const { titleCase } = require('title-case')
pad = require('pad-left')
const fs = require('fs/promises')
for (let i = 0; i < 15; i++) {
    if(i%2!=0){
        console.log(pad(titleCase("hello world"), 11 + i, ' '))
    }
    else{
        console.log(pad("hello world", 11 + i, ' '))
    }
}
async function main() {
    const text='text.txt'
    let all=''
    for (let i = 0; i < 15; i++) {
        if (i%2!=0)
        {
           all+=pad(titleCase("hello world"), 11 + i, ' ')+'\n' 
        }
        else
        {
            all+=pad("hello world", 11 + i, ' ')+'\n'                
        }
       
    }
    await fs.writeFile(text,all,'utf8')
}
// תרגיל 4.2

main()

