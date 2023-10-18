//流式数据处理
const fs = require('fs');
const readStream = fs.createReadStream('C:\\Program Files\\nodejs\\node.exe');

readStream.on('data', chunk => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
    console.log('Finished reading data.');
});
