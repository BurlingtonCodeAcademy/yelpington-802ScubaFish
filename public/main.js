let myMap = L.map('map').setView([44.4759, -73.2121], 13)
let mainList = document.getElementById('mainList')
let display = document.getElementById('display')
let latLngArry = []
let restListArray = []



// Setting up a center marker for Burlington
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(myMap)


function restDetails() {
    // getting the list of restaurants
    fetch('https://yelpingtonapi.herokuapp.com/api/restaurants')
        .then((res) => {
            // returning the list as a json object
            return res.json()
        }).then((restList) => {
            // make each indivdual restaurant and add a 'click' event to each item
            mainList.addEventListener('click', (event) => {
                restList.forEach((restaurant) => {
                    let item = document.createElement(`li`)
                    let id = restaurant.id
                    let name = restaurant.name
                    // make each name a link to that restaurants page
                    item.innerHTML = `<a class="single-rest" href="/restaurants/${id}"target="_self">${name}</a>`
                    display.appendChild(item)
                })
            })
        }) 
    // restList.forEach((restaurant) => { // making a map marker for each of the 16 individual restaurants
    // fetch(`http://nominatim.openstreetmap.org/search?q=${restaurant.id}&format=json`)
    // .then((data) => {
    // return data.json()
    // 
    // }).then((jsonObj) => {
    // let restGeoData = jsonObj[0]
    // var lat = parseFloat(restGeoData.lat)
    // var lon = parseFloat(restGeoData.lon)
    // console.log(lat)
    // console.log(lon)
    // console.log(typeof lat)
    // console.log(typeof lon)
    // L.marker([lat, lon]).addTo(map) //.bindPopup(`<a href="http://json-server.burlingtoncodeacademy.now.sh/restaurants?${name}" target="_self"></a>`)     //(link each list to it's page?)
    // })
    // })
};




restDetails()





















// mainList.addEventListener('click', (evt) => {
// restNames.forEach((name) => {
// let item = document.createElement('li')
// item.textContent = name
// 
// display.appendChild(item)
// 
// })
// })
// fetch('http://json-server.burlingtoncodeacademy.now.sh/restaurants')
// .then((res) => {
// return res.json()
// }).then((restCollect) => {
// restCollect.forEach((rest) => {
// restNames.push(rest.name)
// })
// })