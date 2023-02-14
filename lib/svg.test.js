const SVG = require("./svg");
const { Square } = require("./shapes");

describe("SVG", () => {
  test("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("should append text element", () => {
    const svg = new SVG();
    const text = "ABC";
    const color = "white";
    const expectedSvg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" fill="${color}" font-size="45" text-anchor="middle">${text}</text></svg>`;
    svg.setText(text, color);
    expect(svg.render()).toEqual(expectedSvg);
  });

  test("should throw error if text exceeds 3 characters", () => {
    const svg = new SVG();
    expect(() => {
      svg.setText("Hello", "#111");
    }).toThrow("Cannot be Longer than 3 Characters");
  });

  test("should append shape element", () => {
    const svg = new SVG();
    const shape = new Square();
    const color = "red";
    const expectedSvg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="150" height="150" fill="${color}" /></svg>`;
    shape.setColor(color);
    svg.setShape(shape);
    expect(svg.render()).toEqual(expectedSvg);
  });
});
