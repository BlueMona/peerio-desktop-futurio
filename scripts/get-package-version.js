const fs = require('fs');
console.log(JSON.parse(fs.readFileSync('../peerio-desktop/package.json', 'utf-8')).version)
