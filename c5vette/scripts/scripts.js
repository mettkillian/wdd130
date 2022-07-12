/* Code from W3 Schools */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const feedbackElement = document.getElementById('feedback');        
        const formElement = document.forms[0];        
        formElement.addEventListener('submit', function(e) {           
            e.preventDefault();            
            feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
            feedbackElement.style.display = "block";            
            document.body.classList.toggle('moveDown');
});

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=86ba4d2c72ca8e279c8006007e3ef735", true);
weatherRequest.send();
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    let t = [weatherData.main.temp];
    let w = [weatherData.wind.speed];
    let h = [weatherData.main.humidity];
    let s = [weatherData.weather[0].main];
    let d = [weatherData.wind.deg];
    let dir="";    
    t = Math.round(t);
    w = Math.round(w);
        if ((d >= 337 && d <= 360) || (d >=0 && d <= 22)) {
            dir ="N";
        }    
        else if (d >= 23 && d <= 67) {
            dir ="NE";
        }
        else if (d >= 68 && d <= 112) {
            dir ="E";
        }
        else if (d >= 113 && d <= 157) {
            dir ="SE";    
        }
         else if (d >= 158 && d <= 202) {
            dir ="S";
        }
        else if (d >= 203 && d <= 246) {
            dir ="SW";
        }
        else if (d >= 247 && d <= 290) {
            dir ="W";
        }
        else dir = "NW"
  
    document.getElementById("current-temp").textContent=t;
    document.getElementById("current-speed").textContent=w;
    document.getElementById("current-humidity").textContent=h;
    var windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("current-chill").textContent=windChill;
    document.getElementById("current-skies").textContent=s;
    document.getElementById("direction").textContent=dir;
}