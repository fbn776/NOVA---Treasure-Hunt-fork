const KEY = 'TESTKEY'; ///KEY for encryption and decryption

const userData = {
	name: null,
	start: null,
	end: null,
};
const mainCont = s(".main-cont");
const startMenu = s('.start-menu');
const nameInput = s('#nameInput');

let userQR = createElement('div');

function getStarted() {
	if(!nameInput.value) {
		alert('Name cannot be empty! Please try again')
		return false;
	}
	userData.name = nameInput.value;
	startMenu.style.transform = 'scale(0) translateY(100%)';
	startMenu.addEventListener("transitionend", () => {
		startMenu.style.display = 'none'
	});
}


//ID of the page to be displayed first.
const startPageID = 0;
let lastVisited;
let state = {};

function startGame() {
	state = {};
	showTextNode(startPageID);
}

function showTextNode(textNodeIndex) {
	const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);

	//Animation code;
	let animSign = (lastVisited || {}).id > textNode.id ? "-" : "";
	let negAnimSign = animSign === "-" ? "" : "-";
	for (a of mainCont.children) {
		a.style.transform = `translateX(${negAnimSign}100%) scale(0)`;
		//Remove the previous element when it finishes its transition
		a.addEventListener("transitionend", () => {
			a.remove();
		});
	}

	let container = createElement("div", "container", "mainCont");
	//Move the container out of the screen for animation start
	container.style.transform = `translateX(${animSign}100%) scale(0)`;

	let qPic = createElement("div", "qpic");
	let qImg = createElement("img");

	let text = createElement("div", "test-des", "text");
	let optBtns = createElement("div", "btn-grid", "option-buttons");

	text.innerHTML = textNode.text;

	let img_dir = "images/";
	qImg.src = img_dir.concat(textNode.image);
	qImg.width = 300;

	qPic.appendChild(qImg);

	textNode.options.forEach((option) => {
		if (showOption(option)) {
			const button = document.createElement("button");
			button.innerText = option.text;
			button.classList.add("btn");
			button.addEventListener("click", () => {
				//Some buttons do specific events; for triggering those custom events;
				if(option.onclick){
					option.onclick();
				}
				selectOption(option);
			});
			optBtns.appendChild(button);
		}
	});

	container.appendChild(qPic);
	container.appendChild(text);
	container.appendChild(optBtns);
	mainCont.appendChild(container);

	setTimeout(() => {
		container.style.transform = "translateX(0px) scale(1)";
	});

	lastVisited = JSON.parse(JSON.stringify(textNode));
}

function showOption(option) {
	return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
	const nextTextNodeId = option.nextText;
	if (nextTextNodeId <= 0) {
		return startGame();
	}
	state = Object.assign(state, option.setState);
	showTextNode(nextTextNodeId);
}

startGame();
