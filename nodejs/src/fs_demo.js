const fs = require('fs');
const fileName = 'C:\\logs\\setup.log';
fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data);
});


fs.readFile(fileName, (err, data)=>{
   if (err)
       console.error(err);
   else
       console.log(`File contents:${data}`);
});