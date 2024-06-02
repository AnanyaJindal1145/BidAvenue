const fs = require('fs');

const numberOfLines = 5000;
let code = '';

// Generate 5000 lines of simple JavaScript code
for (let i = 0; i < numberOfLines; i++) {
    code += `let var${i} = ${i};\n`;
    code += `console.log(var${i});\n`;
}

fs.writeFileSync('largeFile.js', code);
console.log(`largeFile.js created with ${numberOfLines} lines of code.`);
