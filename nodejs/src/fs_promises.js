//异步编程
const fs = require('fs').promises;

fs.readFile('C:\\logs\\setup.log').then(data=>console.log(data)).catch(err=>console.log(err));