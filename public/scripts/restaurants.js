var str = (window.location.pathname);
let restId = str.split('/').slice(-1)[0]
let notesDisplay = document.getElementById('notesDisplay')

let myMap = L.map('mapTwo').setView([44.4759, -73.2121], 14)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)



// bring in the user selected restaurant info and grab the coords, then drop a pin at those coords..
fetch(`http://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)
    .then(res => res.json())
    .then((jsonObj) => {

        let coords = jsonObj.coords;
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);
        L.marker([lat, lon]).addTo(myMap)
    })
// grab all the values from their keys and show the text in the html where targeted
fetch(`http://yelpingtonapi.herokuapp.com/api/restaurants/${restId}`)
    .then(res => res.json())
    .then((restInfo) => {

        let resName = document.getElementById('resName');
        let address = document.getElementById('address');
        let phone = document.getElementById('phone');
        let website = document.getElementById('website');
        let hours = document.getElementById('hours');

        // if there is more than one note, seperate each note into it's own 'h3'
        let restNotes = restInfo.notes;

        console.log(restNotes)

        restNotes.forEach((restNote) => {
            let item = document.createElement('h3')
            item.innerText = restNote
            notesDisplay.appendChild(item)
        })

        // ..this is where the text content is actually being mapped the HTML
        resName.innerHTML = `${restInfo.name}`
        address.innerHTML = `Address: ${restInfo.address}`
        phone.innerHTML = `Phone #: ${restInfo.phone}`
        website.innerHTML = `Website URL: ${restInfo.website}`
        hours.innerHTML = `Hours: ${restInfo.hours}`


    })