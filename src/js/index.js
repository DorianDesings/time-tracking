// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

import { selectedFilter } from './selected-filter';
//Evento que enviará a filterData el periodo que busco, "daily", "weekly" o "monthly"

//Evento que enviará a filterData el periodo que busco, "daily", "weekly" o "monthly"

const cardListElement = document.getElementById('card-list');

selectedFilter(cardListElement.children[1]);

cardListElement.addEventListener('click', e => {
  if (!e.target.dataset.filter) return;
  selectedFilter(e.target);
});
