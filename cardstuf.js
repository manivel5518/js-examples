const suits=["spards","diaonds","club","heart"];
const values=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
let desk=[];
for(let i=0;i<suits.length;i++)
{
	for(let x=0;x<values.length;x++)
	{
	let card={value:values[x],suit:suits[i]};
	deck.push(card);
	}
}
for(let i=deck.length-1;i>0;i--)
{
	let j=Math.floor(Math.random()*i);
	let temp =deck[i];
	deck[i]=deck[j];
	deck[j]=temp;
console.log("the first five cards are");
for(let i=0;i<5;i++)
{
	console.log(deck[i].value+"and"+deck[i].suit);
}