/////////////Main Nav
//for prev/next/nav links, get all herd names

herdList = ["rocketherd", "aleusherd", "caspianherd", "bachelorherd", "domesticherd", "lonerherd" ];
var currentherd = document.getElementById("herdname").innerHTML.toLowerCase();
var prevherd = undefined;
var nextherd = undefined;

//get the nav menu
var dropwdown = document.getElementById("nav-dropdown");
//iterature through the list, and add everyone to the dropdown
for (i = 0; i < herdList.length; i++) {
	if (currentherd != herdList[i]) {
		//don't add if it's the current herd
		dropwdown.innerHTML += '<option' + ' id=' + herdList[i] + ' value="' + herdList[i] + '">' + herdList[i] + '</option>';
	} else {
		//set prev and next based on where the match is in the list
		prevherd = parseInt([i]) - parseInt("1");
		nextherd = parseInt([i]) + parseInt("1");
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

prevButton.href = herdList[prevherd] + ".html";
nextButton.href = herdList[nextherd] + ".html";


//disable if we're on first or last
if (herdList[prevherd] == undefined) {
	prevButton.classList.add("disabled");
	prevButton.setAttribute("tabindex","-1");
}

if (herdList[nextherd] == undefined) {
	nextButton.classList.add("disabled");
	nextButton.setAttribute("tabindex","-1");
}

///uhhhh we need to fix the names after the fact ???
if (document.getElementById("rocketherd") != null) {
	document.getElementById("rocketherd").innerHTML = "The Foothills Herd";
}
if (document.getElementById("caspianherd") != null) {
	document.getElementById("caspianherd").innerHTML = "The Ocean's Embrace Herd";
}
if (document.getElementById("aleusherd") != null) {
	document.getElementById("aleusherd").innerHTML = "High Mountain Herd";
}
if (document.getElementById("bachelorherd") != null) {
	document.getElementById("bachelorherd").innerHTML = "Bachelor Herd";
}
if (document.getElementById("domesticherd") != null) {
	document.getElementById("domesticherd").innerHTML = "Wintergreen Stables";
}
if (document.getElementById("lonerherd") != null) {
	document.getElementById("lonerherd").innerHTML = "Loners";
}


/////////////Relationships
//Populate dropdown menus with names of WMEs

//get members box, and all links inside (each member)
var membersBox = document.getElementById("members");
var members = membersBox.getElementsByTagName("a");
var names = membersBox.querySelectorAll(".name");

var dropdown1 = document.getElementById("dropdown-1");
var dropdown2 = document.getElementById("dropdown-2");

//and description box 
const descriptionBox = document.getElementById("description-box");


//go through each, get names, add them to the dropdowns on both sides
for (i = 0; i < members.length; i++) {
	dropdown1.innerHTML += '<option value="' + names[i].innerHTML + '">' + names[i].innerHTML + '</option>';
	dropdown2.innerHTML += '<option value="' + names[i].innerHTML + '">' + names[i].innerHTML + '</option>';
}

//add change listeners to the dropdowns
dropdown1.addEventListener("change", changeWME);
dropdown2.addEventListener("change", changeWME);

//Switch the wme in the box, change the image, and update classes on the description to display the right one
function changeWME() {
	//get the box you've toggled,
	toggleBox = event.target
	//the image above it,
	wmeImage = toggleBox.previousElementSibling;
	//the current value of the togglebox,
	wmeChosen = toggleBox.value;

	//check how many classes are on the descriptionBox
	if (descriptionBox.classList.length == 2) {
		//if there's two classes, toggle the correct one off and replace
		if (toggleBox.id == "dropdown-1") {
			descriptionBox.classList = wmeChosen + " " + descriptionBox.classList[1];
		}
		if (toggleBox.id == "dropdown-2") {
			descriptionBox.classList = descriptionBox.classList[0] + " " + wmeChosen;
		}
		
	} else {
		//otherwise, add the name on the appropriate side
		if (toggleBox.id == "dropdown-1") {
			descriptionBox.classList = wmeChosen + " " + descriptionBox.classList[0];
		}
		if (toggleBox.id == "dropdown-2") {
			descriptionBox.classList = descriptionBox.classList[0] + " " + wmeChosen;
		}
	}

	//clear undefined if needed, as sometimes it's created on the initial add
	if (descriptionBox.classList.contains("undefined")) {
		descriptionBox.classList.remove("undefined");
	}

	//find the current pairing, and make it show their box
	if (descriptionBox.classList.length == 2) {
		//check if there's a div in descriptions with the correct pair of names
		var currentPair = descriptionBox.querySelector("." + descriptionBox.classList[0] + "." + descriptionBox.classList[1]);

		if (currentPair != null) {
			//check if we have an active already n banish it
			var currentActive = descriptionBox.querySelector(".active")
			if (currentActive != null) {
				currentActive.classList.remove("active");
			}
			//add active to the current pair
			currentPair.classList.add("active");
		}
	}

	//switch the image to the correct WME
	//go through members
	for (i = 0; i < members.length; i++) {
		//if the name matches the wme chosen
		if (members[i].querySelector(".name").innerHTML == wmeChosen) {
			//grab the image in that box
			var imageURL = members[i].querySelector("img").src;
			//and set the SRC of the image below
			wmeImage.src = imageURL
		}
	}


}