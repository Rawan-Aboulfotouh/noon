// var xmlhttp= new XMLHttpRequest()
// xmlhttp.open("GET","http://api.weatherapi.com/v1/forecast.json?key=5379ed1aa2f641ab879114412242601&q=Cairo&days=3");
// xmlhttp.send();
// xmlhttp.addEventListener("readystatechange",function(){
//     if(xmlhttp.readyState==4){
//         console.log(xmlhttp.response)
//     }
    
// })

async function getWeather (city){
    let api= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5379ed1aa2f641ab879114412242601&q=${city}&days=3`)
    console.log(api)

}
getWeather("cairo")