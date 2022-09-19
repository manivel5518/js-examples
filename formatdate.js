let currentdate= new Date();
let date=currentdate.getDate();
let month=currentdate.getMonth();
let year=currentdate.getFullYear();
if(date<10)
{
	date='0'+date;
}
if(month<10)
{
	month='0'+ month;
}
const dateformat1=date+'/'+month+'/'+year;
console.log(dateformat1);