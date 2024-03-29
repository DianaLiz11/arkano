const register = document.getElementById('form-button');
const boardNameShow = document.getElementById('board-name-show');
const titleShopping = document.getElementById('title-shopping');
const titleIncremet = document.getElementById('title-incremet');
const titleUsers = document.getElementById('title-users');
const titleVisit = document.getElementById('title-visit');
const boardNameForm = document.getElementById('board-name');
const newShoppingForm = document.getElementById('nuevas-compras');
const incrementShoppingForm = document.getElementById('incremento-compras');
const newUsersForm = document.getElementById('nuevos-usuarios');
const newVisitsForm = document.getElementById('nuevas-visitas');
const city = document.getElementById('city');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const tempMax = document.getElementById('temp-max');
const tempMin = document.getElementById('temp-min');

let data={};

const obtainData = () =>{
  let dashboard = {};
  dashboard.name = boardNameForm.value;
  dashboard.newShopping = newUsersForm.value;
  dashboard.incrementShopping = incrementShoppingForm.value;
  dashboard.newUsers = newUsersForm.value;
  dashboard.newVisits = newVisitsForm.value;
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

const validateBox = () => {
  if(boardNameForm.value === '' ||
    newUsersForm.value === '' || newUsersForm.value < 0 ||
    incrementShoppingForm.value === '' || incrementShoppingForm.value < 0 ||
    newVisitsForm.value === '' || newVisitsForm.value < 0){
      return false;
    }
    else {
      return true;
    }
}

const clearBox = ()=> {
  boardNameForm.value = '';
  newShoppingForm.value = 0;
  newUsersForm.value = 0;
  incrementShoppingForm.value = 0;
  newUsersForm.value = 0;
  newVisitsForm.value = 0;
}

const obtainWeather = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Mexico City,mx&appid=aff9e21e441bf604ab0f9e874f13d734')
  .then(response => response.json())
  .then(dataWeather => {
    console.log(dataWeather);
    console.log(dataWeather.name, dataWeather["main"].temp);
    city.innerHTML = dataWeather.name;
    description.innerHTML = dataWeather["weather"][0].main;
    temp.innerHTML = 'Temp: ' + dataWeather["main"].temp + ' °F';
    tempMax.innerHTML = 'Max: ' + dataWeather["main"].temp_max + ' °F';
    tempMin.innerHTML = 'Min: ' + dataWeather["main"].temp_min + ' °F';
    });
};

register.addEventListener('click', () =>{
  if(validateBox()){
    data = obtainData();
    showData(data);
    alert('Los datos se han registrado correctamente')
    clearBox();
  }
  else {
    alert('Para continuar es necesario llenar todos los campos del formulario, recuerde que las cantidades deben ser mayor a 0');
  }

});

obtainWeather();
