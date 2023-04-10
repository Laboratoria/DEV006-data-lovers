import data from './data/lol/lol.js';


 //VISUALIZADOR

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
    if (infoObject.hasOwnProperty(subKey)) {
      const subValue = infoObject[subKey];
      const statElement = document.createElement("p");
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
  championCard.appendChild(championName);
  championCard.appendChild(championImgContainer);
  contenedor.appendChild(championCard);
  championCard.appendChild(championTitle)
  championCard.appendChild(championBlurb);
 



  }
 
  //ORGANIZADOR

  
 const sortData =(data, sortBy, sortOrder) => {
     if (sortBy === 'name') {
       data.sort((a, b) => {
       return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
       });
     } if (sortOrder === 'desc') {
      data.reverse();
    }

    return data;
 }
  
   const allChampions=Object.keys(data.data);
  
  
  const sortedChampionsAsc=sortData(allChampions,champion=>champion.data.data[key].name, 'asc');
  console.log(sortedChampionsAsc);

    
  const sortedChampionsDesc=sortData(allChampions,champion=>champion.data.data[key].name, 'desc');
  console.log(sortedChampionsDesc);


