// 用于处理文件路径
var path_module = require('path');


const normalizedPath = path_module.normalize('/foo//bar//steverocket/./cramer/..');
console.log(normalizedPath); // 输出：\foo\bar\steverocket


var cache = {};

function store(key, value) {
  cache[path_module.normalize(key)] = value;
}

store('cramer/steverocket', 1);
store('cramer//abc//../steverocket', 2);
console.log(cache);  // { 'cramer\\steverocket': 2 }




const fullPath = path_module.join('/foo', 'bar', 'baz/cramer', 'steverocket', '..');
console.log(fullPath);  // \foo\bar\baz\cramer
console.log(path_module.join('foo/', 'cramer/', '../steverocket'));  // foo\steverocket



const extname = path_module.extname('/foo/bar/cramer.json/steverocket.txt');
console.log(extname); // 输出：.txt
console.log(path_module.extname('/foo/bar/cramer'))  // 什么也不输出，也不报错



const dirname = path_module.dirname('/foo/bar/cramer.json/steverocket.txt');
console.log(dirname); // 输出：/foo/bar/cramer.json
console.log(path_module.dirname('/foo/bar/steve.rocket.txt'))  // /foo/bar



const filename = path_module.basename('/foo/bar/steverocket.txt');
console.log(filename); // 输出：steverocket.txt

const filenameWithoutExt = path_module.basename('/foo/bar/steverocket.json.txt', '.txt');
console.log(filenameWithoutExt); // 输出：steverocket.json



const formattedPath = path_module.format({
 root: '/ignored',
 dir: '/steverocket/cramer',
 base: 'file.txt'
});
console.log(formattedPath);  // /steverocket/cramer\file.txt



console.log(path_module.isAbsolute('/steverocket/cramer')); // 输出：true
console.log(path_module.isAbsolute('steverocket/cramer')); // 输出：false
console.log(path_module.isAbsolute('/steverocket/cramer/../')); // 输出：true
console.log(path_module.isAbsolute('../steverocket/cramer/../')); // 输出：false



const pathObj = path_module.parse('/steverocket/cramer/file.txt');
console.log(pathObj);

const pathObj2 = path_module.parse('/steverocket/./../cramer/file.txt');
console.log(pathObj2);



const relativePath = path_module.relative('/steverocket/cramer', '/test/next');
console.log(relativePath); // ..\..\test\next



// const absolutePath = path_module.resolve('foo/bar', '/tmp/file/', '..', 'a/../subdir');
// console.log(absolutePath);  // D:\tmp\subdir



// const win32Path = path_module.win32;
// console.log(win32Path);

// 获取当前文件所在的目录
// console.log(win32Path.resolve());  // D:\source_code\practice_fronted\nodejs\inner_module
