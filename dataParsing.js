// Parsing

// JS setTimeout() + JSON Data (Old JS Practice)

setTimeout(()=>{
 console.log('JSON data goes to the console......\n')
},100)

setTimeout(()=>{
 console.log('Please wait...... \n');
},3200)
setTimeout(()=>{
const Data = JSON.parse(`{
  "firstname": "Hovsep",
  "surname":"Poghosyan",
  "age": 14,
  "programmer":true
}`)
console.log(Data);
},6500)
setTimeout(()=>{
 console.log('\nThe data has been successfully entered into the console....')
},7500)