const URL="http://api.openweathermap.org/geo/1.0/direct";
const URL2="https://api.openweathermap.org/data/2.5/weather";
let city=document.querySelector("#enter input");
let btn=document.querySelector("#enter button");                                  
let weatherImg=document.querySelector(".img-main");
let temperature=document.querySelector("#weather h2");
let weather=document.querySelector("#weather p");
let humidity=document.querySelector("#humidity p");
let windSpeed=document.querySelector("#wind p");
let iconBox=document.querySelector(".icon");
let box=document.querySelector(".img-main")

console.log(btn);

btn.addEventListener("click", async ()=>{
    try {
         async function cordination(){
       let response= await fetch(`${URL}?q=${city.value}&&appid=97eb073c2f7edbfa3015b26b9f578779`);
       let  data= await response.json();
        if (data.lenght===0){
            throw new Error("City not found")
        }
        return {
            lat:data[0].lat,
            lon:data[0].lon
        }
    }
    
    const {lat,lon}= await cordination();
    city.value="";
    async function getTemp(){
        let response= await fetch(`${URL2}?lat=${lat}&lon=${lon}&appid=97eb073c2f7edbfa3015b26b9f578779`);
       let  data= await response.json();
        let temperature=Math.trunc(data.main.temp-273);
        let weather=data.weather[0].description;
        console.log(data.weather);
         let humidity=data.main.humidity;
         let wind=data.wind.speed;
         let icon=data.weather[0].icon;
        return {
            temp:temperature,
            description:weather,
            humid:humidity,
            wind:wind,
            icon:icon
        }
    }
    let {temp,description,humid,wind,icon} = await getTemp();
    temperature.innerText=`${temp} \u00B0C`;
    weather.innerText=`${description}`;
    humidity.innerText=`${humid}`;
    windSpeed.innerText=`${wind}`;
    let imgURL=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(icon);
    box.style.backgroundColor="rgb(137, 137, 224)";
    iconBox.style.backgroundImage=`url(${imgURL})`;
    } catch (error) {
        alert("city not found");
        city.value=""
    }
   
})