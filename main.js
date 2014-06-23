function validPhone(){
	var phoneNumber = prompt('Please enter your phone number using this format: \n \n                           123-456-7890');
	if(phoneNumber === null){
		alert('FALSE! \n You have to enter something duh!');
		validPhone();
		return;
	}
	var characterCheck = phoneNumber.split('');
	var numberCheck = phoneNumber.split('-').join('').split('');
	var count = 0;

	characterCheck.map(function(char){
		if(char === '-'){
			count++;
		}
	});

	if(characterCheck.length !== 12){
		alert('FALSE! \n You probably entered the incorrect amount of numbers huh?');
		validPhone();
		return;
	}else{


		if(count !== 2){
			alert('FALSE! \n Did you really think you\'d get away with incorrect hyphens!?');
			validPhone();
			return;
		}else{
			for(var i = 0; i < numberCheck.length; i++){
				if (isNaN(parseFloat((numberCheck[i])))){
					alert('FALSE! \n Your phone number doesnt have letters in it smarty pants ;]');
					validPhone();
					return;
				}
			}
		}
	}

	alert('TRUE! \n Thanks for entering a real number!');
}

function validBirthday(){
	var birthday = prompt('Enter your birthday: \n Ex: 12/30/94');
	var numbers = birthday.split('');

	for(var i = 0; i < numbers.length; i++){
		if (!isNaN(numbers[i])){
			alert('TRUE');
			return;
		}else{
			alert('FALSE');
			return;
		}
	}
}

function validPostal(){
	var postal = prompt('Enter your postal code: \n Ex: xxxxx or xxxxx-xxxx');
	var numbers = postal.split('');

	if(!postal.length === 10 && !postal.length === 5){
		alert('FASLE');
		return;
	}

	for(var i = 0; i < numbers.length; i++){
		if (!isNaN(numbers[i])){
			alert('TRUE');
			return;
		}else{
			alert('FALSE');
			return;
		}
	}
}

function validState(){
	var state = prompt('Enter your state: \n Ex: CA');

	if(state.length === 2){
		if (state.toUpperCase() === state){
			alert('TRUE');
		}else{
			alert('FALSE');
		}
	}else{
		alert('FALSE');
	}
}

function isMarried() {
	var married = prompt('Are you married? \n Ex: yes');

	if (married.length === 3 || married.length === 2){
		alert('TRUE');
	}else{
		alert('FALSE');
	}
}

validPhone();
validBirthday();
validPostal();
validState();
isMarried();
