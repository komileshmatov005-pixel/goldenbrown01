/* =====================================
   ROYAL WEDDING INVITATION
   APP.JS
===================================== */


// GSAP ulash
gsap.registerPlugin(ScrollTrigger);



/* ==============================
   INTRO OPEN
============================== */


const seal = document.getElementById("openInvitation");
const intro = document.getElementById("intro");


seal.addEventListener("click",()=>{


    seal.classList.add("opened");


    gsap.to(".wax-container",{

        scale:1.15,
        opacity:0,
        filter:"blur(20px)",
        duration:1.5

    });



    gsap.to(intro,{

        opacity:0,
        duration:2,
        delay:.8,
        onComplete:()=>{

            intro.style.display="none";

        }

    });


});





/* ==============================
   SCROLL REVEAL
============================== */


const reveals=document.querySelectorAll(".reveal");


const revealObserver=new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:.18

}
);



reveals.forEach(item=>{

revealObserver.observe(item);

});






/* ==============================
   GOLDEN PARALLAX BACKGROUND
============================== */


window.addEventListener("scroll",()=>{


let scroll=window.scrollY;


let bg=document.querySelector(".royal-background");


if(bg){


bg.style.transform=
`scale(1.08) translateY(${scroll*0.03}px)`;


}



});







/* ==============================
   BUTTON STATUS
============================== */


const statusButtons=
document.querySelectorAll(".status-btn");



let selectedStatus="";



statusButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


statusButtons.forEach(b=>{

b.classList.remove("selected");

});


btn.classList.add("selected");


selectedStatus=btn.dataset.status;


});


});






/* ==============================
   RSVP MESSAGE
============================== */


const submit=
document.querySelector(".submit-rsvp");


const success=
document.querySelector(".success-message");



if(submit){


submit.addEventListener("click",()=>{


let name=
document.getElementById("guestName").value;



if(name==="" || selectedStatus===""){


alert("Iltimos ma'lumotlarni to'ldiring");


return;


}



success.style.display="block";


success.innerHTML=
`
Rahmat, ${name}! 
<br>
Javobingiz qabul qilindi.
`;



});


}






/* ==============================
   SMOOTH IMAGE LOAD
============================== */


window.addEventListener("load",()=>{


gsap.from(".hero",{

opacity:0,
y:50,
duration:2,
ease:"power3.out"

});


});
