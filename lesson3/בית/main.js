const ps=require('fs/promises')
const fs = require('fs');
const employee=require('./Employee');
const Employee = require('./Employee');
const { log } = require('console');
let e1=new employee("217358191","Yaffi",19)
let e2=new employee("215458745","Efrat",19)
let e3=new employee("036690469","Yael",41)

fs.mkdirSync('employees-date', { recursive: true });
const fileE1 = './employees-date/Yaffi.txt'
try{
    const content=e1.toString()
    console.log(content)
    fs.writeFileSync(fileE1,content,'utf8')
    console.log("is good")
}catch(error)
{
    console.log("failed")
}
const fileE2 = './employees-date/Efrat.txt'
const content2=e2.toString()
const num='haaaracha 8'
fs.writeFile(fileE2,content2,'utf8',error=>{
if(error){
   console.log("failed")
}
else
{
    console.log("is good")
}
})
fs.writeFile(fileE2,num,'utf8',error=>{
if(error){
   console.log("failed")
}
else
{
    console.log("is good")
}
})
async function pEmp(){
    try{
       
        const fileE3 = './employees-date/Yael.txt'
        const content3=e3.toString()
           await fs.writeFileSync(fileE3,content3,'utf8')
    console.log("is good")
}catch(error)
{
    console.log("failed")
}

}
async function pEmp() {
    try {
        const fileE3 = './employees-date/Yael.txt';
        await fsp.writeFile(fileE3, e3.toString(), 'utf8');
        console.log("is good");

        await fsp.writeFile('./employees-date/Efrat.txt', e2.toString(), 'utf8');
        console.log("הקבצים נוצרו ונכתבו בהצלחה!");

        const files = await fsp.readdir('employees-date');
        console.log("שמות הקבצים בתיקייה:", files);

        if (files.length === 3) {
            console.log("אימות עבר בהצלחה: אכן מוצגים בדיוק 3 קבצים בתיקייה.");
        } else {
            console.log("שימו לב, נמצאו הקבצים", files.length);
        }
    } catch (error) {
        console.log("failed", error);
    }
}

pEmp()


