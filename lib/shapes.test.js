const {Triangle, Circle, Square} = require("./shapes");

const Triangle = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const Circle = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');

const Square = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="25" y="25" width="150" height="150" fill="green" />');


// Example from Assignment
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');