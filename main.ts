#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

class Player{
    name:string;
    fuel:number = 100
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name:string;
    fuel:number = 100
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
console.log("-*".repeat(40));
console.log(chalk.bold.cyan("\t\t Welcome to 'Alishba Meraj' - Adventure Game \n\t"));
console.log(chalk.bold.cyan("\n\t\t\t BEST OF LUCK!\n\t"))
console.log("-*".repeat(40));


let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.green("\n\tPlease Enter Your Name:")
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.green("\n\tSelect your Opponent"),
        choices: [
            "Skeleton",
            "Alien",
            "Zombie"
        ]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
   


do{
    // skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magenta("\n\t\t\tYou Win!"));
                    console.log(chalk.bold.cyan("\n\tThank you for using our Adventure Game. Have a great day!\n\t"));
                    process.exit()
                } 
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)
        }
        if(ask.opt == "Run For Your Life.."){
            console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
            process.exit()
        }

    }

    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magenta("\n\t\t\tYou Win!"));
                    console.log(chalk.bold.cyan("\n\tThank you for using our Adventure Game. Have a great day!\n\t"));
                    process.exit()
                } 
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)
        }
        if(ask.opt == "Run For Your Life.."){
            console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
            process.exit()
        }

    }


    // zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magenta("\n\t\t\tYou Win!"));
                    console.log(chalk.bold.cyan("\n\tThank you for using our Adventure Game. Have a great day!\n\t"));

                    process.exit()
                } 
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)
        }
        if(ask.opt == "Run For Your Life.."){
            console.log(chalk.bold.red("You Loose, Better Luck Next Time!"));
            process.exit()
        }

    }
}
while(true)   
 
