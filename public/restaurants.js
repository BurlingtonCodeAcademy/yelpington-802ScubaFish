var str = (window.location.pathname);
let restId = str.split("/").slice(2).join().split("-").join(" ")
// restaurants page variables
let resName = document.getElementById('resName')
let address = document.getElementById('address')
let phone = document.getElementById('phone')
let website = document.getElementById('website')
let hours = document.getElementById('hours')
let notes = document.getElementById('notes')

console.log(restId)


fetch(`http://yelpingtonapi.herokuapp.com/api/${restId}`)
    .then(res => res.json())
    .then((restId) => {

    })