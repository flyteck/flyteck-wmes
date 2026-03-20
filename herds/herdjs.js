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
		console.log(descriptionBox.classList)
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

	//switch the image to the correct WME (this is a bit cumbersome but it DOES work)
	wmeImage.id = wmeChosen;

	if (wmeImage.id == "Rocket") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmrocket.png"
	}
	if (wmeImage.id == "Honolulu") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmhana.png"
	}
	if (wmeImage.id == "Soliloquy") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmsoliloquy.png"
	}
	if (wmeImage.id == "Bruno") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmbruno.png"
	}
	if (wmeImage.id == "Ladybird") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmlady.png"
	}
	if (wmeImage.id == "Mocha") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmmocha.png"
	}
	if (wmeImage.id == "Classical") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmclassical.png"
	}
	if (wmeImage.id == "Zachariah") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmzach.png"
	}
	if (wmeImage.id == "Tia") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmtia.png"
	}
	if (wmeImage.id == "Renee") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmrenee.png"
	}
	if (wmeImage.id == "Ciel") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmciel.png"
	}
	if (wmeImage.id == "Vatra") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmvatra.png"
	}
	if (wmeImage.id == "Cain") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmcain.png"
	}
	if (wmeImage.id == "Estella") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmestella.png"
	}
	if (wmeImage.id == "Adonis") {
		wmeImage.src = "https://flyteck.cfw.me/files/wme/wmehssmadonis.png"
	}

}