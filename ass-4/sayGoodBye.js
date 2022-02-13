(function(global){
    var speakWord = "Good Bye";
    var byeSpeaker ={};


byeSpeaker.speak=function(names) {
  console.log(speakWord + " " +names);
}

global.byeSpeaker=byeSpeaker;

})(globalThis)
