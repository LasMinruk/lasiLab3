const fs = require('fs');  // Add this line at the beginning

fs.writeFile('file.txt', 'Hello World from Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});
