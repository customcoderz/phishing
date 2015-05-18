function loadEmail(emailNum) {
	$('#preview').load('emails.html #'+emailNum+',#buttons');
	$('#inbox').css('display', 'none');
	$('#back').css('display', 'inline');
}

function loadInbox() {
	$('#preview').html('');
	$('#inbox').css('display', 'block');
	$('#back').css('display', 'none');
}

function emailCheck(bool) {
	if (bool == true) {
		alert("Correct!");
	} else {
		alert("Incorrect");
	}
}