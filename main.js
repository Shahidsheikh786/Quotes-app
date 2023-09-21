
let quoteArea = document.querySelector('#quote-area');
let  authorName = document.querySelector('#author-name');
let loading = document.querySelector('.loading-container');
console.log(loading);

const api_url = "https://api.quotable.io/random";


async function getquote(url){
  loading.style.display = "flex";
const respnose = await fetch(url);
var data = await respnose.json();
console.log(data);

authorName.innerHTML = data.author;
quoteArea.innerHTML = data.content;
loading.style.display = "none";

}

  getquote(api_url);


function getNew() {
  getquote(api_url);
}
