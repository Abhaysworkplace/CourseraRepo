
(function(global){
    var helloSpeaker={};
    var speakWord = "Hello"
helloSpeaker.speak=function(names) {
  console.log(speakWord + " " +names);
}

global.helloSpeaker=helloSpeaker;

})(globalThis)
