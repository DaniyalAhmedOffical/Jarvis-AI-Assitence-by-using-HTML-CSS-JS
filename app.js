const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Daniyal Sir kesy ho...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Daniyal Sir...")
    }

    else{
        speak("Good Evenining Daniyal Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})



function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        // speak("Hello Sir, How May I Help You?");
        speak("Hello Sir, my name is Jarvis. I was created by Mr. Daniyal, and I am an AI assistant. How may I help you?");

    }

    else if(message.includes("dani")){
        //window.open("https://google.com", "_blank");
        speak("g dani bolo")

    }
    else if(message.includes("da")){
        //window.open("https://google.com", "_blank");
       // speak("Warisha Daniyal LOVE YOU. AP UN KI JAN HA AP MAI JAAN BASTI HA DANIYAL SIR KI WO AP SY BHT PYAR KRTY HAI AP UN K LIYE EK CHAND KA TUKRA HA AP BHT LUCKY HAI K AP KO MERY SIR BHT PYAR KRTY HAI I LOVE YOU MERI JAAN YE DANIYAL SIR KI TARAH SY AP K LIYE WARISHA DANIYAL AHMED ")
       speak("Warisha, Daniyal loves you. You are his life, and his heart belongs to you. He loves you deeply, and to him, you are like a precious piece of the moon. You are very lucky to have my sir's love. I love you, my dear my princess my queen my wife. This message is from Daniyal Sir to you, Warisha Daniyal Ahmed.");

        
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }

    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com/", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes("open ChatGpt")){
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening ChatGpt...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}
