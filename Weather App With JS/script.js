const InputSearch=document.querySelector(".search");
const searchbutton=document.getElementById("searchBtn");
const imageWeather=document.querySelector(".WhetherImg");
const temperature=document.querySelector(".temp");
const description=document.querySelector(".desc");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind-speed");
const locationnotfound=document.querySelector(".location-not-found");

const weather_body=document.querySelector(".body");

async function checkWeather(city){
 const api_key="753170676d1fea3e869e895d4b86770b";
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${api_key}`;


 const weather_data=await fetch(`${url}`).then(response=> response.json());

 if(weather_data.cod===`404`){
  locationnotfound.style.display="flex";
  weather_body.style.display="none";
  console.log("Error");
  return;

 }

  locationnotfound.style.display="none";
  weather_body.style.display="flex";

 temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}`;

 description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}`;

wind.innerHTML=`${weather_data.wind.speed}`;

switch(weather_data.weather[0].main){
   case 'Clouds':
    imageWeather.src="Images/cloud.jpg";
    break;
    case 'Clear':
    imageWeather.src="Images/clear.jpg";
    break;
    case 'Rain':
    imageWeather.src="Images/rain.png";
    break;
    case 'Mist':
    imageWeather.src="Images/mist.jpg";
    break;
    case 'Snow':
    imageWeather.src="Images/snow.jpg";
    break;

}

 console.log(weather_data);


}
searchbutton.addEventListener('click' ,()=>{
  checkWeather(InputSearch.value);
} )
