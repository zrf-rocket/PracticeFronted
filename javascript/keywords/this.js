var obj = {
    name: 'SteveRocket',
    sayName: function () {
        console.log("my name is", this.name);
    }
};
obj.sayName();
