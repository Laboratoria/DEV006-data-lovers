const portadaVideo = document.querySelector('.portadaVideo');
const portadaInfo = document.querySelector('.portadaInfo');
const titleLogoContainer = document.querySelector('.titleLogoContainer');
const parrafoContainer = document.querySelector('.parrafoContainer');
const postersContainer = document.querySelector('.postersContainer');

fetch('./data/ghibli/ghibli.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  const dataStudioGhibli = data.films;
  postersGhibli(dataStudioGhibli);
});


const postersGhibli = (ghibliData) => {

  ghibliData.forEach((e) => {
    const poster= document.createElement('img');
    poster.setAttribute('src', e.poster)
    poster.setAttribute('class', 'poster')

    postersContainer.append(poster)

        poster.addEventListener('click', () => {
            const video = `<video src= ${e.info[0].video} loop autoplay>`
            const parrafo = `<p class='parrafo'>${e.info[0].texto}</p>`
            const titleLogo = `<img class= 'imgTitle' src= ${e.info[0].logoTitleUrl} />`

            portadaVideo.innerHTML = video;
            parrafoContainer.innerHTML = parrafo;
            titleLogoContainer.innerHTML = titleLogo;
        })

  })
}



