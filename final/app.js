$(".enterbutton").click(function(){
    $(".landing").toggleClass("fade");

    setTimeout(() => {
     $(".landing").toggleClass("gone");
    }, 250)

}
);


$(".huh").click(function(){
    $(".explain").removeClass("gone");
    $(".huh").addClass("gone");
})

$(".x-btn").click(function(){
  $(".explain").addClass("gone");
  $(".huh").removeClass("gone");
})

const polySynth = new Tone.PolySynth().toDestination();

const keyboard = new AudioKeys();

let activeNotes = {};

keyboard.down((key) => {
    console.log(key);
    if (!activeNotes[key.note]) {
        activeNotes[key.note] = true;
        polySynth.triggerAttack(key.frequency);  // This will handle multiple notes at once
    }
});

keyboard.up((key) => {
    if (activeNotes[key.note]) {
        polySynth.triggerRelease(key.frequency);  // Release note when key is released
        delete activeNotes[key.note];  // Clean up tracking
    }
});


const clickNotes = new Tone.PolySynth().toDestination();

// A helper function to trigger attack and release when user interacts with the key
function playNoteOn(note) {
    console.log("Note on:", note);
    clickNotes.triggerAttack(note);  // Trigger attack when the key is pressed
}

function stopNoteOff(note) {
    console.log("Note off:", note);
    clickNotes.triggerRelease(note);  // Trigger release when the key is released
}

//start note on click
document.querySelector(".c").addEventListener('mousedown', () => playNoteOn("C4"));
document.querySelector(".c_sharp").addEventListener('mousedown', () => playNoteOn("C#4"));
document.querySelector(".d").addEventListener('mousedown', () => playNoteOn("D4"));
document.querySelector(".d_sharp").addEventListener('mousedown', () => playNoteOn("D#4"));
document.querySelector(".e").addEventListener('mousedown', () => playNoteOn("E4"));
document.querySelector(".f").addEventListener('mousedown', () => playNoteOn("F4"));
document.querySelector(".f_sharp").addEventListener('mousedown', () => playNoteOn("F#4"));
document.querySelector(".g").addEventListener('mousedown', () => playNoteOn("G4"));
document.querySelector(".g_sharp").addEventListener('mousedown', () => playNoteOn("G#4"));
document.querySelector(".a").addEventListener('mousedown', () => playNoteOn("A4"));
document.querySelector(".a_sharp").addEventListener('mousedown', () => playNoteOn("A#4"));
document.querySelector(".b").addEventListener('mousedown', () => playNoteOn("B4"));
document.querySelector(".hc").addEventListener('mousedown', () => playNoteOn("C5"));
document.querySelector(".hc_sharp").addEventListener('mousedown', () => playNoteOn("C#5"));
document.querySelector(".hd").addEventListener('mousedown', () => playNoteOn("D5"));
document.querySelector(".hd_sharp").addEventListener('mousedown', () => playNoteOn("D#5"));
document.querySelector(".he").addEventListener('mousedown', () => playNoteOn("E5"));
document.querySelector(".hf").addEventListener('mousedown', () => playNoteOn("F5"));

// end note on release
document.querySelector(".c").addEventListener('mouseup', () => stopNoteOff("C4"));
document.querySelector(".c_sharp").addEventListener('mouseup', () => stopNoteOff("C#4"));
document.querySelector(".d").addEventListener('mouseup', () => stopNoteOff("D4"));
document.querySelector(".d_sharp").addEventListener('mouseup', () => stopNoteOff("D#4"));
document.querySelector(".e").addEventListener('mouseup', () => stopNoteOff("E4"));
document.querySelector(".f").addEventListener('mouseup', () => stopNoteOff("F4"));
document.querySelector(".f_sharp").addEventListener('mouseup', () => stopNoteOff("F#4"));
document.querySelector(".g").addEventListener('mouseup', () => stopNoteOff("G4"));
document.querySelector(".g_sharp").addEventListener('mouseup', () => stopNoteOff("G#4"));
document.querySelector(".a").addEventListener('mouseup', () => stopNoteOff("A4"));
document.querySelector(".a_sharp").addEventListener('mouseup', () => stopNoteOff("A#4"));
document.querySelector(".b").addEventListener('mouseup', () => stopNoteOff("B4"));
document.querySelector(".hc").addEventListener('mouseup', () => stopNoteOff("C5"));
document.querySelector(".hc_sharp").addEventListener('mouseup', () => stopNoteOff("C#5"));
document.querySelector(".hd").addEventListener('mouseup', () => stopNoteOff("D5"));
document.querySelector(".hd_sharp").addEventListener('mouseup', () => stopNoteOff("D#5"));
document.querySelector(".he").addEventListener('mouseup', () => stopNoteOff("E5"));
document.querySelector(".hf").addEventListener('mouseup', () => stopNoteOff("F5"));



