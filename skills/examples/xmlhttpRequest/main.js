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
    });
  }

  _newWorkout() {
    const country = selectCountries.value;
    masterCard.innerHTML = "";
    neighbours.innerHTML = "";
    this._renderCountryCard(country);
  }

  _renderCountryCard(country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
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

      const neigbours = data.borders;
      const listneigbours = neigbours.map((n) => `${n};`).join("");
      console.log(listneigbours);
      const request2 = new XMLHttpRequest();
      request2.open(
        "GET",
        `https://restcountries.eu/rest/v2/alpha?codes=${listneigbours}`
      );
      request2.send();
      request2.addEventListener("load", function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);
        const neighbourHtml = data2
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
      });
    });
  }

  _selectByClick(e) {
    console.log(e.target);
    const targetEl = e.target.closest(".neighboutCard");
    const titlEl = targetEl.querySelector(".neighbourtitle").textContent.trim();
    masterCard.innerHTML = "";
    neighbours.innerHTML = "";
    this._renderCountryCard(titlEl);
  }
}

const app = new App();
