import { fetchData } from './utils/fetch-data';

const allCardsCurrent = document.querySelectorAll('.card__current');
const allCardsPreviuos = document.querySelectorAll('.card__previous');

//CLONE
// const request = fetchData('../data/data.json');

//Función que pintará los datos en el HTML
const printData = (data, index) => {
  allCardsCurrent[index].textContent = `${data.current}hrs`;
  allCardsPreviuos[index].textContent = `${data.previous}hrs`;
};

//Función que filtra los datos
const filterData = period => {
  const request = fetchData('../data/data.json');
  request
    .then(response => response.json())
    .then(data => {
      data.forEach((item, index) => printData(item.timeframes[period], index));
    })

    .catch(err => console.log(err));
  // request
  //   .then(response => response.clone())
  //   .then(responseClone => responseClone.json())
  //   .then(data => {
  //     data.forEach((item, index) =>
  //       printData(item.timeframes[period].current, index)
  //     );
  //   })

  //   .catch(err => console.log(err));
};

export { filterData };
