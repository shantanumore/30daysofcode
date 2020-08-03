window.addEventListener('load', () => {
    let lat;
    let long;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    let temperaturespan = document.querySelector(".temperature span");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);
            // const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fa61ebaaa8db71642011475e910a335c`

            fetch(api)
               .then(response=>{
                   return response.json();
               })
               .then(data =>{
                   console.log(data);
                   const {temp} = data.main;
                   const celsius = Math.round(parseFloat(temp)-273.15);
                   const fahrenheit = Math.round(((parseFloat(temp)-273.15)*1.8)+32);
                   const {description} = data.weather[0];
                   const iconCode = data.weather[0].icon;
                    console.log(iconCode);
                   const iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";   // http://openweathermap.org/img/wn/50d@2x.png
                   temperatureDegree.textContent = fahrenheit;
                   locationTimezone.textContent = data.name;
                   temperatureDescription.textContent=description.toUpperCase();
                   temperatureDescription.style.fontWeight = 'bold';
                   document.getElementById("myImg").src = iconUrl;


                   //Change temperature to C/F
                   temperatureSection.addEventListener('click',() =>{
                       if(temperaturespan.textContent === '\xB0F'){
                             temperaturespan.textContent= "\xB0C";
                             temperatureDegree.textContent = celsius;
                       }else{
                        temperaturespan.textContent= "\xB0F";
                        temperatureDegree.textContent= fahrenheit;
                       }
                   })
               });
        });
    }

   


});