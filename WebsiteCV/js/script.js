$('.collapse').collapse("toggle")
var shiftWindow = function() { scrollBy(0, -100) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

function toggle_ph() {
	var ph = document.getElementById("ph");
	var pl = document.getElementById("pl");
	var l = document.getElementById("l");
	var Prs = document.getElementById("Prs");
	var Pes = document.getElementById("Pes");
	if(ph.style.display == "none") {
    	ph.style.display = "block";
		pl.style.display = "none";
		l.style.display = "none";
		Prs.style.display = "none";
		Pes.style.display = "none";
  	}
}
function toggle_pl() {
	var ph = document.getElementById("ph");
	var pl = document.getElementById("pl");
	var l = document.getElementById("l");
	var Prs = document.getElementById("Prs");
	var Pes = document.getElementById("Pes");
	if(pl.style.display == "none") {
    	ph.style.display = "none";
		pl.style.display = "block";
		l.style.display = "none";
		Prs.style.display = "none";
		Pes.style.display = "none";
  	}
}
function toggle_l() {
	var ph = document.getElementById("ph");
	var pl = document.getElementById("pl");
	var l = document.getElementById("l");
	var Prs = document.getElementById("Prs");
	var Pes = document.getElementById("Pes");
	if(l.style.display == "none") {
    	ph.style.display = "none";
		pl.style.display = "none";
		l.style.display = "block";
		Prs.style.display = "none";
		Pes.style.display = "none";
  	}
} 
function toggle_prs() {
	var ph = document.getElementById("ph");
	var pl = document.getElementById("pl");
	var l = document.getElementById("l");
	var Prs = document.getElementById("Prs");
	var Pes = document.getElementById("Pes");
	if(Prs.style.display == "none") {
    	ph.style.display = "none";
		pl.style.display = "none";
		l.style.display = "none";
		Prs.style.display = "block";
		Pes.style.display = "none";
  	}
} 
function toggle_pes() {
	var ph = document.getElementById("ph");
	var pl = document.getElementById("pl");
	var l = document.getElementById("l");
	var Prs = document.getElementById("Prs");
	var Pes = document.getElementById("Pes");
	if(Pes.style.display == "none") {
    	ph.style.display = "none";
		pl.style.display = "none";
		l.style.display = "none";
		Prs.style.display = "none";
		Pes.style.display = "block";
  	}
}   