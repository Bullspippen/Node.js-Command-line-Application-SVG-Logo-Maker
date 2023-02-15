class SVG{
    constructor (){
        this.textElement = ""
        this.shapeElement = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }

    setText(message, color) {
        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
            if (message.length > 3) {
                throw new Error("Cannot be Longer than 3 Characters");
            }
            this.textElement = `<text x="150" y="125" fill="${color}" font-size="45" text-anchor="middle">${message}</text>`;
        } else {
            throw new Error("Invalid color code");
        }
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;
