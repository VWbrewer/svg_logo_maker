const { Circle, Square, Triangle } = require("./shapes.js");


describe("Circle test", () => {
    test("A circle with a red background", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
});





describe("Square test", () => {
    test("A square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="160" height="160" fill="blue" />');
    })
});





describe("Triangle test", () => {
    test("A triangle with a orange background", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />');
    })
});
