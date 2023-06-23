console.log(Date.now());  // 1687530990595
console.log(Date.parse("2023-06-23 22:31:51"));  // 1687530711000



let now = new Date();
// 输出当前时间的日期和时间
console.log(now, typeof now);  // 2023-06-23T14:26:35.445Z object

let specificTime = new Date(2023, 6, 23, 12, 30, 0);
console.log(specificTime, typeof specificTime);  //2023-07-23T04:30:00.000Z object

let timestamp = new Date().getTime();
// 输出当前时间的时间戳
console.log(timestamp, now.getTime(), typeof timestamp); // 1687530604090 1687530604072 number


function formatTimestamp(timestamp) {
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return `${year}-${addZero(month)}-${addZero(day)} ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

let formattedTime = formatTimestamp(timestamp);
// 输出格式化后的时间字符串
console.log(formattedTime, typeof formattedTime); //2023-06-23 22:31:51 string


let startTime = new Date(2023, 6, 23, 12, 0, 0);
let endTime = new Date(2023, 6, 23, 13, 30, 0);

let diff = endTime.getTime() - startTime.getTime();
//输出时间差的毫秒数
console.log(diff, typeof diff);  //5400000  number