// //generateSVG, saveSVGFile - Generate SVG Logo based on User's Input and Save to File

// const fs = require("fs");

// function getShapeCode(shape) {
//     if (shape === "square") {
//         return `<rect width="200" height="200" fill="${color}" />`;
//     }   else if (shape === "triange") {
//         return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${color}" />`;
//     }   else if (shape === "circle") {
//         return `<circle r="100" cx="150" cy="150" fill="${color}" />`;
//     }   else {
//         console.error("Invalid shape");
//     }
// }

// function generateSVG(shape, color, text, textColor) {
//     const shapeCode = getShapeCode(shape);
//     const textCode = `<text x="50%" y="50%" fill="${textColor}" dominant-baseline="middle" text-anchor="middle">${text}</text>`;
//     //text aligned vertically(dominant), text centered(middle) - Positioning of Logo within the Shape
//     const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">${shapeCode}${textCode}</svg>`;
//     //URL for SVG Namespace
//     return svg;
// }

// function saveSVGFile(svg, filename) {
//   fs.writeFileSync(filename, svg);
// }

// module.exports = {
//   generateSVG,
//   saveSVGFile
// };