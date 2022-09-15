let a=1;
let b=6;
let c=5;
let root1,root2;
let descrminat=b*b-4*a*c;
if(descrminat>0)
{
	root1=(-b+Math.sqrt(descrminat))/(2*a);
	root2=(-b-Math.sqrt(descrminat))/(2*a);
	console.log("the roots of euation are "+root1 +"and" +root2);
}
else if(descrminat==0)
{
	root1=root2=-b/(2*a);
	console.log("the roots of euation are "+ root1 +" and "+root2);
}
else
{
	let realpart=(-b/(2*a)).toFixed(2);
	let imgpart=(Math.sqrt(-descrminat))/(2*a).toFixed(2);
	console.log("the roots of quadratic equation are "+(realpart+imgpart)+" and" +(realpart-imgpart));
}