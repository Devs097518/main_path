var home = document.getElementById('home');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');
var more = document.getElementById('more');


var foot1 = document.getElementById('foot1');
var foot2 = document.getElementById('foot2');
var foot3 = document.getElementById('foot3');
var foot4 = document.getElementById('foot4');



function tohome() {
    foot1.style.display = 'flex';
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




var andar = 0;
let vir = document.getElementById('voltar');
let ir = document.getElementById('avancar');

let texto = document.getElementById('moltext');
let atras = document.getElementById('moldown');

proximo = () => {
    andar++ ; 

    if (andar == 1) {
        cenario2(); 
    }

    if (andar == 2) {
        cenario3(); 
    }

    if (andar >= 3) {
        andar = 0; 
        cenario1();
    }
};


voltar = () => { 
    andar--;

    if (andar == 0) {
        cenario1(); 
    }

    if (andar == 1) {
        cenario2(); 
    }

    if (andar <= -1) {
        andar = 2; 
        cenario3();
    }
};

cenario1 = () => { 
                   texto.textContent = 'BitBlog' ; 
                   texto.style.left = '100px';
                   atras.src = 'bitblog_home.png'; 
                 };

cenario2 = () => { 
                  texto.textContent = 'Psicoajuda' ; 
                  texto.style.left = '75px';
                  atras.src = 'psicoajuda_home.png';
               
                 };

cenario3 = () => { 
                  texto.textContent = 'MoonHead' ; 
                  texto.style.left = '75px';
                  atras.src = 'moonhead_home.png';
                };


ir.addEventListener('click',proximo);
vir.addEventListener('click',voltar);



home.addEventListener('click',tohome);
projects.addEventListener('click',toprojects);
more.addEventListener('click',tomore);
contact.addEventListener('click',tocontact);



home.addEventListener('click',tohome);
projects.addEventListener('click',toprojects);
more.addEventListener('click',tomore);
contact.addEventListener('click',tocontact);
