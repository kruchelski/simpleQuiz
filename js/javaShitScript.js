function submitAnswers() {
	//make sure the background of the results div is blue
	document.getElementById('results').style.backgroundColor="blue";

	// main var to show results
	var totalQuestions = 5;
	var score = 0;
	var i;

	//get user input
	var questions = [
	document.forms["quizForm"]["q1"].value,
	document.forms["quizForm"]["q2"].value,
	document.forms["quizForm"]["q3"].value,
	document.forms["quizForm"]["q4"].value,
	document.forms["quizForm"]["q5"].value,
	];	

	//Validação
	var errormsg = "";
	var errorSt = false;
	for(i = 0; i < totalQuestions; i++) {
		if (questions[i] == null || questions[i] == '') {
			errormsg = errormsg + "Question " + (i + 1) + " | ";
			errorSt = true;
		}
	}
	if (errorSt) {
		errormsg = errormsg + "Missing!";
		document.getElementById('results').innerHTML = "<h2>"+errormsg+"</h2";
		document.getElementById('results').style.backgroundColor="red";
	}else {
		//Set correct answers
		var answers = ['a', 'c', 'b', 'e', 'd'];

		//Check answers
		for (i = 0; i < totalQuestions; i++) {
			if (questions[i] == answers[i]) {
				score++;
			}
		}

		//Prepare final message
		var finalResult = "<h3>";
		if (score <=2) {
			finalResult = finalResult + "You can do better, try harder! ";
			document.getElementById('results').style.backgroundColor = "orange";
		} else if (score <=4) {
			finalResult = finalResult + "Well done! ";
			document.getElementById('results').style.backgroundColor = "rgb(185, 182, 12)";
		} else {
			finalResult = finalResult + "Excelent! You're awesome! ";
			document.getElementById('results').style.backgroundColor = "blue";
		}
		finalResult = finalResult + "You get <span>" + score + "</span> out of <span>" + totalQuestions + "</span></h3>";
		
		//Display message
		document.getElementById('results').innerHTML = finalResult;
	}
	return false;
}


