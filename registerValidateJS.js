function validateForm()
{
	var name1 = document.getElementById("name").value;
	var email1 = document.getElementById("email").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	
	if(name1 == "" || name1.length <= 10)
	{
		document.getElementById("nameMsg").innerHTML="!--- Please fill Name";
		return false;
	}

	if(email1 == "" || email1.length <= 10)
	{
		document.getElementById("emailMsg").innerHTML="!--- Please enter valid Email id ---";
		return false;
	}	

	if(pwd1 == "" || pwd1.length < 8)
	{
		document.getElementById("pwdMsg1").innerHTML="!--- Fill the PASSWORD Field";
		return false;
	}

	if(pwd2 == "" || pwd2.length < 8)
	{
		document.getElementById("pwdMsg2").innerHTML="!--- please CONFIRM PASSWORD";
		return false;
	}

	if(pwd1 != pwd2)
	{
		document.getElementById("pwdMsg2").innerHTML="!--- PASSWORD is not matched";
		return false;
	}

	else
	{
		window.location = "https://imagecomics.com/comics/genres/superhero";
		alert("Registration Successfull");
		/*document.write("Congrats! Your data is saved");*/
		/*location.replace("file:///C:/Users/Bright/Desktop/Epistic's/Dec30/Dec30.html");*/	
	}
}


function reset()
{
	document.getElementById("data").reset;
	alert("Data is cleared");
}