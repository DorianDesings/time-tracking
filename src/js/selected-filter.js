import { filterData } from './print-data';

const allFilters = document.querySelectorAll('.card__list-item');

export const selectedFilter = filterSelected => {
  allFilters.forEach(filter =>
    filter.classList.remove('card__list-item--active')
  );
  filterSelected.classList.add('card__list-item--active');

  filterData(filterSelected.dataset.filter);
};
