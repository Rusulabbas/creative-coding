let word = "abyss";  // changed the word to abyss
let wc = 0; 

function setup() {
  noCanvas();

  let content = select("body");
  content.attribute("id", "content");

  content.child(createElement("h1", "The Many " + word + "s"));

  while (wc < 50000) {  
    content.child(createElement("h2", String(word + " ").repeat(random(2, 6)).toUpperCase()));

    for (let p = 0; p < random(5, 20); p++) {  // changed number of paragraphs randomly generated
      let paragraph = '';
      for (let s = 0; s < random(3, 20); s++) {   // changed number of sentences in each paragraph
        let internalPunct = [",", ",", ",", ";", " --"]; //added more to list of internal punctuation options
        let endPunct = [".", ".", "?", "!"]; // added more to list of sentence-ending punctuation
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9, 25); // changed repetitions of "abyss" in the sentence
        wc += sentenceLength + 1; // changed the sentence length

        for (let w = 0; w < sentenceLength; w++) {  
          sentence += " " + word;
          if (random() < 0.2) {
            sentence += random(internalPunct);  
          }
        }
        sentence += random(endPunct) + " ";  
        paragraph += sentence;
      }
      content.child(createElement("p", paragraph));
    }
  }

  // Add the "About the Author" section
  let aboutParagraph = "The author of this work is a curious mind, constantly exploring the limits of creativity and repetition. With a deep interest in programming and the unexpected, the author delves into creating unique textual landscapes that transcend the ordinary.";
  let aboutSentence = "Just like the abyss, their fascination with infinite loops and patterns continues to draw them deeper into the world of coding and design.";

  content.child(createElement("h2", "About the Author"));
  content.child(createElement("p", aboutParagraph));
  content.child(createElement("p", aboutSentence));
}

window.PagedPolyfill.preview(); 
