// 用于文件系统操作
const inner_fs = require('node:fs');
// 上下两个导入方式等价
const inner_fs2 = require('fs');


// 读取文件
inner_fs.readFile('../practice_code/config.json', 'utf-8', (err,data)=>{
    if (err) throw err;
    console.log(data);
});



const informations =  {
  "appName": "My App",
  "author": "steverocket",
  "version": "1.0.0",
  "port": 3000,
  "weixin": "https://mp.weixin.qq.com/s/0yqGBPbOI6QxHqK17WxU8Q",
  "csdn": "https://blog.csdn.net/zhouruifu2015/",
  "git": "https://gitee.com/SteveRocket/practice_python.git"
}

// 写入文件
inner_fs2.writeFile('test.json', JSON.stringify(informations), (err)=>{
   if (err) throw err;
   console.log("The data has been appended to the file!");
});



// 修改（增加）内容
inner_fs2.appendFile('test.json','\nthis is new line contents!', (err)=>{
   if (err) throw err;
   console.log('The data has been appended to the file!');
});


// 删除文件
inner_fs2.unlink('test.json', (err)=>{
   if (err) throw err;
   console.log('The file has been deleted!')
});





// rename(重命名文件)
inner_fs2.rename('test.json', 'steverocket.json', (err)=>{
    if (err) throw err;
    console.log("文件重命名成功");
});



// mkdir(创建目录)
inner_fs2.mkdir("newdir", {recursive:true}, (err)=>{
   if (err) throw err;
   console.log("目录创建成功");
});



// readdir(读取目录)
inner_fs2.readdir('newdir', (err, files) => {
   if (err) throw err;
   console.log(files);
});



// copyFile(文件拷贝)
inner_fs2.copyFile('steverocket.json', 'newdir/test.json', (err)=>{
   if (err) throw err;
   console.log('文件拷贝成功');
})






// createReadStream(可读流)
const readStream = inner_fs2.createReadStream('steverocket.json');
readStream.on('data', (chunk)=>{
    console.log(chunk);
});

readStream.on('end', ()=>{
    console.log('文件读取完成');
});



// createWriteStream(可写流)
const writeStream = inner_fs2.createWriteStream("test.json");

writeStream.write('这是一段中文，this is Chinese content');
writeStream.end();

writeStream.on('finish', ()=>{
    console.log("文件写入完成");
});




// 适合小文件拷贝
// inner_fs2.writeFileSync('test.json', inner_fs2.readFileSync('steverocket.json'));

// 适合大文件拷贝
// inner_fs2.createReadStream('steverocket.json').pipe(inner_fs2.createWriteStream('test2.json'));




var bin1 = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x53, 0x74, 0x65, 0x76, 0x65, 0x52, 0x6f, 0x63, 0x6b, 0x65, 0x74]);
console.log(bin1.length, bin1);  // 17 <Buffer 48 65 6c 6c 6f 20 53 74 65 76 65 52 6f 63 6b 65 74>
console.log(bin1[0]);  // 72


const str = 'Hello SteveRocket';
var bin = new Buffer(str, 'utf-8');
console.log(bin, str); // <Buffer 48 65 6c 6c 6f 20 53 74 65 76 65 52 6f 63 6b 65 74> Hello SteveRocket
console.log(bin.length, str.length); // 17 17







