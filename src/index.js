import "./styles/reset.css" 
import "./styles/navbar.scss"
import "./styles/body.scss"
import "./styles/image.scss"
import "./styles/canvas.scss"
//  ^^^^ causes a Uncaught SyntaxError: Cannot use import statement outside a module / also messes with my css once i remove it


const description = document.querySelector(".description");
const strDescription = description.textContent;
const splitWords = strDescription.split(" ");
description.textContent = "";

// console.log(splitWords.length)
for(let i = 6; i < splitWords.length; i++){
   description.innerHTML += "<span>" + `${splitWords[i]}&nbsp` + "</span>";
//    console.log(splitWords[i])
}
// console.log(strDescription)
// debugger
let word = 0;
let timer = setInterval(onTick, 100);
//  console.log(description.innerHTML)
function onTick(){
    const span = description.querySelectorAll('span')[word];
    span.classList.add("fade");
    word++;
    
    // debugger
    // console.log(word)
    // console.log(splitWords.length - 6)
    if(word === splitWords.length - 6){
        // debugger
        complete();
        return;
    }
    
}

function complete(){
    clearInterval(timer);
    timer = null;
}



class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
