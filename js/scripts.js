function loadEmail(emailNum) {
	$('#preview').load('emails.html #'+emailNum+',#buttons');
	$('#preview').append('emails.html #buttons');
	inbox.style.display = 'none';
	back.style.display = 'inline';
}

function loadInbox() {
	var preview = document.getElementById('preview');
	var inbox = document.getElementById('inbox');
	var back = document.getElementById('back');
	
	preview.innerHTML = "";
	inbox.style.display = 'block';
	back.style.display = 'none';
}

function emailCheck(bool) {
	if (bool == true) {
		alert("Correct!");
	} else {
		alert("Incorrect");
	}
}