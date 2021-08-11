var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
speak();
}
/*code to convert text to speech*/
function speak(){
    var synth=window.speechSynthesis
    speakdata=document.getElementById("textbox").value;
    var convertedText=new SpeechSynthesisUtterance(speakdata);
    synth.speak(convertedText);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
});