const getInfoButton = document.getElementById('getInfoButton');
const contentElement = document.getElementById('content');
const errorElement = document.getElementById('error');
const pictureElement = document.getElementById('picture');
const cityElement = document.getElementById('city');
const countryElement = document.getElementById('country');
const nameElement = document.getElementById('name');
const postcodeElement = document.getElementById('postcode');


getInfoButton.addEventListener('click', () => {
    const apiUrl = 'https://randomuser.me/api';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const userInfo = data.results[0];
    
            pictureElement.src = userInfo.picture.large;
            cityElement.textContent = `${userInfo.location.city}`;
            countryElement.textContent = `${userInfo.location.country}`;
            nameElement.textContent = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;
            postcodeElement.textContent = `${userInfo.location.postcode}`;
            contentElement.style.display = 'flex';
        })
        .catch(error => {
            errorElement.textContent = 'Error while receiving data';
            console.error('The request has failed:', error);
        });
})