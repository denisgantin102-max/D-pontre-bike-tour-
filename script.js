/*=========================================
 D'Pontre Bike Tour V2.0
==========================================*/

/* ========= LOADER ========= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});


/* ========= COMPTE À REBOURS ========= */

function premierSamediSeptembre(annee){

    let date = new Date(annee,8,1);

    while(date.getDay() !== 6){

        date.setDate(date.getDate()+1);

    }

    date.setHours(7,0,0,0);

    return date;

}

let maintenant = new Date();

let evenement = premierSamediSeptembre(maintenant.getFullYear());

if(maintenant > evenement){

    evenement = premierSamediSeptembre(maintenant.getFullYear()+1);

}

function mettreAJourCompteur(){

    const distance = evenement - new Date();

    if(distance <= 0){

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }

    const jours = Math.floor(distance/(1000*60*60*24));

    const heures = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const secondes = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").textContent = jours;

    document.getElementById("hours").textContent = heures;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = secondes;

}

mettreAJourCompteur();

setInterval(mettreAJourCompteur,1000);


/* ========= APPARITION AU DÉFILEMENT ========= */

const elements = document.querySelectorAll(".card, .cycliste-card, .contact-card, .stat-box");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

elements.forEach(element=>{

    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="0.8s";

    observer.observe(element);

});


/* ========= MODE SOMBRE ========= */

function activerModeSombre(){

    document.body.classList.toggle("dark-mode");

}