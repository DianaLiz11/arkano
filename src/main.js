const register = document.getElementById('form-button');
const boardNameShow = document.getElementById('board-name-show');
const titleShopping = document.getElementById('title-shopping');
const titleIncremet = document.getElementById('title-incremet');
const titleUsers = document.getElementById('title-users');
const titleVisit = document.getElementById('title-visit');

// let data={};

const obtainData = () =>{
  let dashboard = {};
  dashboard.name = document.getElementById('board-name').value;
  dashboard.newShopping = document.getElementById('nuevas-compras').value;
  dashboard.incrementShopping = document.getElementById('incremento-compras').value;
  dashboard.newUsers = document.getElementById('nuevos-usuarios').value;
  dashboard.newVisits = document.getElementById('nuevas-visitas').value;
  dashboard.dateRegister = new Date();
  return dashboard
}

const showData = (data) =>{
  boardNameShow.innerHTML = data.name;
  titleShopping.innerHTML = data.newShopping;
  titleIncremet.innerHTML = data.incrementShopping;
  titleUsers.innerHTML = data.newUsers;
  titleVisit.innerHTML = data.newVisits;
}

// const obtainWeather = () => {
//   fetch('api.openweathermap.org/data/2.5/weather?q=Mexico City, mx')
//   .then(response => response.json())
//   .then(dataWeather => {
//     console.log(dataWeather);
//   });
// };

register.addEventListener('click', () =>{
  let data = obtainData();
  showData(data);

});

obtainWeather();
