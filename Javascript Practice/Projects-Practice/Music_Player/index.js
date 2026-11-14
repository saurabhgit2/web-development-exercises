
const img = document.querySelector("#img-container img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("#music-audio audio");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const searchInput=document.getElementById('searchInput');
const submitBtn=document.getElementById('submitBtn');

let isPlaying=false;
let songIndex=0;

let songs=[
    {
        name: 'Bhaag Milkha Bhaag',
        artist:'Bhaag Milkha Bhaag',     
    },
    
    {
        name: 'Choo Lo',
        artist:'Choo Lo',     
    },

     {
        name: 'Rock On',
        artist:'Rock On',     
    },

      {
        name: 'ZNMD',
        artist:'ZNMD',     
    },


]

function playMusic(){
    isPlaying=true;
    music.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title','Pause');
   
}

function pauseMusic(){
    isPlaying=false;
    music.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title','Play');
}

// Load song
function loadSong(song){
     title.textContent=song.name;
     artist.textContent=song.artist;
     music.src=`Music/${song.name}.mp3`;
     img.src=`Artist/${song.name}.jpg`;
}

loadSong(songs[songIndex]);

function nextSong(){
    songIndex++;
    
    if (songIndex<=3){
         loadSong(songs[songIndex]);
    }
    else if (songIndex>3){
        songIndex=0;
        loadSong(songs[songIndex]);
    }
    playMusic();
}

function prevSong(){
    songIndex--;
    
    if (songIndex>=0){
         loadSong(songs[songIndex]);
    }
    else if (songIndex<0){
        songIndex=3;
        loadSong(songs[songIndex]);
    }
    playMusic();
}

playBtn.addEventListener('click',()=>(isPlaying ? pauseMusic():playMusic()));
nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);

