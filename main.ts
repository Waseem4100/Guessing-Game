import inquirer from "inquirer"

let roundnumber = Math.floor((Math.random()*10)+1)

let user_input = await inquirer . prompt([{
    type :"input",
    name : "input",
    message: "guess a number between 0 -10"
}])

if (user_input.input=== roundnumber){
    console.log("congraulations you guessed correctly")
}
else(
    console.log(`sorry try next time ! correct number is ${roundnumber}`)
)