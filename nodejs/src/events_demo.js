const EventEmitter = require('events');
// 事件处理
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
   console.log('an event occurred');
});

myEmitter.emit('event');