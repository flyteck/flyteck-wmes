////////////////////////////////////////////
//overall herd toggles

var toggles = document.getElementsByClassName("herd-toggle");

for (i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener("click", herdToggle)
}

function herdToggle() {
	var herdCollapse = event.target.parentElement.parentElement.querySelector(".herd-collapse");
	if (!herdCollapse.classList.contains("open")) {
		herdCollapse.style.display = "flex";
		setTimeout(() => {
		  herdCollapse.classList.add("open");
		}, 100);
	} else {
		herdCollapse.classList.remove("open");
		setTimeout(() => {
		  herdCollapse.style.display = "";
		}, 400);
	}
}

/////////////////////////////////////////
//Tab container

//get the buttons in the whole page
const tabButtons = document.getElementsByClassName("tab-button");

//add listeners to any tab buttons
for (i = 0; i < tabButtons.length; i++) {
	tabButtons[i].addEventListener("click", tabToggle)
}

function tabToggle() {
	//grab flexible vars
	var tabContainer = event.target.parentElement.parentElement;
	var tabs = tabContainer.getElementsByClassName("tab");

	//get the name of the new tab
	var newTab = event.target.id.replace("-button","");
	
	//hide all tabs and buttons
	for (i = 0; i < tabButtons.length; i++) {
		tabButtons[i].classList.remove("open");
	}
	for (i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("open");
	}

	//open new tab, make button active
	//this can be switched to "tabContainer" not document if we move from IDs to classes
	document.getElementById(newTab).classList.add("open");
	event.target.classList.add("open");
}