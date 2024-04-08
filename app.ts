#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n\t Welcome to 'CodewithMaham' - Currency Convertor\n"));
// Define the list of currencies and there exchange rate
let exchange_rate: any = {
    "USD": 1, // base currency
    "EUR": 0.9, // european currency
    "JYP": 113, // japenese currency
    "CAD": 1.3, // canadian dollar
    "AUD": 1.65, // austrailian dollar
    "PKR": 280, // pakistani rupees
    // Add more curriencies and there ecxhange rates here 
}

// promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
       name: "from_currency",
       type: "list",
       message: "Select the currency to convert from:",
       choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices:  ["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// perform currency conversion by using formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount =  exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// fromula pf conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount


// Display the conerted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
