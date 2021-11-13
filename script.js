'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const getCountryData = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data);

        // var keys = Object.keys(currencies);

        // console.log(keys.indexOf("GHS"))

        // console.log(keys[keys.indexOf("GHS")])

        // console.log(currencies.keys[keys.indexOf("GHS")])



        const array = Object.entries(data.currencies)
        console.log(array[0])
        const value = array[0]
        console.log(value[1])



        const html =
            ` <article class="country">
      <img class="country__img" src="${data.flags.png}"/>
      <div class="country__data">
        <h3 class="country__name">
        ${data.name.common}
        </h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>🤝🏿</span>
        ${+(data.population / 1000000).toFixed(1)}people
        </p>
        <p class="country__row">
        <span>🗣️</span>
        ${Object.values(data.languages)} LANG
        </p>
        <p class="country__row"><span>💰</span>
        ${value[1].name}${value[1].symbol} 
        </p>
      </div>
    </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1;
    })
};
const question = window.prompt('What country are you looking for?')
getCountryData(question)