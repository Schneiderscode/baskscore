guest=document.getElementById('guest')
home=document.getElementById('home')



function gsingle() {
    guest.innerText = parseInt(guest.innerText) + 1;
}
function gdouble() {
    guest.innerText = parseInt(guest.innerText) + 2;
}
function gthrible() {
    guest.innerText = parseInt(guest.innerText) + 2;
}

//home

function single() {
    home.innerText = parseInt(home.innerText) + 1;
}
function double() {
    home.innerText = parseInt(home.innerText) + 2;
}
function thrible() {
    home.innerText = parseInt(home.innerText) + 2;
}

//reset//

function reset(){
    home.innerText = 0;
    guest.innerText= 0;
}