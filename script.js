// // variables
// const apiKey = "22a30357fb7f0fbfea490b1195ca081c";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchValue = document.querySelector("#search_value");
// const searchBtn = document.querySelector("#submit_btn");
// const icon = document.querySelector(".icon");




// // asynchronous function to access openweather api
// async function checkWeather(city){
//     const response = await fetch(apiURL + city + `&appid=${apiKey}`);

//     if(response.status == 404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather_container").style.display = "none";
//     }else{
//         var data = await response.json();

//     // log the returned data to the console
//     console.log(data)

//     // access our outputs and insert the requred data fron the api
//     document.querySelector("#city_name").innerHTML = data.name;
//     document.querySelector("#temp_display").innerHTML = Math.round(data.main.temp) +"℃";
//     document.querySelector("#humidity_display").innerHTML = data.main.humidity + "%";
//     document.querySelector("#wind_display").innerHTML = Math.round(data.wind.speed)  + "km/h";

//     // display specific icon depending on weather
//     if(data.weather[0].main == "Clouds"){
//         icon.src = "assets/clouds.png";
//     }else if(data.weather[0].main == "Clear"){
//         icon.src = "assets/clear.png";
//     }else if(data.weather[0].main == "Rain"){
//         icon.src = "assets/rain.png";
//     }else if(data.weather[0].main == "Drizzle"){
//         icon.src = "assets/drizzle.png";
//     }else if(data.weather[0].main == "Mist"){
//         icon.src = "assets/mist.png";
//     }else if(data.weather[0].main == "Snow"){
//         icon.src = "assets/snow.png";
//     }
//     // show searh once a city has been entered
//     document.querySelector(".weather_container").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//     }
    
// }


// // search based on our city input
// searchBtn.addEventListener("click", (e)=> {
//     e.preventDefault()
//     checkWeather(searchValue.value);
// })


// card carousel
