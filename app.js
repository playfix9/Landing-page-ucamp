const frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Zarzamora'];

// Recorremos el arreglo
frutas.forEach((elemento, indice, array) => {
  // Imprime el elemento actual y su índice
  console.log(elemento, indice);
}); 

frutas.forEach((ola) =>{console.log(ola)});



//ordenamos alfabeticamente
frutas.sort((fruta1, fruta2) => {
  // fruta1 va primero que fruta2
  if (fruta1 < fruta2) {
    return -1;
  }
  // fruta2 va primero que fruta1
  if (fruta1 > fruta2) {
    return 1;
  }

  // Los elementos ya están ordenados
  return 0;
});
console.log('Frutas Ordenadas: ', frutas);




     // Filtramos el arreglo
     const berries = frutas.filter((elemento) => {
      if (elemento === 'Fresa' || elemento === 'Zarzamora') {
        return true;
      }

      return false;
    });
    console.log('Berries: ', berries);