//Parent Class
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

//Child Classes
class Triangle extends Shape {
    render() {
        return `<polygon points="50, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="25" y="25" width="150" height="150" fill="${this.color}" />`;
    }
}

module.exports = {Shape, Triangle, Circle, Square};