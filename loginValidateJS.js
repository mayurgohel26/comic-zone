function validateForm()
{
	var email1 = document.getElementById("email").value;
	var pwd1 = document.getElementById("pwd").value;
	
	if(email1 == "" || email1.length <= 10)
	{
		document.getElementById("emailMsg").innerHTML="!--- Please enter valid Email id ---";
		return false;
	}	

	if(pwd1 == "" || pwd1.length < 8)
	{
		document.getElementById("pwdMsg").innerHTML="!--- Fill the PASSWORD Field";
		return false;
	}

	else
	{
		window.location = "https://imagecomics.com/comics/genres/superhero";
		alert("Login Successfull");
		/*document.write("Congrats! Your data is saved");*/
		/*location.replace("file:///C:/Users/Bright/Desktop/Epistic's/Dec30/Dec30.html");*/	
	}
}


function reset()
{
	document.getElementById("data").reset;
	alert("Data is cleared");
}