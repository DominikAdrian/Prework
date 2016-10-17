var user = {}
var responses = []



function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

question1();



function question2() {
var firstQuestion = prompt('Did FC Bayern München win the Champions League in 2013? (yes or no)')
if (firstQuestion.toLowerCase() === 'yes') {
	firstQuestion = true
} else if (firstQuestion.toLowerCase() === 'no') {
	response = false
} else {
	alert("Please answer with yes or no only");
	return question2();
}
responses.push(firstQuestion);
}

question2();



function question3() {
  var js = prompt('What is the capital of Estonia: Tallinn, Riga, Vilnius, or none of them?');
  js = js.toLowerCase();
  switch (js) {
   	case 'tallinn':
  	response = true;
  	break;
  	case 'riga':
  	response = false;
  	break;
  	case 'vilnius':
  	response = false;
  	break
  	case '':
  	response = false;
  	break
  }
  responses.push(response);
}
question3();



function question4() {
  var age = prompt('Is Johnny Depp more than 50 years old? (yes or no)');
  age = age.toLowerCase();
  switch (age) {
  	case 'yes':
  	response = true;
  	break;
  	case 'no':
  	response = false;
  	break;
  }
responses.push(response);
}

question4();



function evaluate(responsesArray) {

var correct_answers = 0;
var incorrect_answers = 0;
	for (var n = 0; n < responses.length; n ++) {
		if (responses [n] === true){
			correct_answers += 1;
			user.correct_answers = correct_answers
		}
		else {
			incorrect_answers += 1;
			incorrect_answers = incorrect_answers
		}
	}
	showResults()
}


function showResults() {
	alert( user.name + ', you have answered ' + responses.length +' questions')
	alert ('You answered ' + user.correct_answers + ' question(s) correctly and ' + user.incorrect_answers + ' question(s) incorrectly')

}

evaluate(responses);