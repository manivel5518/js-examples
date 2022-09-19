const date=new Date(2017,2,12,9,25,30);
const n=date.toDateString();
const time=date.toLocaleTimeString();

console.log('date:'+n);
console.log('time:'+time);