
const h_condition = document.getElementById('h_condition');
const h_tmp = document.getElementById('h_tmp');
const h_co = document.getElementById('h_co');
const h_date = document.getElementById('h_date');
const h_city = document.getElementById('h_city');


function newCity(ville) {
    
    let url = 'https://www.prevision-meteo.ch/services/json/'+ville;
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let temp = JSON.parse(this.responseText);
            console.log(temp);
            let condition = temp.current_condition.condition;
            let tmp = temp.current_condition.tmp;
            let date = temp.current_condition.date;
            let city = temp.city_info.name;
            console.log(condition);


            

            let day1_condition = temp.fcst_day_0.condition;
            let day2_condition = temp.fcst_day_1.condition;
            let day3_condition = temp.fcst_day_2.condition;
            let day4_condition = temp.fcst_day_3.condition;
            let day5_condition = temp.fcst_day_4.condition;

            weather = {
                sunny: `<div class="icon sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                        </div>
                        `,
                sunShower: `<div class="icon sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                        </div>
                        `,
                sunShowerNoRain: `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                            `,
                thunderStorm: `<div class="icon thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                        <div class="bolt"></div>
                        <div class="bolt"></div>
                        </div>
                    </div>
                    `,
                flurries: `<div class="icon flurries">
                            <div class="cloud"></div>
                            <div class="snow">
                            <div class="flake"></div>
                            <div class="flake"></div>
                            </div>
                        </div>
                        `,
                rainy: `<div class="icon rainy">
                            <div class="cloud"></div>
                            <div class="rain"></div>
                        </div>
                        `,
                cloudy: `<div class="icon cloudy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                        </div>
                        `
            }// End of weather object

            weather2 = {
                sunny: `<div class="icon2 sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                        </div>
                        `,
                sunShower: `<div class="icon2 sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                        </div>
                        `,
                sunShowerNoRain: `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                            `,
                thunderStorm: `<div class="icon2 thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                        <div class="bolt"></div>
                        <div class="bolt"></div>
                        </div>
                    </div>
                    `,
                flurries: `<div class="icon2 flurries">
                            <div class="cloud"></div>
                            <div class="snow">
                            <div class="flake"></div>
                            <div class="flake"></div>
                            </div>
                        </div>
                        `,
                rainy: `<div class="icon2 rainy">
                            <div class="cloud"></div>
                            <div class="rain"></div>
                        </div>
                        `,
                cloudy: `<div class="icon2 cloudy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                        </div>
                        `
            }// End of weather2 object


            
            let icon= "";
            switch (condition) {
                case 'Ensoleillé':
                case 'Nuit claire':
                icon = weather.sunny;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                case 'Averses de pluie modérée':
    
                icon = weather.sunShower;
                break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                case 'Nuit légèrement voilée':
                case 'Faibles passages nuageux':
                case 'Nuit bien dégagée':
                case 'Stratus':
                case 'Stratus se dissipant':
                case 'Nuit claire et stratus':
                case 'Eclaircies':

                icon = weather.sunShowerNoRain;
                break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                case 'Averses de pluie forte':
                case 'Couvert avec averses':
                case 'Faiblement orageux':
                case 'Nuit faiblement orageuse':
                case 'Orage modéré':
                case 'Fortement orageux':
                    
                icon = weather.thunderStorm;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                case 'Nuit avec averses de neige faible':
                case 'Neige faible':
                case 'Neige modérée':
                case 'Neige forte':
                case 'Pluie et neige mêlée faible':
                case 'Pluie et neige mêlée modérée':
                case 'Pluie et neige mêlée forte':
                    
                icon = weather.flurries;
                break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                case 'Pluie modérée':
                case 'Pluie faible':
    
                icon = weather.rainy;
                break;
    /*--------------------------------------------------------------*/
                default:
                icon = weather.cloudy;
            }
            


            h_condition.innerHTML = icon;
            h_tmp.innerHTML = tmp+"°C";
            h_co.innerHTML = condition;
            h_date.innerHTML = date;
            h_city.innerHTML = city;
////////////////////////////////////////////////////////////////////////////////////////
            
            
////////////////////////////////////////////////////////////////////////////////////////
                
            let icon3= "";
            switch (day2_condition) {
                case 'Ensoleillé':
                case 'Nuit claire':
                icon3 = weather2.sunny;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                case 'Averses de pluie modérée':
    
                icon3 = weather2.sunShower;
                break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                case 'Nuit légèrement voilée':
                case 'Faibles passages nuageux':
                case 'Nuit bien dégagée':
                case 'Stratus':
                case 'Stratus se dissipant':
                case 'Nuit claire et stratus':
                case 'Eclaircies':

                icon3 = weather2.sunShowerNoRain;
                break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                case 'Averses de pluie forte':
                case 'Couvert avec averses':
                case 'Faiblement orageux':
                case 'Nuit faiblement orageuse':
                case 'Orage modéré':
                case 'Fortement orageux':
                    
                icon3 = weather2.thunderStorm;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                case 'Nuit avec averses de neige faible':
                case 'Neige faible':
                case 'Neige modérée':
                case 'Neige forte':
                case 'Pluie et neige mêlée faible':
                case 'Pluie et neige mêlée modérée':
                case 'Pluie et neige mêlée forte':
                    
                icon3 = weather2.flurries;
                break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                case 'Pluie modérée':
                case 'Pluie faible':
    
                icon3 = weather2.rainy;
                break;
    /*--------------------------------------------------------------*/
                default:
                icon3 = weather2.cloudy;
            }
            
////////////////////////////////////////////////////////////////////////////////////////
                
                
            let icon4= "";
            switch (day3_condition) {
                case 'Ensoleillé':
                case 'Nuit claire':
                icon4 = weather2.sunny;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                case 'Averses de pluie modérée':
    
                icon4 = weather2.sunShower;
                break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                case 'Nuit légèrement voilée':
                case 'Faibles passages nuageux':
                case 'Nuit bien dégagée':
                case 'Stratus':
                case 'Stratus se dissipant':
                case 'Nuit claire et stratus':
                case 'Eclaircies':

                icon4 = weather2.sunShowerNoRain;
                break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                case 'Averses de pluie forte':
                case 'Couvert avec averses':
                case 'Faiblement orageux':
                case 'Nuit faiblement orageuse':
                case 'Orage modéré':
                case 'Fortement orageux':
                    
                icon4 = weather2.thunderStorm;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                case 'Nuit avec averses de neige faible':
                case 'Neige faible':
                case 'Neige modérée':
                case 'Neige forte':
                case 'Pluie et neige mêlée faible':
                case 'Pluie et neige mêlée modérée':
                case 'Pluie et neige mêlée forte':
                    
                icon4 = weather2.flurries;
                break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                case 'Pluie modérée':
                case 'Pluie faible':
    
                icon4 = weather2.rainy;
                break;
    /*--------------------------------------------------------------*/
                default:
                icon4 = weather2.cloudy;
            }
            
////////////////////////////////////////////////////////////////////////////////////////
                
                
            let icon5= "";
            switch (day4_condition) {
                case 'Ensoleillé':
                case 'Nuit claire':
                icon5 = weather2.sunny;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                case 'Averses de pluie modérée':
    
                icon5 = weather2.sunShower;
                break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                case 'Nuit légèrement voilée':
                case 'Faibles passages nuageux':
                case 'Nuit bien dégagée':
                case 'Stratus':
                case 'Stratus se dissipant':
                case 'Nuit claire et stratus':
                case 'Eclaircies':

                icon5 = weather2.sunShowerNoRain;
                break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                case 'Averses de pluie forte':
                case 'Couvert avec averses':
                case 'Faiblement orageux':
                case 'Nuit faiblement orageuse':
                case 'Orage modéré':
                case 'Fortement orageux':
                    
                icon5 = weather2.thunderStorm;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                case 'Nuit avec averses de neige faible':
                case 'Neige faible':
                case 'Neige modérée':
                case 'Neige forte':
                case 'Pluie et neige mêlée faible':
                case 'Pluie et neige mêlée modérée':
                case 'Pluie et neige mêlée forte':
                    
                icon5 = weather2.flurries;
                break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                case 'Pluie modérée':
                case 'Pluie faible':
    
                icon5 = weather2.rainy;
                break;
    /*--------------------------------------------------------------*/
                default:
                icon5 = weather2.cloudy;
            }
            
////////////////////////////////////////////////////////////////////////////////////////
                
            let icon6= "";
            switch (day5_condition) {
                case 'Ensoleillé':
                case 'Nuit claire':
                icon6 = weather2.sunny;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                case 'Averses de pluie modérée':
    
                icon6 = weather2.sunShower;
                break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                case 'Nuit légèrement voilée':
                case 'Faibles passages nuageux':
                case 'Nuit bien dégagée':
                case 'Stratus':
                case 'Stratus se dissipant':
                case 'Nuit claire et stratus':
                case 'Eclaircies':

                icon6 = weather2.sunShowerNoRain;
                break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                case 'Averses de pluie forte':
                case 'Couvert avec averses':
                case 'Faiblement orageux':
                case 'Nuit faiblement orageuse':
                case 'Orage modéré':
                case 'Fortement orageux':
                    
                icon6 = weather2.thunderStorm;
                break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                case 'Nuit avec averses de neige faible':
                case 'Neige faible':
                case 'Neige modérée':
                case 'Neige forte':
                case 'Pluie et neige mêlée faible':
                case 'Pluie et neige mêlée modérée':
                case 'Pluie et neige mêlée forte':
                    
                icon6 = weather2.flurries;
                break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                case 'Pluie modérée':
                case 'Pluie faible':
    
                icon6 = weather2.rainy;
                break;
    /*--------------------------------------------------------------*/
                default:
                icon6 = weather2.cloudy;
            }
            
////////////////////////////////////////////////////////////////////////////////////////
                
                    
            
            
            
            let day1 = [temp.fcst_day_1.day_short, icon3, "Max "+temp.fcst_day_1.tmax, "Min "+temp.fcst_day_1.tmin];
            let day2 = [temp.fcst_day_2.day_short, icon4, "Max "+temp.fcst_day_2.tmax, "Min "+temp.fcst_day_2.tmin];
            let day3 = [temp.fcst_day_3.day_short, icon5, "Max "+temp.fcst_day_3.tmax, "Min "+temp.fcst_day_3.tmin];
            let day4 = [temp.fcst_day_4.day_short, icon6, "Max "+temp.fcst_day_4.tmax, "Min "+temp.fcst_day_4.tmin];
            // console.log(day1);


            for (let i = 0; i < 4; i++){
                const children = document.getElementsByClassName('days')[0].children;
                const children2 = document.getElementsByClassName('days')[1].children;
                const children3 = document.getElementsByClassName('days')[2].children;
                const children4 = document.getElementsByClassName('days')[3].children;
                // console.log(children[i]);
                
                children[i].innerHTML = day1[i];
                children2[i].innerHTML = day2[i];
                children3[i].innerHTML = day3[i];
                children4[i].innerHTML = day4[i];
            }

        }
        
    };//end of outer ajax
    xhttp2.open("GET", url, true);
    // xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.send();
    // }
    
    
}


