// Creates the depth of the Markow 
let rm = RiTa.markov(4);

//loading the text from the two books I selected
let data = document.getElementById("source").innerText;

// Adds the data
rm.addText(data);

function setup() {
    // generates 6 lines of text 
    let lines = rm.generate(6);

// find the element to add to
    let letter = select("#letter"); 

// add a salutation
    letter.child( createP('My Dearest Harrington,'));

// loop through the array of lines, adding each as a new p element
    for (let l = 0; l < lines.length; l++){
	let paragraph = createP(lines[l]);
	letter.child(paragraph);
}

// add a closing
    letter.child( createP('Sincerely,<br>Markov'));
}

//changing the letter everytime someone clicks their mosue
function mousePressed() {
    letter.remove();
    letter = createDiv();
    letter.id("letter"); 

    setup();
}

