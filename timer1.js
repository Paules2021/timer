let inputArr=process.argv.slice(2)
for (let input of inputArr){
  if (!isNaN(input) && input >= 0){
  let sec=input
setTimeout((input)=>process.stdout.write(`${sec} seconds\n`) , 1000 * input)
}}