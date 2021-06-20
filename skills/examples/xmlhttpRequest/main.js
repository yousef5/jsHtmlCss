// variables
const selectCountries = document.getElementById("selectCountry");
const masterCard = document.getElementById("masterCard");
const card = document.querySelector(".card");
class App {
  constructor() {
    this._loadList();

    // events
    selectCountries.addEventListener("change", this._newWorkout.bind(this));
  }

  _loadList() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v2/all");
    request.send();
    request.addEventListener("load", function () {
      const listData = JSON.parse(this.responseText);
      const listValue = listData
        .map((value) => {
          return `<option value="${value.name}"> ${value.name}</option>`;
        })
        .join(" ");
      selectCountries.insertAdjacentHTML("beforeend", listValue);
      console.log(listData[0]);
    });
  }

  _newWorkout() {
    const country = selectCountries.value;
    masterCard.innerHTML = "";
    this._renderCountryCard(country);
    console.log(country);
  }

  _renderCountryCard(country) {
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
    request2.send();
    request2.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      const html = `
    <div class="card">
    <img src="${data.flag}" class="imgCard">
    <div class="card-info">
      <span class="card-title1">${data.name}</span>
      <span class="card-title2">${data.nativeName}</span>
      <div class="info">
      <span class="spanTitle"> 🏛️ </span>
      <span class="span__value">${data.capital}</span>

      <span class="spanTitle"> 🗺️ </span>
      <span class="span__value">${data.region}</span>


      <span class="spanTitle"> 👨‍👩‍👦‍👦</span>
      <span class="span__value"> ${(data.population / 1000000).toFixed(1)} m</span>

      <span class="spanTitle">⏲️</span>
      <span class="span__value">${data.timezones[0]}</span>


      <span class="spanTitle">📞</span>
      <span class="span__value">+${data.callingCodes[0]}</span>

      <span class="spanTitle">💸</span>
      <span class="span__value">${data.currencies[0].code}</span>

    </div>

    </div>
  </div>
        `;
      masterCard.innerHTML = html;
      console.log(data.currencies[0].code);
    });
  }
}

const app = new App();
