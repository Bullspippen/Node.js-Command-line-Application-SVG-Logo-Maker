const {writeFile} = require("fs/promises");
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./shapes");
const SVG = require("./svg");


const questions = [
    {
    type: "input",
    name: "text",
    message: "Enter up to three Characters for the Logo:",
    validate: function (input) {
        if (input.length > 3) {
            return "Please enter up to three Characters for the Logo.";
            }
        return true;
    },
},
{
    type: "input",
    name: "textColor",
    message: "Choose a color for the text:",
},
{
    type: "list",
    name: "shape",
    message: "Choose a shape for the Logo:",
    choices: ["Triangle", "Circle", "Square"],
},
{
    type: "input",
    name: "shapeColor",
    message: "Choose a color for the shape:",
},
];

class CLI {
    run(){
        return inquirer.prompt(questions)
        .then(({text, textColor, shape, shapeColor}) => {
            let output;
            switch(shape){
                case "Triangle":
                    output = new Triangle();
                    break;
                case "Circle":
                    output = new Circle();
                    break;
              default:
                output = new Square();
                break;
            }
            output.setColor(shapeColor);
            const svg = new SVG()
            svg.setText(text, textColor)
            svg.setShape(output)
            return writeFile("./examples/logo.svg", svg.render())
        }) 
        .then(()=>{console.log("generated your Logo File")})
        .catch((error) =>console.log(error))
    }
}
module.exports = CLI