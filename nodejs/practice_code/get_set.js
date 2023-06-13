// 计算型属性

const obj = {
    number: 0,

    get value(){
        return `${this.number}, ${Math.random()}`;
    },

    set value(newValue){
        this.number = newValue;
        console.log(`the new value is ${newValue}`);
    }
}

console.log(obj.value);
obj.value=1234;
console.log(obj.value);