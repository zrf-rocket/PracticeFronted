const number = 123456789.123456789;

console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(number));
console.log(new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY'}).format(number));
console.log(new Intl.NumberFormat('ar-SA', {style: 'currency', currency: 'EGP'}).format(number));
console.log(new Intl.NumberFormat('zh-CN', {style: 'currency', currency: 'CNY'}).format(number));
