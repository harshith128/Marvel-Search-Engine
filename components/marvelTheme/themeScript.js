

    const playAudio = () => { 
        document.getElementById("play").style.display = "none";
        document.getElementById("pause").style.display = "block";
        document.getElementById("marvelAudio").play(); 
    }  

    const pauseAudio = () => { 
        document.getElementById("play").style.display = "block";
        document.getElementById("pause").style.display = "none";
        document.getElementById("marvelAudio").pause();
    }