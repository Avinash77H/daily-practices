

let input = document.querySelector(".display")
let output = []
function add(args){
 if(args === 'AC'){
  input.value = '';
  output = []
 }  
 else if(args === "DEL"){
  output.pop()
  input.value = output.join("")

 }
 else{
  output.push(args)
  input.value = output.join("")

 }
  console.log(output)

}

 function total(){
  try{
    input.value = eval(output.join(""))
    output = []
    output.push(input.value)
  }
  catch(err){
    console.log("ERR")
  }
  
 }