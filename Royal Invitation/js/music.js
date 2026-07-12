/* =====================================
   ROYAL WEDDING INVITATION
   MUSIC.JS
===================================== */


const music =
document.getElementById("royalMusic");


const musicBtn =
document.getElementById("musicBtn");


let musicPlaying=false;



/* ==============================
   MUSIC BUTTON
============================== */


musicBtn.addEventListener("click",()=>{


if(musicPlaying){


    music.pause();

    musicPlaying=false;

    musicBtn.classList.remove("playing");


}

else{


    music.play().catch(()=>{});


    musicPlaying=true;

    musicBtn.classList.add("playing");


}


});





/* ==============================
   START MUSIC AFTER OPEN
============================== */


const openButton =
document.getElementById("openInvitation");



openButton.addEventListener("click",()=>{


setTimeout(()=>{


music.volume=0;


music.play().then(()=>{


let volume=0;


let fade=setInterval(()=>{


volume+=0.05;


music.volume=volume;


if(volume>=0.8){

clearInterval(fade);

}


},200);



}).catch(()=>{});



},1800);



});





/* ==============================
   BUTTON ROTATION EFFECT
============================== */


const style=document.createElement("style");


style.innerHTML=`

.music-button.playing span{


animation:
musicRotate 4s linear infinite;


}



.music-button.playing{


box-shadow:

0 0 45px rgba(212,175,55,.8);


}



@keyframes musicRotate{


from{

transform:rotate(0deg);

}


to{

transform:rotate(360deg);

}


}


`;



document.head.appendChild(style);
