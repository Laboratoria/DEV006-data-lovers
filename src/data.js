

export function pokemonFilter (data,filterText){
  return data.filter ((pokemon)=>{
    return pokemon.name.includes(filterText);
  });
}



export function pokemonSort (pokemonList, sortValue) {
  return pokemonList.sort((a, b) => {
    if (sortValue === "A-z") {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (sortValue === "Z-a") {
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    }
  });
}
/*  Ordenamos por nombre: " sortOrder" es = "A-z"
se utiliza el OPERADOR TERNARIO ? para comparar
---Si a.name es menos de b.name, devolvemos -1, 
si a.name es mayor que b.name devolvemos 1,
de lo contrario devolvemos 0


De forma similar  "sortOrder" es igual "Z-a", estamos comprando pokemones de manera
inversa.*/
/* a=1 A-z b=-1 z-A   0=0 (es lo mismo)
*/
