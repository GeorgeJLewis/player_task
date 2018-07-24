import _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.getElementById('listings')

    const displayListings = data => {
        const listings = data.newsPlayer.assets
        listings.forEach(listing => {
            let el = document.createElement('div')
            el.dataset.id = listing.id
            el.innerHTML = `<h1>${listing.program_nid}</h1><p>${listing.description}</p>`
            displayElement.appendChild(el)
        });
    }

    displayElement.addEventListener('click', event => {
        alert(`You clicked on ${event.target.parentElement.dataset.id}`)
    })



    fetch('https://tv4-graphql-prod.herokuapp.com/graphql?query={newsPlayer%20{assets%20{%20id%20program_nid%20description}}}')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            displayListings(json.data)
        });
})
