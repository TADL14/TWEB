const menuBtn = document.querySelector('.menu-btn');
const menumob = document.querySelector('.menu-mob');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menumob.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menumob.classList.remove('open');
        menuOpen = false;
    }
});

const botaovender = document.querySelector('.botao');
const simulacao = document.querySelector('.simulacao');
let botaoopen = false;
botaovender.addEventListener('click', () => {
    if(!botaoopen) {
        simulacao.classList.add('open');
        botaoopen = true;
    }
});

const imagem7 = document.querySelector('.imagem7');
const vendacarro = document.querySelector('.vendacarros')
let vendaopen = false;
imagem7.addEventListener('click', () => {
    if(!vendaopen) {
        imagem7.classList.add('open');
        vendacarro.classList.add('open');
        vendaopen = true;
    } else {
        imagem7.classList.remove('open');
        vendacarro.classList.remove('open');
        simulacao.classList.remove('open');
        vendaopen = false;
        botaoopen = false;
    }
});






const enviar = document.querySelector('.botao');

enviar.addEventListener("click", function(e){
    e.preventDefault();

    //ir buscar as diferentes caracteristicas do carro
var marca = document.getElementById("marca").value;
var modelo = document.getElementById("modelo").value;
var preco_aquisicao = document.getElementById("precoA").value;
var ano = document.getElementById("ano").value;
var kms = document.getElementById("kms").value;


});



var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];


let carmarca1 = document.querySelector(".carmarca1");
let carmodelo1 = document.querySelector(".carmodelo1");
let carpreco1 = document.querySelector(".carpreco1");
let carano1 = document.querySelector(".carano1");
let carkms1 = document.querySelector(".carkms1");

let carmarca2 = document.querySelector(".carmarca2");
let carmodelo2 = document.querySelector(".carmodelo2");
let carpreco2 = document.querySelector(".carpreco2");
let carano2 = document.querySelector(".carano2");
let carkms2 = document.querySelector(".carkms2");

let carmarca3 = document.querySelector(".carmarca3");
let carmodelo3 = document.querySelector(".carmodelo3");
let carpreco3 = document.querySelector(".carpreco3");
let carano3 = document.querySelector(".carano3");
let carkms3 = document.querySelector(".carkms3");


function metercar(){


    list1[0] = document.getElementById("marca").value;
	list2[0] = document.getElementById("modelo").value;
	list3[0] = document.getElementById("precoA").value;
	list4[0] = document.getElementById("ano").value;
    list5[0] = document.getElementById("kms").value;


	carmarca1.innerHTML = list1[0];
    carmodelo1.innerHTML = list2[0];
    carpreco1.innerHTML = list3[0];
    carano1.innerHTML = list4[0];
    carkms1.innerHTML = list5[0];

    carmarca2.innerHTML = list1[0];
    carmodelo2.innerHTML = list2[0];
    carpreco2.innerHTML = list3[0];
    carano2.innerHTML = list4[0];
    carkms2.innerHTML = list5[0];

    carmarca3.innerHTML = list1[0];
    carmodelo3.innerHTML = list2[0];
    carpreco3.innerHTML = list3[0];
    carano3.innerHTML = list4[0];
    carkms3.innerHTML = list5[0];
}


let precof1=document.querySelector(".precof1");
let precof2=document.querySelector(".precof2");
let precof3=document.querySelector(".precof3");


document.querySelector(".botao").addEventListener("click", function (){
    var anomatricula = document.getElementById("ano").value;
    var kms1 = document.getElementById("kms").value;
    var preco1 = document.getElementById("precoA").value;
    var anos = 2022 - anomatricula;
    var c1 = 0;
    var c1_2 = 0;
    var c2 = 0;

    if(anos>10)
    {
        c1 = 10;
        c1_2 = anos-10;
    }
    else
    {
        c1 = anos;
    }


    if(kms1 <= 30000)
    {
        c2 = 1
    }
    else
    {
        if(kms1 > 70000)
        {
            c2 = 0.9;
        }
        else
        {
            c2 = 0.95;
        }
    }
    let euro = '€'

    precofinal = preco1*(1 - (c1 * 0.05 + c1_2 * 0.04)) * c2;

    precof1.innerHTML = Math.round(precofinal * 0.6) ; 
    precof2.innerHTML = Math.round(precofinal) ;
    precof3.innerHTML = Math.round(precofinal * 1.1) ;
})