// Map each key to its corresponding div and pressed class
const keyMap = {
    'a': { selector: '.c', pressedClass: 'wpressed' },
    'w': { selector: '.c_sharp', pressedClass: 'bpressed' },
    's': { selector: '.d', pressedClass: 'wpressed' },
    'e': { selector: '.d_sharp', pressedClass: 'bpressed' },
    'd': { selector: '.e', pressedClass: 'wpressed' },
    'f': { selector: '.f', pressedClass: 'wpressed' },
    't': { selector: '.f_sharp', pressedClass: 'bpressed' },
    'g': { selector: '.g', pressedClass: 'wpressed' },
    'y': { selector: '.g_sharp', pressedClass: 'bpressed' },
    'u': { selector: '.a_sharp', pressedClass: 'bpressed' },
    'h': { selector: '.a', pressedClass: 'wpressed' },
    'j': { selector: '.b', pressedClass: 'wpressed' },
    'k': { selector: '.hc', pressedClass: 'wpressed' },
    'o': { selector: '.hc_sharp', pressedClass: 'bpressed' },
    'l': { selector: '.hd', pressedClass: 'wpressed' },
    'p': { selector: '.hd_sharp', pressedClass: 'bpressed' },
    ';': { selector: '.he', pressedClass: 'wpressed' },
    "'": { selector: '.hf', pressedClass: 'wpressed' }
  };
  
  // Function to handle key press
  function handleKeyPress(event) {
    const key = event.key.toLowerCase();  // Get the key pressed and convert to lowercase
  
    if (keyMap[key]) {
      const keyDiv = document.querySelector(`.key${keyMap[key].selector}`);
      keyDiv.classList.add(keyMap[key].pressedClass);  // Add the appropriate "pressed" class
    }
  }
  
  // Function to handle key release
  function handleKeyRelease(event) {
    const key = event.key.toLowerCase();  // Get the key released and convert to lowercase
  
    if (keyMap[key]) {
      const keyDiv = document.querySelector(`.key${keyMap[key].selector}`);
      keyDiv.classList.remove(keyMap[key].pressedClass);  // Remove the "pressed" class
    }
  }
  
  // Add event listeners for keydown and keyup
  document.addEventListener('keydown', handleKeyPress);
  document.addEventListener('keyup', handleKeyRelease);

var audioOne = document.getElementById("audioOne");

function togglePlay() {
  $(".play1").toggleClass("gone");
  $(".pause1").toggleClass("gone");
  return audioOne.paused ? audioOne.play() : audioOne.pause();
};

var audioTwo = document.getElementById("audioTwo");

function secondPlay() {
  $(".play2").toggleClass("gone");
  $(".pause2").toggleClass("gone");
  return audioTwo.paused ? audioTwo.play() : audioTwo.pause();
};

var audioThree = document.getElementById("audioThree");

function thirdPlay() {
  $(".play3").toggleClass("gone");
  $(".pause3").toggleClass("gone");
  return audioThree.paused ? audioThree.play() : audioThree.pause();
};

var audioFour = document.getElementById("audioFour");

function fourthPlay() {
  $(".play4").toggleClass("gone");
  $(".pause4").toggleClass("gone");
  return audioFour.paused ? audioFour.play() : audioFour.pause();
};


