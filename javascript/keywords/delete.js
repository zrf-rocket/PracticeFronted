var obj = {a: 1, b: 2, c: 3};
console.log(obj); //{ a: 1, b: 2, c: 3 }

delete obj.b; // 删除对象obj的属性b
console.log(obj); // 输出{a: 1, c: 3}


let arr = [11,22,33,44,55];  //定义成var、let都可以使用delete进行删除操作
console.log(arr, arr.length);  // [ 11, 22, 33, 44, 55 ] 5

delete arr[0];
console.log(arr, arr.length);  // [ <1 empty item>, 22, 33, 44, 55 ] 5
//从上面结果看出 使用delete删除数组中的元素，长度并未改变

//还可以重新继续赋值
arr[0]=0;
console.log(arr, arr.length);  //[ 0, 22, 33, 44, 55 ] 5
