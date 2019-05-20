const container = document.querySelector('.carrossel-container');

const slides = Array.from(container.children);

const botaoProx = document.querySelector('.carrossel-botao_direita');
const botaoAnte = document.querySelector('.carrossel-botao_esquerda');

const indicadoresNav = document.querySelector('.carrossel-nav');
const indicadores = Array.from(indicadoresNav.children);

const slidesLargura = slides[0].getBoundingClientRect().width;
const definePosicaoSlide = (slide, indice) => {
    slide.style.left = slidesLargura * indice + 'px'
}
slides.forEach(definePosicaoSlide);