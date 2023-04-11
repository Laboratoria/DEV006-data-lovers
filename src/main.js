import data from './data/lol/lol.js';
  
















const contenedor = document.querySelector('.contenedor'); 

const champion = Object.keys(data.data)


for(let i = 0; i < champion.length; i++){
  const key = champion[i]


  const name = data.data[key].name;
  const img  = data.data[key].img;
  const blurb = data.data[key].blurb;
  const title = data.data[key].title;
  const infoObject = data.data[key].info;

  const championCard = document.createElement("div");
  championCard.classList.add("champion-card");

  
  for (const subKey in infoObject) {
    // eslint-disable-next-line no-prototype-builtins
    if (infoObject.hasOwnProperty(subKey)){
      const subValue = infoObject[subKey];
      const statElement = document.createElement("p")
      statElement.innerHTML = `${subKey}: ${subValue}`;
      championCard.appendChild(statElement);
      statElement.classList.add("info")
    }
      
  }

  const championImgContainer = document.createElement("div");
  championImgContainer.classList.add("champion-img-container");

  const championImg = document.createElement("img");
  championImg.src = img;
  //championImg.setAttribute("src",img)
  championImg.alt = name;
  championImg.classList.add("champion-img");

  // creación h2 para ingresar nombre
  const championName = document.createElement("h2");
  // toma el primer caracter del nombre para que sea en mayuscula y juntarlo con slice para devolver el resto de caracteres.
  championName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  championName.classList.add("champion-name");

  const championBlurb = document.createElement("p");
  championBlurb.textContent = blurb.charAt(0).toUpperCase() + blurb.slice(1);
  championBlurb.textContent= blurb.replace('<br><br>','   ')
  championBlurb.classList.add("blurb");
  
  
  const championTitle = document.createElement("h4");
  championTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
  championTitle.classList.add("title")



 


  
  
  
  
  championImgContainer.appendChild(championImg);
  //championCard.appendChild(searchInput);
  championCard.appendChild(championName);
  championCard.appendChild(championImgContainer);
  contenedor.appendChild(championCard);
  championCard.appendChild(championTitle);
  championCard.appendChild(championBlurb);
  
}
//funcion de buscado

const buscar = document.querySelector('#buscar');
const botonBuscar = document.querySelector('#botonBuscar');
const resultados = document.querySelector("#resultados")

const filtrar = ()=>{
//console.log(buscar.value);
  resultados.innerHTML = '';

  const texto = buscar.value.toLowerCase();
  for (const card of champion){
    const name = card.name.toLowerCase();
    if(name.indexOf(texto) !== -1){
      resultados.innerHTML += `
      <li>${card.name} - champion: ${card.championCard}</li> 
      `
    }
  }
  if(resultados.innerHTML === ''){
    resultados.innerHTML += `
      <li>Champion not found</li>
    `
  }
}

botonBuscar.addEventListener("click", filtrar)


  
 






