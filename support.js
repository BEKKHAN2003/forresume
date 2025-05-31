function ResetForm() {
    var errorMessages = document.getElementsByClassName('error_message');
    [...errorMessages].forEach(item => {
        item.innerHTML = "";
    });
    var input = document.querySelectorAll('input');
    [...input].forEach(item => {
        if(item.type != "button"){
            item.value = "";
        }
    });
    var select = document.querySelector('select');
    select.value = "";
}

function RegistrationPage() {
	var name = document.getElementById('username');
	var re = /^[А-Я]+[а-я]{1,}$/;
	if(!re.test(name.value)){
		document.getElementById('username_message').innerHTML = "Пожалуйста, напишите свое имя без пробелов и начните с заглавной буквы";
		name.style.borderColor = "red";

	}
	else{
		name.value = "";
		document.getElementById('username_message').innerHTML = "";
		name.style.borderColor = "lime";
	}


var phone = document.getElementById('phone');
	var re = /[7]+[0-9]{10}$/;
	if(!re.test(phone.value)){
		document.getElementById('phone_message').innerHTML = "Номер телефона пустой или неправильный формат";
		phone.style.borderColor = "red";
	}
	else{
		phone.value = "";
		document.getElementById('phone_message').innerHTML = "";
		phone.style.borderColor = "lime";
	}
}