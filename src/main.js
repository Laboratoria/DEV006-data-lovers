import data from './data/lol/lol.js';

const contenedor = document.querySelector('.contenedor'); 

const champion = Object.keys(data.data)

for(let i = 0; i < champion.length; i++){
  const key = champion[i]
  
  const name = data.data[key].name;
  const img  = data.data[key].img;
  const blurb = data.data[key].blurb;
  const info = data.data[key].info;
  console.log(info)                     

  const championCard = document.createElement("div");
  championCard.classList.add("champion-card"); 

  const championImgContainer = document.createElement("div");
  championImgContainer.classList.add("champion-img-container");

  const championImg = document.createElement("img");
  championImg.src = img;
  championImg.setAttribute("src",img)
  championImg.alt = name;
  championImg.classList.add("champion-img");

  // creación h2 para ingresar nombre
  const championName = document.createElement("h2");
  // toma el primer caracter del nombre para que sea en mayuscula y juntarlo con slice para devolver el resto de caracteres.
  championName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  championName.classList.add("champion-name");

  const championBlurb = document.createElement("p");
  championBlurb.textContent = blurb.charAt(0).toUpperCase() + blurb.slice(1);
  championBlurb.classList.add("blurb");
  

  const championInfo = document.createElement("p");
  championInfo.innerHTML = info;
  championInfo.classList.add("info");
  

  championImgContainer.appendChild(championImg);
  championCard.appendChild(championName);
  championCard.appendChild(championImgContainer);
  contenedor.appendChild(championCard);
  championCard.appendChild(championInfo);
  championCard.appendChild(championBlurb);
}