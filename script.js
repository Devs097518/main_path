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
let papelada = document.getElementById('projetos1');
let linkado = document.getElementById('linkado');

let gif1 = document.getElementById('ogif1');
let gif2 = document.getElementById('ogif2');
let gif3 = document.getElementById('ogif3');

proximo = () => {
    andar++;

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

cenario3 = () => {
    texto.textContent = 'BitBlog';
    texto.style.left = '100px';
    atras.src = 'bitblog_home.png';
    papelada.innerHTML = '<img src="star-removebg-preview.png" alt="" id="star_img"> O BitBlog tem esse nome, justamente por ser um site da categoria de "blog", em que conteúdos são postados periodicamente. Os conteúdos que eu publico nele são de temas diversos, sempre coisas que eu acho interessante, como psicologia, literatura e (é claro) jogos. Ele tem o lado `blog` e o lado `study`, trazendo o tema, como a inspiração por uma escritora famosa, e umas informações sobre, mas ambos vêm junto de uma reflexão ';
    papelada.style.margin = '0px';
    linkado.href = 'https://bitblog-dolv.onrender.com/';
    gif1.src = 'bb2.gif';
    gif2.src = 'bb1.gif';
    gif3.src = 'bb3.gif';
};

window.onload = cenario1 = () => {
    texto.textContent = 'Psicoajuda';
    texto.style.left = '75px';
    atras.src = 'psicoajuda_home.png';
    papelada.innerHTML = '<img src="star-removebg-preview.png" alt="" id="star_img"> PsicoAjuda foi o projeto do trabalho de conclusão de curso que eu fiz do meu curso técnico no ano de 2023. Esse projeto teve muitas partes envolvidas e eu fiquei responsável pela parte Web. Com ele, tentamos combater a desinformação acerca de patologias mentais, mostrando que é algo que precisa de olhares mais atentos nestes momentos em que vivemos.';
    papelada.style.margin = '20px 0 20px 0';
    linkado.href = 'https://psicoajuda.onrender.com';
    gif1.src = 'pv1.gif';
    gif2.src = 'pv2.gif';
    gif3.src = 'pv3.png';
};

cenario2 = () => {
    texto.textContent = 'BirdsRun';
    texto.style.left = '75px';
    atras.src = 'moonhead_home.png';
    papelada.innerHTML = '<img src="star-removebg-preview.png" alt="" id="star_img"> Foi o meu primeiro jogo que eu criei. Desenvolvi no programa GameMaker e ele é feito para pc. Conforme você pega os itens que estão espalhados pelo mapa, você consegue passar para a próxima fase, mas pra isso é preciso se esquivar das galinhas furiosas!!!';
    papelada.style.marginTop = '40px 0 40px 0';
    linkado.href = 'https://portalact5.wordpress.com/';
    gif1.src = 'mv1.gif';
    gif2.src = 'mv2.gif';
    gif3.src = 'mv3.gif';
};


ir.addEventListener('click', proximo);
vir.addEventListener('click', voltar);


home.addEventListener('click', tohome);
projects.addEventListener('click', toprojects);
more.addEventListener('click', tomore);
contact.addEventListener('click', tocontact);


home.addEventListener('click', tohome);
projects.addEventListener('click', toprojects);
more.addEventListener('click', tomore);
contact.addEventListener('click', tocontact);

