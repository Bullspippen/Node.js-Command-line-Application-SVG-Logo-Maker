const {Triangle, Circle, Square} = require("./shapes");

describe("Triangle", () => {
    test("should render svg for a green polygon element", () => {
        const expectedSvg = 
        `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg = 
        `<polygon points="150, 18 244, 182 56, 182" fill="purple" />`;
        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Circle", () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = 
        `<circle cx="100" cy="100" r="80" fill="green" />`;
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
        const expectedSvg = 
        `<circle cx="100" cy="100" r="80" fill="blue" />`;
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

    describe("Square", () => {
        test("should render svg for a green square element", () => {
            const expectedSvg = 
            `<rect x="90" y="40" width="150" height="150" fill="green" />`;
            const square = new Square();
            square.setColor("green");
            const actualSvg = square.render();
            expect(actualSvg).toEqual(expectedSvg);
        });
        test("should accept a fillColor param", () => {
            const expectedSvg = 
            `<rect x="90" y="40" width="150" height="150" fill="red" />`;
            const square = new Square();
            square.setColor("red");
            const actualSvg = square.render();
            expect(actualSvg).toEqual(expectedSvg);
        });
    });