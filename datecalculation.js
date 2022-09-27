const olddate=new Date(2021,09,27);
const today=new Date();
const diff=today-olddate;
console.log(diff);
let days = Math.floor(diff / (1000 * 60 * 60 *24));
let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
let minutes = Math.floor((diff / (1000 * 60)) % 60);
let seconds = Math.floor((diff / 1000) % 60);
console.log(days+"days"+'/'+hours+"hours"+'/'+minutes+"minutes"+'/'+seconds+"seconds");