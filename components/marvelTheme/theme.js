function marvelTheme(){

    return `<span class="theme">
    <audio id="marvelAudio" loop>
        <source src="" type="audio/ogg">
        <source src="../../assets/MarvelTheme.mp3" type="audio/mpeg">
    </audio>
    <span id="play" onclick="playAudio()">
        <i class="fa fa-volume-off" aria-hidden="true" style="font-size:32px;color:rgb(46, 45, 45)"></i>
    </span>
    <span id="pause" onclick="pauseAudio()">
        <i class="fa fa-volume-up" aria-hidden="true" style="font-size:32px;color:rgb(46, 45, 45)"></i>
    </span>
</span>`
 }
 
 export default marvelTheme