
// select the pixelCanvas
const pixelCanvas = document.querySelector('#pixelCanvas');


// Function that colors the cells
function changeCellBkgrnd() {
// see what current color is
	let currentColor = this.style.backgroundColor;
// get color value from color picker
	let chooseColor = document.querySelector('#colorPicker').value;

	// check if no color. if so, add color; if not, remove color.	
	if (currentColor === '') {
		this.style.backgroundColor = chooseColor;
	} else {
		this.style.backgroundColor = '';
	}
}


function makeGrid() {
// Your code goes here! 
	var theInfoBox = document.querySelector('#gridInformationBox');
	var grHeight = document.querySelector('#inputHeight').value;
	var grWidth = document.querySelector('#inputWidth').value;

	// if there is a grid, reset it to redraw new
	if (pixelCanvas.firstChild != null) {
		resetGrid();
	} 
	// else the canvas is empty; check the height & width to draw new grid	
	else {
		if (grHeight >= 3 && grHeight <= 33 && grWidth >= 3 && grWidth <= 33) {
			// run a loop of the rows using height input
			for (i = 0; i < grHeight; i++) {
				//create table-rows
				pixelCanvas.appendChild(document.createElement('tr'));
				for (j = 0; j < grWidth; j++) {
					// insert <td> for grid boxes
					pixelCanvas.lastChild.appendChild(document.createElement('td'));
					// add listener events to table-data boxes for coloring
					let thisCellHere = 
						pixelCanvas.lastElementChild.lastElementChild;
					thisCellHere.addEventListener('click', changeCellBkgrnd);
				}
			}
		} 
		else {
			theInfoBox.textContent = "Choose a height & width between 3 & 33";
		}
	}
}


// add attribute to submit button to run makeGrid()
var canvasButton = document.querySelector('#drawCanvasButton');
canvasButton.setAttribute('onclick', 'makeGrid();');


function resetGrid() {
// Prompt for answer
	var answerMe = prompt("Want to reset the current grid? " +
			"Enter: \'yes\' or \'no\'.");
	if (answerMe == "no") {
		return
	}
	else if (answerMe == "yes") {
		let grLength = pixelCanvas.childElementCount;
		for (i = 0; i < grLength; i++) {
			// console.log("loop " + i);
			pixelCanvas.firstElementChild.remove();
		}
		let theInfoBox = document.querySelector('#gridInformationBox');
		theInfoBox.textContent = "You reset have reset the grid.";
		makeGrid();
	}
	else {
		resetGrid();
	}
}