navigator.geolocation.getCurrentPosition(function (position){
    // console.log(position);
    
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    
    // console.log(lat, lng);
    
    // function loadDoc() {
    let url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.692a8fe9601028b87a99e2ecfda07ac1&format=json&lat='+lat+'&lon='+lng;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        var myArr = JSON.parse(this.responseText);
        let town = myArr.address.town;
            // console.log(town);
            document.getElementById('search').value = town;
            newCity(town);
            // console.log(newCity);
            
            // let temp = town.current_condition.tmp;

            let refreshBtn = document.getElementById("refreshBtn").onclick = function() {
                event.preventDefault();
                document.getElementById('search').value = town;
                newCity(town);
            }

        }
      };//end of outer ajax
    xhttp.open("POST", url, true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    // }

    
    
})// geo location


let searchBtn = document.getElementById("searchBtn").onclick = function() {
    event.preventDefault();
    let ville = document.getElementById("search").value;
    newCity(ville);
}




//////////////////////////////////////PWA//////////////////////////////////////////////


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) =>  console.log("Service Worker Registered", reg))
        .catch((err) => console.log("Service Worker not Registered", err));
  }


























  

  // fonction qui check si appli installable
  window.addEventListener('beforeinstallprompt', (e) => {
      console.log("beforeinstallprompt");
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  showInstallPromotion();

});

function  showInstallPromotion() {
 //alert("ok on peut installer");

 document.getElementById("btnAdd").classList.remove("d-none");

}

var btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener('click', (e) => {
// hide our user interface that shows our A2HS button
btnAdd.style.display = 'none';
// Show the prompt
deferredPrompt.prompt();
// Wait for the user to respond to the prompt
deferredPrompt.userChoice
  .then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
});