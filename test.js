// первое задание

document.getElementById('but1').onclick=compare;

function compare() {
	var a11= document.getElementById('task11').value;
	var a12= document.getElementById('task12').value;

	if (+a11 > +a12){

		alert('наибольшее число '+a11);
	} 

	else {
		alert('наибольшее число '+a12);
	}
}

// второе задание

document.getElementById('but2').onclick=compare;

function compare() {
    var a21= document.getElementById('task21').value;
    var a22= document.getElementById('task22').value;

    if (+a21 > +a22){

        alert('наибольшее число '+a21);
    }

    else if (+a21 < +a22){
        alert('наибольшее число '+a22);
    }

	else {
    	alert('числа '+a22+' равны между собой')
	}
}

// третье задание

document.getElementById('but3').onclick=apartment;

function apartment() {
	var a3= document.getElementById('task3').value;

	if (a3<1 || a3>90) {
		alert('Ошибка!!! Введите номер квартиры от 1 до 90');
	}

	else if (a3<21) {
		alert('квартира в первом подъезде');
	}
	else if (a3<49) {
		alert('квартира во втором подъезде');
	}
	else  {
		alert('квартира в третьем подъезде');	
	}
}

// четвертое задание

document.getElementById('but4').onclick=users;

function users() {
	var l1= document.getElementById('log1').value;
	var p1= document.getElementById('pass1').value;
	

	if ( ((l1=='ivan')&&(p1==334455)) || ((l1=='alex')&&(p1==777)) || ((l1=='petr')&& (p1=='b5678')) ) {
		alert('Добро пожаловать');
	}
	else {
		alert('Ошибка входа');
	}
}

// пятое задание

document.getElementById('but5').onclick=years;

function years() {
	var a51= document.getElementById('task51').value;
	var a52= 2017 - a51;


	if ((a51<1900)|| (a51>2017)) {
		alert('Ошибка!!! Введите год рождения в формате ****');
	}
	else if (a52>=16) {
		alert('добро пожаловать');
	}
	else {
		alert('вход воспрещен');
	}
}

// шестое задание

document.getElementById('but6').onclick=experience;

function experience() {
    var a61= document.getElementById('task61').value;

    if (a61<0) {
    	alert('Ошибка!!! Введите число положительное число или 0');
	}
	else if (a61<3) {
    	alert('надбавка 0% ');
	}
	else if (a61<10) {
    	alert('надбавка 10%');
	}
	else if (a61<20) {
    	alert('надбавка 20%');
	}
	// в задании пропущен интервал 20-30 лет, предполагается, что от 20 лет надбавка 30%
	else {
    	alert('надбавка 30%');
	}
}


