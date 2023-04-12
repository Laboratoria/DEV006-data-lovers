

const backgrounds = [];
backgrounds[0] = '../images/img1.jpeg';
backgrounds[1] = '../images/img2.jpeg';
backgrounds[2] = '../images/img3.jpeg';
backgrounds[3] = '../images/img4.jpeg';
backgrounds[4] = '../images/img5.jpeg';
backgrounds[5] = '../images/img6.jpeg';
backgrounds[6] = '../images/img7.jpeg';
backgrounds[7] = '../images/img8.jpeg';

window.onload = function (){
  const setBackground = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[setBackground]})`;
}