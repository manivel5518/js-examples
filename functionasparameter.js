function greet()
{
	return 'hello'
}
function name(user,func)
{
	const message=func();
	console.log(`${message} ${user}`);
}
name('mani',greet);
name('vel',greet);
name('nithi',greet);