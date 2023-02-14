const SVG = require("./svg");
const { Square } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
    const expectedSvg = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg) 
})

test("should append text element", () => {
    const expectedSvg = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.textElement}</svg>`
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
});

test("should throw if text exceeds 3 Characters", () => {
    const expectedError = new Error("Text must not exceed 3 Characters.");
    const svg = new SVG();
    expect(() => svg.setText("Hello", "#111")).toThrow(expectedError);
});

