const title = document.getElementById("titulo");
var index = 0;
const labels = ["Le_Flix", "Le", "_", "Flix"];


title.innerHTML = labels[0];
window.onload = function () {
  setInterval(function () {
    title.innerHTML = labels[index];
    index++;

    if (index >= labels.length) {
      index = 0;
    }
  }, 1000);
};

var listaFilmes = [
  "data:image/jpeg;base64,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",
  "https://media.fstatic.com/3RAzlQPFDJVVzZjpMEJpt_2rAis=/290x478/smart/media/movies/covers/2018/03/MV5BMjA2ODgyMjE1MF5BMl5BanBnXkFtZTcwMzE3MDU3Ng._V1_SY999_CR00667999_AL_.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg"
];



var listaLinks = [
  "https://www.youtube.com/watch?v=g6ng8iy-l0U",
  "https://www.youtube.com/watch?v=wrI6Fbeg-ZI",
  "https://www.youtube.com/watch?v=TBejbQadXXU"
];




var filmes = document.querySelector(".div_das_imagens");

for (var i = 0; i < listaFilmes.length; i++) {
 document.querySelector(".div_das_imagens").innerHTML += 
    `<a href="${listaLinks[i]}" target="_blank" > <img class="img_" id="imag_${i}" src="${listaFilmes[i]}" > </a>`
 }

var listarImagens = [
  "https://images4.alphacoders.com/279/thumb-1920-279264.jpg"
];

listarImagens.push(document.getElementById("imagensBG"));

// var texte = (document.body.style.backgroundImage = `url(${listarImagens[i]})`);



/*document.getElementById(`imag_${0}`).addEventListener("mouseout", function () {
  document.body.style.backgroundImage =
    "url(https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-04-aluraflix-e-filmes.png)";
});*/


var botao = document.querySelector(".abrir")

botao.addEventListener("click", function(){
  
  document.querySelector(".pesquisa").style.display = "block";
  document.querySelector(".inserir").style.display = "block";
  document.querySelector(".abrir").style.display = "none";

})


var botao_2 = document.querySelector(".inserir")

botao_2.addEventListener("click", function(){
  
  document.querySelector(".pesquisa").style.display = "none";
  document.querySelector(".inserir").style.display = "none";
  document.querySelector(".abrir").style.display = "block";

  listaFilmes.push(document.getElementById("film").value);
  listaLinks.push(document.getElementById("links").value);

   
  document.querySelector(".div_das_imagens").innerHTML += 
    `<a href="${listaLinks[listaLinks.length-1]}" target="_blank" > <img class="img_" id="imag_${listaFilmes.length-1}" src="${listaFilmes[listaFilmes.length-1]}" > </a>`
    

})