var str = (window.location.pathname);
let restId = str.split('/').slice(-1)[0]

let myMap = L.map('mapTwo').setView([44.4759, -73.2121], 14)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)




fetch(`http://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)
    .then(res => res.json())
    .then((jsonObj) => {

        let coords = JSON.parse(jsonObj.coords)
        var lat = parseFloat(coords[0])
        var lon = parseFloat(coords[1])
        L.marker([lat, lon]).addTo(myMap)
    })
fetch(`http://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)           //possible to put this inside original fetch?
    .then(res => res.json())
    .then((restInfo) => {
        console.log(restInfo)
        let resName = document.getElementById('resName');
        let address = document.getElementById('address');
        let phone = document.getElementById('phone');
        let website = document.getElementById('website');
        let hours = document.getElementById('hours');
        let notes = document.getElementById('notes');

        resName.innerHTML = `${restInfo.name}`
        address.innerHTML = `${restInfo.address}`
        phone.innerHTML = `${restInfo.phone}`
        website.innerHTML = `${restInfo.website}`
        hours.innerHTML = `${restInfo.hours}`
        notes.innerHTML = `${restInfo.notes}`

    })


// notes.forEach((note)={
// let item = document.createElement('li')
// let  = restInfo.notes
// 
// item.innerHTML = `<a class="single-rest" href="/restaurants/${id}"target="_self">${notes}</a>`
// })