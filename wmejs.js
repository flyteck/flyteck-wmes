//for prev/next/nav links, get all WME names

wmeList = ["rocket", "honolulu", "bruno", "ladybird", "mocha", "classical", "soliloquy", "zachariah", "tia", "renee", "ciel", "vatra", "ariana", "estella", "adonis", "romulus", "viski", "saline", "godiva", "aleus", "fluffy", "cain", "bailey", "nettle", "hazel", "snickerdoodle", "caspian", "terracotta", "alsike", "douglas", "phoebe", "jasper", "dew", "polaris", "yorkshire", "acacia", "quincy", "argent", "gnash", "affogato", "unnamed", "cheshire",];
var currentWME = document.getElementById("name").innerHTML.toLowerCase();
var prevWME = undefined;
var nextWME = undefined;

//get the nav menu
var dropwdown = document.getElementById("nav-dropdown");
//iterature through the list, and add everyone to the dropdown
for (i = 0; i < wmeList.length; i++) {
	if (currentWME != wmeList[i]) {
		//don't add if it's the current wme
		dropwdown.innerHTML += '<option value="' + wmeList[i] + '">' + wmeList[i].charAt(0).toUpperCase() + wmeList[i].slice(1) + '</option>';
	} else {
		//set prev and next based on where the match is in the list
		prevWME = parseInt([i]) - parseInt("1");
		nextWME = parseInt([i]) + parseInt("1");
	}
}

//add event listener on change
dropwdown.addEventListener("change", jumpPage)
function jumpPage() {
	//and jump to the selected option's page
	window.location.href = dropwdown.value + ".html";
}

//grab our next and previous buttons
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

prevButton.href = wmeList[prevWME] + ".html";
nextButton.href = wmeList[nextWME] + ".html";


//if prev is less than 0, disable + if next is more than wmeList length, disable
if (prevWME < 0) {
	prevButton.classList.add("disabled");
	prevButton.setAttribute("tabindex","-1");
}
if (nextWME > wmeList.length) {
	nextButton.classList.add("disabled");
	nextButton.setAttribute("tabindex","-1");
}

//set the urls based on the value in WMEList at that i