'use strict'

// Задание 1

const addTime = function(){
	const timer = document.getElementById("timer");	
	if (timer.textContent == 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(time);
		} else timer.textContent -= 1;
	}
let time = setInterval(addTime, 1000);