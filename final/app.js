$(".enterbutton").click(function(){
    $(".landing").toggleClass("fade");

    setTimeout(() => {
     $(".landing").toggleClass("gone");
    }, 250)

}
);


const synth = new Tone.Synth().toDestination();

const keyboard = new AudioKeys();

keyboard.down((key)=>{
    console.log(key)
    synth.triggerAttackRelease(key.frequency, "8n");
})


function playNote(note) {
    console.log(note);
    synth.triggerAttackRelease(note, "8n");
}

document.querySelector(".c").addEventListener('click', () => playNote("C4"));
document.querySelector(".c_sharp").addEventListener('click', () => playNote("C#4"));
document.querySelector(".d").addEventListener('click', () => playNote("D4"));
document.querySelector(".d_sharp").addEventListener('click', () => playNote("D#4"));
document.querySelector(".e").addEventListener('click', () => playNote("E4"));
document.querySelector(".f").addEventListener('click', () => playNote("F4"));
document.querySelector(".f_sharp").addEventListener('click', () => playNote("F#4"));
document.querySelector(".g").addEventListener('click', () => playNote("G4"));
document.querySelector(".g_sharp").addEventListener('click', () => playNote("G#4"));
document.querySelector(".a").addEventListener('click', () => playNote("A4"));
document.querySelector(".a_sharp").addEventListener('click', () => playNote("A#4"));
document.querySelector(".b").addEventListener('click', () => playNote("B4"));
document.querySelector(".hc").addEventListener('click', () => playNote("C5"));
document.querySelector(".hc_sharp").addEventListener('click', () => playNote("C#5"));
document.querySelector(".hd").addEventListener('click', () => playNote("D5"));
document.querySelector(".hd_sharp").addEventListener('click', () => playNote("D#5"));
document.querySelector(".he").addEventListener('click', () => playNote("E5"));
document.querySelector(".hf").addEventListener('click', () => playNote("F5"));



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

var myAudio = document.getElementById("myAudio");

function togglePlay() {
  $(".play1").toggleClass("gone");
  $(".pause1").toggleClass("gone");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

var audioTwo = document.getElementById("audioTwo");

function secondPlay() {
  $(".play2").toggleClass("gone");
  $(".pause2").toggleClass("gone");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


