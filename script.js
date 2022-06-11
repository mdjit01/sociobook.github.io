var settingsmenu = document.querySelector(".settings_menu");
var drakBtn = document.getElementById("dark_btn");
function settingsMenuToggle(){

	settingsmenu.classList.toggle("settings_menu_height");
}
drakBtn.onclick = function(){
	drakBtn.classList.toggle("dark_btn_on");
	document.body.classList.toggle("dark_theme");


	if(localStorage.getItem("theme") == "light"){
		localStorage.setItem("theme","dark");
	}
	else{
		localStorage.setItem("theme","light");
	}
}






if(localStorage.getItem("theme") == "light"){
	drakBtn.classList.remove("dark_btn_on");
	document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme") == "dark"){
	drakBtn.classList.add("dark_btn_on");
	document.body.classList.add("dark_theme");
}
else{
	localStorage.setItem("theme","light");
}

// localStorage.setItem("theme", "light");
// localStorage.getItem("theme");