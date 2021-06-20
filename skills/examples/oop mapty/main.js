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
const closeForm = document.querySelector('.closeForm')

class Agent {
  id = (Date.now() + "").slice(-10);
  constructor(coords, name, city, type, debt, date) {
    this.coords = coords;
    this.name = name;
    this.type = type;
    this.debt = debt;
    this.date = date;
    this.city = city;

    this._countDay();
    this._setDescription();
  }

  _countDay() {
    this.days = Math.ceil(
      (Date.now() - new Date(this.date)) / (1000 * 60 * 60 * 24)
    );
  }

  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.description = `${this.type} : ${this.name} <br> مديونية : ${this.debt} <br> وقف السداد : ${this.days} يوم`;
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
    this._getFrom();
    // events
    btnCustomer.addEventListener("click", this._showSide.bind(this));
    form.addEventListener("submit", this._newWorkout.bind(this));
    closeForm.addEventListener('click',this._hideForm.bind(this))
    customersData.addEventListener('click',this._moveTo.bind(this))
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

    this.#map = L.map("map").setView(coords, this.#mapZoom);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // evevt on click on map
    this.#map.on("click", this._mutiDo.bind(this));

    this.#agents.forEach((agent)=>{
      this._renderMarker(agent)
    })
  }

  _showForm() {
    form.classList.remove("form-hidden");
    inputCustomerName.focus();
  }

  _showSide() {
    dataSection.classList.toggle("data-hidden");
  }

  _mutiDo(mapE) {
    this.#mapEvent = mapE;
    this._showForm();
    dataSection.classList.remove("data-hidden");
  }

  _newWorkout(e) {
    e.preventDefault();
    // validation
    const validation = (...inputs) => inputs.every((inp) => inp !== "");
    const positiveDbt = (inp) => inp > 0;
    const { lat, lng } = this.#mapEvent.latlng;
    const type = inputType.value;
    const city = inputCity.value;
    const name = inputCustomerName.value;
    const debt = +inputDebt.value;
    const date = inputDate.value;

    let newCustomer;

    if (!validation(type, city, name, debt, date) || !positiveDbt(debt))
      return alert(`you enter invalid fields please takeCare!!!!`);

    newCustomer = new Agent([lat, lng], name, city, type, debt, date);
    console.log(newCustomer);
    this.#agents.push(newCustomer);
    this._hideForm();
    this._renderMarker(newCustomer);
    this._renderCustomer(newCustomer);
    this._saveTo();
  }

  _hideForm() {
    inputCity.value =
      inputCustomerName.value =
      inputDate.value =
      inputDebt.value =
      inputType.value =
        "";
    form.classList.add("form-hidden");
  }

  _renderCustomer(newCustomer) {
    let html = `
    <li class="customer-data" id=${newCustomer.id}>
    <span class="label customer-title">العميل</span>
    <span class="customer-title-value">${newCustomer.name}</span>
    <span class="label customer-city">المدينة</span>
    <span class="customer-city-value">${newCustomer.city}</span>
    <span class="label customer-debt">المديونية</span>
    <span class="customer-debt-value">${newCustomer.debt} جنيها</span>
    <span class="label customer-date">التاريخ </span>
    <span class="customer-date-value">${newCustomer.date}</span>
    <span class="label customer-days">فترة </span>
    <span class="customer-days-value">${newCustomer.days} يوم</span>
  </li>
    `;
    customersData.insertAdjacentHTML("beforeend", html);
  }

  _renderMarker(newCustomer) {
    L.marker(newCustomer.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          // className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${newCustomer.description}`)
      .openPopup();
  }

  _moveTo(e) {
   const el = e.target.closest('.customer-data')
  const elID = el.id
  const WantedEl = this.#agents.find((agent)=> agent.id === elID)
  console.log(WantedEl);

  this.#map.setView(WantedEl.coords,15, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
  }

  _saveTo() {
    localStorage.setItem("customers", JSON.stringify(this.#agents));
  }
  _getFrom() {
    const data = JSON.parse(localStorage.getItem("customers"));
    if (!data) return;
    this.#agents = data;
    this.#agents.forEach((agent) => {
      this._renderCustomer(agent);
    });
  }
}

const app = new App();
