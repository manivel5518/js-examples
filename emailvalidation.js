function myfun(emailid)
{

const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(regex.test(emailid))
	{
	console.log("this mail id is validate");
	}
	else
	{
	console.log("this mail is not validate");
	}
}
myfun('mvel589@gmail.com');
myfun('mel89@com');