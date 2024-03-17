// btn group
function onClickShowText(btn) {
    const textImportancia = document.querySelector('.importancia');
    const textFuncoes = document.querySelector('.funcoes');
    const textVoto = document.querySelector('.voto');

    if (btn === 'importancia') {
        // animação
        textImportancia.style.animation = 'fadeIn 1s ease';

        // visibilidade
        textImportancia.classList.remove('d-none');
        textFuncoes.classList.add('d-none');
        textVoto.classList.add('d-none');
    }

    if (btn === 'funcoes') {
        // animacao
        textFuncoes.style.animation = 'fadeIn 1s ease';

        // visibilidade
        textImportancia.classList.add('d-none');
        textFuncoes.classList.remove('d-none');
        textVoto.classList.add('d-none');
    }

    if (btn === 'voto') {
        // animacao
        textVoto.style.animation = 'fadeIn 1s ease';

        // visibilidade
        textImportancia.classList.add('d-none');
        textFuncoes.classList.add('d-none');
        textVoto.classList.remove('d-none');
    }
}

// navbar scrolled
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// nav-link active quando estiver no viewport do href
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {

    window.addEventListener('scroll', () => {

        const idLink = link.getAttribute('href');
        const offsetTop = document.querySelector(idLink).offsetTop - 250;
        const height = document.querySelector(idLink).offsetHeight;

        if (window.scrollY >= offsetTop && window.scrollY < (offsetTop + height)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        navLinks[0].classList.remove('active');

    })

    // caso o link seja clicado, adicionar a classe active
    link.addEventListener('click', () => {
        navLinks.forEach((link) => {
            link.classList.remove('active');
        })
        link.classList.add('active');
    })

})