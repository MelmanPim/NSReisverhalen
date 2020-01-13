/* Overlay uitklappen */

var overlay = document.querySelector('.overlay');
var open = document.querySelector('.open');
var dicht = document.querySelector('.dicht');

function menu() {
    overlay.classList.toggle('klapuit');
}

open.addEventListener('click', menu);
dicht.addEventListener('click', menu);


/* Filter & Sorteer uitklappen */

var filterKnop = document.querySelector('.filterKnop');
var filterAan = document.querySelector('.filterAan');

function filter() {
    filterKnop.classList.toggle('active');
    filterAan.classList.toggle('active');
}

if(filterKnop){
    filterKnop.addEventListener('click', filter);
}


/* Floating Action Button - bron: https://github.com/nitemarket/floating-button-menu */

var plus = document.querySelector('.plus');
var opslaan = document.getElementById('opslaanKnop');
var delen = document.getElementById('delenKnop');
var ster = document.getElementById('sterKnop');

function opties() {

    opslaan.classList.toggle('show');
    delen.classList.toggle('show');
    ster.classList.toggle('show');
}

if(plus){
plus.addEventListener('click', opties);
}







