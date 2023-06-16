// 首先引入 mongoose 这个模块
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/steverocket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to database');
});