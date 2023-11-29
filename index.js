const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle  } = require("./lib/shapes");


console.log("The logo is able to be made")



// User answers from inquirer prompts
function writeToFile(fileName, input) {
    // This file starts as an empty string
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${input.shape}`;


    let shapeChoice;
    if (input.shape === "Circle") {
        shapeChoice = new Circle ();
        svgString += `<circle cx="150" cy="100" r="80" fill="${input.shapeColor}"/>`;

    } else if (input.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="90" y="40" width="120" height="120" fill="${input.shapeColor}"/>`;

    } else {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${input.shapeColor}"/>`;
}

svgString += `<text x="150" y="150" text-anchor="middle" font-size="45" fill="${input.textColor}">${input.text}</text>`;
svgString += "</g>";
svgString += "</svg>";


fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
});
}


// inquirer .prompt 
function promptUser() {
    inquirer
        .prompt([
// Color question
    {
        type: "input",
        name: "textColor",
        message:"Enter text color (Please enter color keyword)",
    },
// Text question
    {
        type: "input",
        name: "text",
        message: "What text would you like your logo to display? (Three characters)",
    },
// Shape question
    {
        type: "list",
        name: "shape",
        message: "Enter a shape",
        choices: ["Circle", "Square", "Triangle"],
    },
// Color question
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color (Please enter color keyword)",
    },
])

// Error
.then((input) => {
    if (input.text.length > 3) {
    promptUser();
    } else {
// Writes a SVG file
        writeToFile("logo.svg", input);
    }
    });
}



// Calling promptUser function
promptUser();