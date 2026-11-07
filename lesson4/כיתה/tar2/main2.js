const fs = require('fs/promises')
const c=require('colors')
async function changeColor()

{
    colors.setTheme({
    kfjh:c.green
})
    const text2='text.txt'
    const file= await fs.readFile(text2,'utf8')
    //console.log(file)
    let linesArray = file.split('\n')
    console.log(c.kfjh(linesArray[0]))
    console.log(c.blue(linesArray[1]))
    console.log(c.red(linesArray[2]))
    console.log(c.yellow(linesArray[3]))
    console.log(c.white(linesArray[4]))

}


changeColor()