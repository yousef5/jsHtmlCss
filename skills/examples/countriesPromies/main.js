// variables
const selectCountries = document.getElementById("selectCountry");
const masterCard = document.getElementById("masterCard");
const card = document.querySelector(".card");
const neighbours = document.querySelector(".neighbours");
let neigbour;

class App {
  constructor() {
    this._loadList();
    // events
    selectCountries.addEventListener("change", this._newWorkout.bind(this));
    neighbours.addEventListener("click", this._selectByClick.bind(this));
  }

  _loadList() {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        const dataList = data
          .map((d) => `<option value="${d.name}"> ${d.name}</option>`)
          .join(" ");
        selectCountries.insertAdjacentHTML("beforeend", dataList);
      });
  }

  _newWorkout(c) {
    const country = selectCountries.value || c;
    masterCard.innerHTML = "";
    neighbours.innerHTML = "";
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        this._renderCountryCard(data);
        const neigbours = data[0].borders;
        const listneigbours = neigbours.map((n) => `${n};`).join("");
        return fetch(
          `https://restcountries.eu/rest/v2/alpha?codes=${listneigbours}`
        );
      })
      .then((response) => response.json())
      .then((data) => this._renderNieghbour(data));
  }

  _renderCountryCard(datas) {
    const [data] = datas;
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
      <span class="span__value"> ${(data.population / 1000000).toFixed(
        1
      )} m</span>

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
  }

  _renderNieghbour(data) {
    const neighbourHtml = data
      .map(
        (xx) => `
        <div class="neighboutCard">
        <img src="${xx.flag}" alt="" class="neighbourimg">
        <h3 class="neighbourtitle">
          ${xx.name}
        </h3>
      </div>
        `
      )
      .join(" ");

    neighbours.innerHTML = neighbourHtml;
  }

  _selectByClick(e) {
    console.log(e.target);
    const targetEl = e.target.closest(".neighboutCard");
    const titlEl = targetEl.querySelector(".neighbourtitle").textContent.trim();
    masterCard.innerHTML = "";
    neighbours.innerHTML = "";
    selectCountries.value = null;
    this._newWorkout(titlEl);
  }
}

const app = new App();
