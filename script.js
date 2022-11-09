const msg = new SpeechSynthesisUtterance(document.querySelector('[name="text"]').textContent);
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll(
  '[type="range"], [name="text"]'
);
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

function speakNow() {
    message.lang = "en-US";
    
    const voices = speechSynthesis.getVoices().filter(voice => voice.lang === "en-US");
  message.voice = voices[0];
  
    speechSynthesis.speak(message);
   }

speakButton.addEventListener("click", speakNow);