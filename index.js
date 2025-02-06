(() =>  {

    /* -- -- TODO: day and night cycle based on user computer's date -- -- 
    const _background = document.getElementById("background");
    var _date = new Date();

    if (_date.getHours() >= 0 && _date.getHours() < 6) {
	_background.style = "background: linear-gradient(0deg, rgba(35,6,38,1) 0%, rgba(34,42,83,1) 100%);";
    } else if (_date.getHours() >= 6 && _date.getHours() < 12) {
	_background.style = "background: linear-gradient(0deg, rgba(235,216,202,1) 0%, rgba(163,226,216,1) 100%);";
    } else if (_date.getHours() >= 12 && _date.getHours() < 18) {
	_background.style = "background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(109,209,226,1) 15%);";
    } else {
	_background.style = "background: linear-gradient(0deg, rgba(26,25,64,1) 0%, rgba(25,120,227,1) 100%);";
	}
	*/
 
    
    // if (_date.getHours() >= 0 && _date.getHours() <= 6) {
    // 	alert("evening");
    // 	_background.style = "background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(16,19,47,1) 20%, rgba(35,2,37,1) 73%);";
    // } else if (_date.getHours() >= 6 && _date.getHours() <= 12) {
    // 	alert("morning");
    // 	_background.style = "background: linear-gradient(0deg, rgba(191,83,25,1) 0%, rgba(229,201,169,1) 26%, rgba(221,214,187,1) 47%, rgba(249,152,152,1) 79%);";
    // } else if (_date.getHours() >= 12 && _date.getHours() < 18) {
    // 	alert("afternoon");
    // 	_background.style = "background: linear-gradient(0deg, rgba(60,56,131,1) 0%, rgba(107,138,184,1) 35%, rgba(205,247,255,1) 100%);";
    // } else if (_date.getHours() >= 18 && _date.getHours() < 0) {
    // 	alert("late afternoon");
    // 	_background.style = "background: linear-gradient(0deg, rgba(60,56,131,1) 0%, rgba(107,138,184,1) 35%, rgba(205,247,255,1) 100%);";
    // } else {
    // 	alert("ERROR");
    // }

})();


/* 		---- TODO: welcome door animation ----
		var _door_opened = false;
		var _door = document.getElementById("door");
		_door.addEventListener('mouseup', () => {
		if (_door_opened) return;
		
		_door_opened = true;
		_door.src = "src/door.gif";
		_door.parentNode.classList.add("doom-anim-class");
		setTimeout(() => {
		_door.src = "src/door-end.png";
		setTimeout(() => {
		document.getElementById("header").removeChild(_door.parentNode);
		}, (1050));
		}, (1250));
		});
*/
