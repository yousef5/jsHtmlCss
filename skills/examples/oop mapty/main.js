// variables
"use strict";

const btnCustomer = document.getElementById("btnCustomer");
const inputCustomerName = document.querySelector(".customerName");
const inputType = document.querySelector(".selectType");
const inputCity = document.querySelector(".city");
const inputDebt = document.querySelector(".debt");
const inputDate = document.querySelector(".debtDate");
const form = document.querySelector("form");
const customersData = document.querySelector(".customers-data");
const dataSection = document.querySelector(".data");

class Agent {
  constructor(name, city, type, debt, date) {
    this.name = name;
    this.type = type;
    this.debt = debt;
    this.date = date;
    this.city = city;
  }
}

// architect
class App {
  #map;
  #mapEvent;
  #mapZoom = 13;
  #agents = [];

  constructor() {
    this._getPostion();
    // events
    btnCustomer.addEventListener("click", this._showSide.bind(this));
    form.addEventListener("submit", this._newWorkout.bind(this));
  }

  _getPostion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._showMap.bind(this),
        function () {
          alert("we can not get your position");
        }
      );
    }
  }

  _showMap(postion) {
    const { latitude } = postion.coords;
    const { longitude } = postion.coords;
    const coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // evevt on click on map
    this.#map.on("click", this._mutiDo.bind(this));
  }

  _showForm() {
    form.classList.remove("form-hidden");
    inputCustomerName.focus();
  }

  _showSide() {
    dataSection.classList.toggle("data-hidden");
  }

  _mutiDo() {
    this._showForm();
    dataSection.classList.remove("data-hidden");
  }

  _newWorkout(e) {
    e.preventDefault();
    // validation
    const validation = (...inputs) => inputs.every((inp) => inp !== "");
    const positiveDbt = (inp) => inp > 0;

    const type = inputType.value;
    const city = inputCity.value;
    const name = inputCustomerName.value;
    const debt = +inputDebt.value;
    const date = inputDate.value;
     console.log(date);
    let newCustomer;

    if (!validation(type, city, name, debt, date) || !positiveDbt(debt))
      return alert(`you enter invalid fields please takeCare!!!!`);
      newCustomer = new Agent(name, city, type, debt, date);
  }
}

const app = new App();
