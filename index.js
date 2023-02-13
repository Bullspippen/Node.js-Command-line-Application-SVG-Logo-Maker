const fs = require("fs");
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");

const shapes = [
    {name: "Triangle"},
    {name: "Circle"},
    {name: "Square"}
];

const colors = [
    {name: "blue"},
    {name: "red"},
    {name: "green"},
    {name: "black"},
    {name: "white"}
]

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
    type: "list",
    name: "textColor",
    message: "Choose a color for the text:",
    choices: colors,
},
{
    type: "list",
    name: "shape",
    message: "Choose a shape for the Logo:",
    choices: shapes,
},
{
    type: "list",
    name: "shapeColor",
    message: "Choose a color for the shape:",
    choices: colors,
},
];



// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)