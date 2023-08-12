
const apiKey = '5d81d8229e78746fd61bbd3505e53e61';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const windSpeedElement = document.getElementById('windSpeed');
const humidityElement = document.getElementById('humidity');
const pressureElement = document.getElementById('pressure');
const dateTimeElement = document.getElementById('dateTime');
const weatherIconElement = document.getElementById('weatherIcon');
const cityInputElement = document.getElementById('cityInput');

// Function to fetch and display weather data
async function getWeatherData() {
    const cityInput = cityInputElement.value;
    if (cityInput) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            cityNameElement.textContent = `City: ${data.name}`;
            temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
            descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;

            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();
            dateTimeElement.textContent = `Date and Time: ${formattedDate}`;
            //             // Set weather icon using the icon code from the API response
            const weatherIconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${weatherIconCode}.png`;
            weatherIconElement.src = iconUrl;

            weatherInfo.style.display = 'block';
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        }
    }
}

// Event listener for clicking the "Get Weather" button
getWeatherBtn.addEventListener('click', getWeatherData);

// Event listener for Enter key press in the input field
cityInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getWeatherData();
    }
});
