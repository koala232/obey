;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      var div = document.getElementById("main_container");
      div.style.display = "flex";
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

function button_1_click() {
  audio.play();
  var div = document.getElementById("SITE");
  div.style.display = "block";
  deleting()
}

function deleting() {
  var button = document.getElementById("button_1");
  button.style.display = "none";
}

function changeTitle() {
  const titles = ["Sped.lol", "K.Dot", "Have Fun", "Kung Fu Kenny", "King Kunta", "Ripcord", "God is Good"];
  const randomIndex = Math.floor(Math.random() * titles.length);
  const randomTitle = titles[randomIndex];
  document.title = randomTitle;
  setTimeout(changeTitle, 5000);
}

var songs = ["dance.mp3"]
var random_song = songs[Math.floor(Math.random() * songs.length)];
var path = "/static/assets/music/" + random_song;
var audio = new Audio(path);
audio.loop = true;
audio.preload = "auto";
changeTitle();

