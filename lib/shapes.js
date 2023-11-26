class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// Circle
class Circle extends Shape {
  render() {
    // Polygon with color input
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Square
class Square extends Shape {
  render() {
    // Polygon with color input
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Triangle
class Triangle extends Shape {
  render() {
    // Polygon with color input
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };