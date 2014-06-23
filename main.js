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
		alert('FALSE! \n You probably tried to enter the incorrect amount of numbers huh!?');
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

validPhone();