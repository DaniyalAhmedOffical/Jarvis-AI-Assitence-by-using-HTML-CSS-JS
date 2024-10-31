
function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        // speak("Hello Sir, How May I Help You?");
        speak("Hello Sir, my name is Jarvis. I was created by Mr. Daniyal, and I am an AI assistant. How may I help you?");

    }

    else if(message.includes("dani")){
        //window.open("https://google.com", "_blank");
        speak("g dani bolo")

    }
    else if(message.includes("wish")){
        //window.open("https://google.com", "_blank");
        speak("Warisha Daniyal LOVE YOU. AP UN KI JAN HA AP MAI JAAN BASTI HA DANIYAL SIR KI WO AP SY BHT PYAR KRTY HAI AP UN K LIYE EK CHAND KA TUKRA HA AP BHT LUCKY HAI K AP KO MERY SIR BHT PYAR KRTY HAI I LOVE YOU MERI JAAN YE DANIYAL SIR KI TARAH SY AP K LIYE WARISHA DANIYAL AHMED ")

        
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
