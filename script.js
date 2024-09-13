const API_KEY =`1d39a744944daa0c49b710054f799923`
const form=document.querySelector("form");
const weather=document.querySelector("#weather");
const search= document.querySelector("#search");

const  getweather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url);
    const data=await response.json();
    return showweather(data);
   

}
const showweather=(data)=>{
    console.log(data);
    weather.innerHTML=`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image">
    </div>
      <div> 
     <h2>${data.main.temp}°C</h2>
     <h4>${data.weather[0].main}</h4>
    </div>`
}
form.addEventListener('submit',function(event){
getweather(search.value);
event.preventDefault();
})