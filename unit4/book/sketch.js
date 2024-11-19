let word = "abyss";  // changed the word to "abyss"
let wc = 0;

function setup() {

  noCanvas();

  let content = select("body");
  content.attribute("id", "content");

  content.child(createElement("h1", "Many " + word + "s"));  
  content.style("font-family",  'Verdana');  //added a font
  

  while (wc < 50000) {
    content.child(createElement("h2", String(word + " ").repeat(random(2, 6)).toUpperCase()));  
    
    for (let p = 0; p < random(5, 10); p++) {  // changed number of paragraphs randomly generated
      let paragraph = '';
      for (let s = 0; s < random(3, 10); s++) {  // changed number of sentences in each paragraph

        let internalPunct = [",", ",", ",", ";", " --", ":"];  //added more to list of internal punctuation options

        let endPunct = [".", ".", "?", "!", "!!", "..."];  // added more to list of sentence-ending punctuation

        let sentence = word.charAt(0).toUpperCase() + word.slice(1); 
        sentence += " " + word.repeat(random(2, 5));  // changed repetitions of "abyss" in the sentence

        let sentenceLength = random(5, 20);  // changed the sentence length

        wc += sentenceLength;

        for (let w = 0; w < sentenceLength; w++) {
          sentence += " " + word;  
          if (random() < 0.2) {  
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " ";  
        paragraph += sentence;  
      }
      content.child(createElement("p", paragraph));  // add the paragrah to the content 
  }

  window.PagedPolyfill.preview();
}
}