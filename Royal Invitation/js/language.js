/* =====================================
   ROYAL WEDDING INVITATION
   LANGUAGE.JS
===================================== */


const languageButtons =
document.querySelectorAll(".lang");


let currentLanguage="uz";



languageButtons.forEach(button=>{


button.addEventListener("click",()=>{


currentLanguage=button.dataset.lang;



languageButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



changeLanguage(currentLanguage);



});


});






function changeLanguage(lang){



const elements =
document.querySelectorAll("[data-"+lang+"]");



elements.forEach(element=>{


element.textContent =
element.getAttribute("data-"+lang);


});





const placeholders =
document.querySelectorAll("[data-"+lang+"-placeholder]");



placeholders.forEach(input=>{


input.placeholder =
input.getAttribute("data-"+lang+"-placeholder");


});



}
