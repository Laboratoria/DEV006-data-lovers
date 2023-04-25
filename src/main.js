const backgrounds = [];
backgrounds[0] = '../images/img1.jpeg';
backgrounds[1] = '../images/img2.jpeg';
backgrounds[2] = '../images/img3.jpeg';
backgrounds[3] = '../images/img4.jpeg';
backgrounds[4] = '../images/img5.jpeg';

function setBackground(){
  const setBackground = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[setBackground]})`;
}

window.onload = setBackground



