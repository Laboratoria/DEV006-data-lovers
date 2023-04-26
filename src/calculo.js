import {contarRol} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const btMenuc = document.querySelector('.bt-menuc');
  const ulc = document.querySelector('.contenidoc');
  
  btMenuc.addEventListener('click', () => {
    ulc.classList.toggle('contenidoc');
    console.log(btMenuc)
  });
  
});
const resultado = contarRol(tagsChampion,"Fighter");
console.log(resultado); 
const resultado2 = contarRol(tagsChampion,"Assassin");
console.log(resultado2); 
const resultado3 = contarRol(tagsChampion,"Tank");
console.log(resultado3); 
const resultado4 = contarRol(tagsChampion,"Mage");
console.log(resultado4); 
const resultado5 = contarRol(tagsChampion,"Support");
console.log(resultado5); 
const resultado6 = contarRol(tagsChampion,"Marksman");
console.log(resultado6); 
document.getElementById("resultFighters").innerHTML = resultado;
document.getElementById("resultAssasins").innerHTML = resultado2;
document.getElementById("resultTanks").innerHTML = resultado3;
document.getElementById("resultMages").innerHTML = resultado4;
document.getElementById("resultSupports").innerHTML = resultado5;
document.getElementById("resultMarksmen").innerHTML = resultado6;

//Marksmen are ranged champions whose power almost exclusively revolves around their basic attacks: using their reach to land massive continuous damage from a distance, marksmen are capable of taking down even the toughest of opponents when positioned behind the safety of their team, and excel at securing map objectives such as Dragon Dragon, Baron Nashor Baron Nashor and turrets.
//Fighters (also known as Bruisers) are a diverse group of short-ranged combatants who excel at both dealing and surviving damage. With easy access to heavy, continuous damage (or DPS) and a host of innate defenses, fighters thrive in extended fights as they seek out enemies to take down, but their limited range puts them at constant risk of being kept at bay (or kited) by their opponents via crowd control, range and mobility.
//Slayers (formerly "Assassins") are fragile but agile damage-focused melee champions that look to swiftly take down their targets.Assassins specialize in infiltrating enemy lines with their unrivaled mobility to quickly dispatch high-priority targets. Due to their mostly melee nature, Assassins must put them themselves into dangerous positions in order to execute their targets. Luckily, they often have defensive tricks up their sleeves that, if used cleverly, allow them to effectively avoid incoming damage
//Mages are champions who typically possess great reach, ability-based area of effect damage and crowd control, and who use all of these strengths in tandem with each other to trap and destroy enemies from a distance. Specializing in magic damage, often burst damage, and therefore investing heavily in items that allow them to cast stronger and faster spells, mages excel at chaining their abilities together in powerful combos in order to win fights, though their abilities also tend to be difficult to land and can be mitigated, if not avoided completely, by their targets if they react in time.
//Within a drafted team, the Support is one of the two champions assigned to the bottom lane alongside the Bottom icon.png Bottom Carry. This role's initial goal is to assist their more vulnerable team mate through the earliest stages of the game, and is a position that suits champions with either utility, disengage or high base damage.
//Tanks are tough melee champions who sacrifice damage in exchange for powerful crowd control. While able to engage enemies in combat, a tank's purpose isn't usually to kill opponents; rather, tanks excel at disrupting enemies and diverting focus to themselves, allowing them to lock down specific targets (or several targets at once), as well as remove (or peel) threats from their allies.In addition to strong base defenses, tanks generally have a means of amplifying their tankiness even further with their abilities, and tend to fully invest in defensive items to maximize their resilience. However, tanks lack the tools to truly succeed in single combat, and their influence is limited by their low overall mobility, preventing them from constantly staying on top of their targets.

