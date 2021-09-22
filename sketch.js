let firstStart = false
let fft

function preload(){
  song = loadSound('Music/NF - If You Want Love (1).mp3')
}

function setup() {
  // fast fourier transformation
  fft = new p5.FFT()
  
  createCanvas(windowWidth, windowHeight)
  
  // mimics the autoplay policy
  getAudioContext().suspend();

  // This won't play until the context has resumed
  song.play();
}

function draw() {
  background(0);
  stroke(255)
  
  var wave = fft.waveform()
  
  for(var i = 0; i < width; i++){
    // maps the returned values to screen size and turns it into integer
    var index = floor(map(i, 0, width, 0, wave.length))
    
    var x = i
    var y = wave[index] * 300 + height / 2
    point(x,y)
  }
}

function mousePressed() {
  if (!firstStart){
    userStartAudio();
    firtstStart = true
  }
  
  if (song.isPlaying()){
    song.pause()
  }
  
  else{song.play()}
}