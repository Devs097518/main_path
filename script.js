var home = document.getElementById('home');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');
var more = document.getElementById('more');


var foot1 = document.getElementById('foot1');
var foot2 = document.getElementById('foot2');
var foot3 = document.getElementById('foot3');
var foot4 = document.getElementById('foot4');


function tohome() {
    foot1.style.display = 'block';
    foot2.style.display = 'none';
    foot3.style.display = 'none';
    foot4.style.display = 'none';

    home.style.color = 'purple';
    projects.style.color = 'black';
    more.style.color = 'black';
    contact.style.color = 'black'
}

function toprojects() {
    foot1.style.display = 'none';
    foot2.style.display = 'flex';
    foot3.style.display = 'none';
    foot4.style.display = 'none';


    home.style.color = 'black';
    projects.style.color = 'purple';
    more.style.color = 'black';
    contact.style.color = 'black'
}


function tomore() {
    foot1.style.display = 'none';
    foot2.style.display = 'none';
    foot3.style.display = 'block';
    foot4.style.display = 'none';

    home.style.color = 'black';
    projects.style.color = 'black';
    more.style.color = 'purple';
    contact.style.color = 'black';
}




function tocontact() {
    foot1.style.display = 'none';
    foot2.style.display = 'none';
    foot3.style.display = 'none';
    foot4.style.display = 'block';
    
    home.style.color = 'black';
    projects.style.color = 'black';
    more.style.color = 'black';
    contact.style.color = 'purple'
}




home.addEventListener('click',tohome);
projects.addEventListener('click',toprojects);
more.addEventListener('click',tomore);
contact.addEventListener('click',tocontact);
