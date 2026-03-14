//for prev/next/nav links, get all WME names

wmeList = ["rocket", "honolulu", "bruno", "ladybird", "mocha", "classical", "soliloquy", "zachariah", "tia", "renee", "ciel", "vatra", "ariana", "estella", "adonis", "romulus", "viski", "saline", "godiva", "aleus", "fluffy", "cain", "bailey", "hazel", "snickerdoodle", "caspian", "terracotta", "alsike", "douglas", "phoebe", "jasper", "dew", "polaris", "yorkshire", "acacia", "quincy", "argent", "gnash", "affogato", "solstice", "cheshire", "welsummer", "argyle", "ophelia" ];
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


//disable if we're on first or last
if (wmeList[prevWME] == undefined) {
	prevButton.classList.add("disabled");
	prevButton.setAttribute("tabindex","-1");
}

if (wmeList[nextWME] == undefined) {
	nextButton.classList.add("disabled");
	nextButton.setAttribute("tabindex","-1");
}


////////////////////////

//js to auto update breeding slot counts

//only run this if we have a slot total (to prevent errors on wmes with slots permanently closed)
if (document.getElementById("slots-total") != null) {
	//make up all our variables
	var slotsUsed = document.getElementById("slots-used").innerHTML;
	var creationDate = document.getElementById("creation-date").innerHTML;
	var currentYear = new Date().getFullYear();
	//calculate total slots, and total remaining slots
	var slotsTotal = parseInt(10) + parseInt(currentYear) - parseInt(creationDate);
	var slotsCurrent = slotsTotal - parseInt(slotsUsed);

	//set the current slots and total slots appropriately
	document.getElementById("slots-total").innerHTML = slotsTotal;
	document.getElementById("slots-current").innerHTML = slotsCurrent;
}
