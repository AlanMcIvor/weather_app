// variables
const apiKey = "22a30357fb7f0fbfea490b1195ca081c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchValue = document.querySelector(".location_input");
const searchBtn = document.querySelector(".submit_btn");
const mainIcon = document.querySelector(".main_icon");


// asynchronous function to access openweather api
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404 || searchValue.value == ""){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather_container").style.display = "none";
    }else{
        var data = await response.json();

    // log the returned data to the console
    console.log(data)

    // access our outputs and insert the requred data fron the api
    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".todays_temp").innerHTML = " " + Math.round(data.main.temp) +"℃";
    document.querySelector(".humidity").innerHTML = "<box-icon name='water' size='md' color='white'></box-icon>" + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "<box-icon name='wind' size='md' color='white'></box-icon>" + Math.round(data.wind.speed)  + "km/h";
    document.querySelector(".date").innerHTML = new Date().toLocaleDateString().padStart(10, '0')
    document.querySelector(".conditon").innerHTML = data.weather[0].main;

    // display specific icon depending on weather
    if(data.weather[0].main == "Clouds"){
        mainIcon.src = "assets/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        mainIcon.src = "assets/clear.png";
    }else if(data.weather[0].main == "Rain"){
        mainIcon.src = "assets/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        mainIcon.src = "assets/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        mainIcon.src = "assets/mist.png";
    }else if(data.weather[0].main == "Snow"){
        mainIcon.src = "assets/snow.png";
    }
    // show search once a city has been entered
    document.querySelector(".weather_container").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}


// search based on our city input
searchBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    checkWeather(searchValue.value);
})


