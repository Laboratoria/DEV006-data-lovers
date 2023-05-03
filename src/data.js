//En el archivo data.js, exporta las funciones de búsqueda y filtrado.

//input SEARCH buscar por nombre FINAL
export const searchPokByName = (data,name) =>{
  //metodo startsWidth para buscar por nombre comenzando desde la primera
  //console.log(data)
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  return searching
};


//input search by number FINAL
//CONVERTIR EL STRING DEL INPUT EN NUMERO
//filtrar toda la data por el numero que se convirtio
//    durante el filtrado comparar el numero convertido con la propiedad num del pokemon convertida en numero tbn
export function searchPokByNumber(data,num){
  const searchingNumber = Number(num);
  const searching = data.pokemon.filter(p => searchingNumber === Number(p.num));
  return searching;
}


//para ordenar AZ FINAL
export function ordenadoAz(data) {
  const ordenado = data.pokemon.sort((a,b)=> a.name.localeCompare(b.name));
  return ordenado;
}


//para invertir el orden ZA FINAL
export function invertirYOrdenarPorNombreZa(data) {
  const invertirYOrdenarPorNombreZa = data.pokemon.reverse().sort((a, b) => b.name.localeCompare(a.name));
  return invertirYOrdenarPorNombreZa
}


//filtrado por tipo
export function filtradoTipo(data,type) {
  const filtrado = data.pokemon.filter((pokemon) =>{
    if(pokemon.type.includes(type)){
      return pokemon;
    }
  });
  return filtrado;
}


//filtar por debilidad
export function filtradoDebilidad(data,weaknesses) {
  const filtradoWeaknesses = data.pokemon.filter((pokemon) => {
    if(pokemon.weaknesses.includes(weaknesses)){
      return pokemon;
    }
  });
  return filtradoWeaknesses;
}


//filtrar por fortaleza
export function filtradoResistencia(data,resistant){
  const filtradoResistant = data.pokemon.filter((pokemon)=> {
    if(pokemon.resistant.includes(resistant)){
      return pokemon;
    }
  });
  return filtradoResistant;
}


//ordenar ascendentemente FINAL
export function ordenarPorNumeroAscendente(data) {
  return data.pokemon.sort((a, b) => a.num - b.num);
}


//ordenar descendente FINAL
export function ordenarPorNumeroDescendente(data) {
  return data.pokemon.sort((a, b) => b.num - a.num);
}

//calcular la fuerza
export function calcularFuerza(pokemon) {
  const baseAttack = parseInt(pokemon.stats['base-attack']);
  const baseDefense = parseInt(pokemon.stats['base-defense']);
  const baseStamina = parseInt(pokemon.stats['base-stamina']);
  const maxCp = parseInt(pokemon.stats['max-cp']);
  const fuerza = (baseAttack * baseDefense * Math.sqrt(baseStamina) * maxCp**2 / 10**8);
  return fuerza.toFixed(1);
}

//Los 10 pokemons más fuertes
export function strongest(data) {
  return data.pokemon.sort((a, b) => calcularFuerza(b) - calcularFuerza(a)).slice(0, 10);
}

//Los 10 pokemons más débiles
export function weaknest(data) {
  return data.pokemon.sort((a, b) => calcularFuerza(a) - calcularFuerza(b)).slice(0, 10);
}
