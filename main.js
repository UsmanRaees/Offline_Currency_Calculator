#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    PONDS: 0.79,
    CHINESEYUAN: 7.23,
    JAPANESEYEN: 151.79,
    AUSTRALIANDOLLARS: 1.51

};
let user_answere = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currnecy",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'PONDS', 'CHINESEYUAN', 'JAPANESEYEN', 'AUSTRALIANDOLLARS']
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'PONDS', 'CHINESEYUAN', 'JAPANESEYEN', 'AUSTRALIANDOLLARS']
    },
    {
        name: "amount",
        message: "Enter Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answere.from];
let toAmount = currency[user_answere.to];
let amount = user_answere.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
