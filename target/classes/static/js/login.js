
function cambiar_login() {
document.querySelector('.form-signin')
	.className = "form-signin form_active_login";

document.querySelector('.cont_signup').className = "cont_signup col-1 col-sm-6";
document.querySelector('.cont_signin').className = "cont_signin col-11 col-sm-6";


document.getElementById('btn_signin').style.display = "none";
document.getElementById('btn_signup').style.display = "block";

document.querySelector('.form-signin').style.display = "block";
document.querySelector('.form-signup').style.opacity = "0";               

setTimeout(function(){  document
	.querySelector('.form-signin').style.opacity = "1"; },200);  
  
document.querySelector('.form-signup').style.display = "none";  
}

function cambiar_sign_up(at) {
document.querySelector('.form-signup')
	.className = "form-signup form_active_login";

document.querySelector('.cont_signin').className = "cont_signin col-1 col-sm-6";
document.querySelector('.cont_signup').className = "cont_signup col-11 col-sm-6";

document.getElementById('btn_signup').style.display = "none";
document.getElementById('btn_signin').style.display = "block";

document.querySelector('.form-signup').style.display = "block";
document.querySelector('.form-signin').style.opacity = "0";
  
setTimeout(function(){  document
	.querySelector('.form-signup').style.opacity = "1";},100);  

document.querySelector('.form-signin').style.display = "none";  
}    

