/* RAVI RAHUL -- Started Writing code on: 03-09-2018 21:36 */
/* RAVI RAHUL -- Placed on github on: 13-09-2018 13:55 */


/*Menu Button */
function homeButton(){
	document.getElementById("content-1").classList.add('active');
	document.getElementById("content-2").classList.remove('active');
	document.getElementById("content-3").classList.remove('active');
}

function contactButton(){
	document.getElementById("content-2").classList.add('active');
	document.getElementById("content-1").classList.remove('active');
	document.getElementById("content-3").classList.remove('active');
}


function workButton(){
	document.getElementById("content-1").classList.remove('active');
	document.getElementById("content-2").classList.remove('active');
	document.getElementById("content-3").classList.add('active');
}

/*Study & Experiences*/
function clickBCA(){
	document.getElementById("message-BCA").classList.add('active');
	document.getElementById("message-HSEB").classList.remove('active');
	document.getElementById("message-SLC").classList.remove('active');
}

function clickHSEB(){
	document.getElementById("message-BCA").classList.remove('active');
	document.getElementById("message-HSEB").classList.add('active');
	document.getElementById("message-SLC").classList.remove('active');
}

function clickSLC(){
	document.getElementById("message-BCA").classList.remove('active');
	document.getElementById("message-HSEB").classList.remove('active');
	document.getElementById("message-SLC").classList.add('active');
}


function clickLazoi(){
	document.getElementById("message-lazoi").classList.add('active');
	document.getElementById("message-JCW").classList.remove('active');
	document.getElementById("message-SPEBS").classList.remove('active');
}

function clickJCW(){
	document.getElementById("message-lazoi").classList.remove('active');
	document.getElementById("message-JCW").classList.add('active');
	document.getElementById("message-SPEBS").classList.remove('active');
}

function clickSPEBS(){
	document.getElementById("message-lazoi").classList.remove('active');
	document.getElementById("message-JCW").classList.remove('active');
	document.getElementById("message-SPEBS").classList.add('active');
}
