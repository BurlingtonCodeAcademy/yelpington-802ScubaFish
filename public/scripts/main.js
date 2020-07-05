let myMap = L.map('map').setView([44.4759, -73.2121], 14)
let mainList = document.getElementById('mainList')
let display = document.getElementById('display')
let latLngArry = []
let restListArray = []



// Setting up a center marker for Burlington
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)


function restDetails() {

    // getting the list of restaurants
    fetch('https://yelpingtonapi.herokuapp.com/api/restaurants')
        .then((res) => {
            // returning the list as a json object
            return res.json()
        }).then((restList) => {

            // make each indivdual restaurant and add a 'click' event to each item
            restList.forEach((restaurant) => {
                let item = document.createElement(`li`)
                let id = restaurant.id
                let name = restaurant.name
                // make each name a link to that restaurants page
                item.innerHTML = `<a class="single-rest" href="/restaurants/${id}"target="_self">${name}</a>`
                display.appendChild(item)
            })

            // making a map marker for each of the 16 individual restaurants
            restList.forEach((restaurant) => {
                fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants/${restaurant.id}`)
                    .then((data) => {
                        return data.json()

                    }).then((jsonObj) => {
                        let id = restaurant.id
                        let name = restaurant.name
                        let coords = jsonObj.coords
                        var lat = parseFloat(coords[0])
                        var lon = parseFloat(coords[1])
                        L.marker([lat, lon]).addTo(myMap).bindPopup(`<a class="single-rest" href="/restaurants/${id}"target="_self">${name}</a>`)
                    })
            })
        })
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