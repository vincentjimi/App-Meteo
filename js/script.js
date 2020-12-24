
const h_condition = document.getElementById('h_condition');
const h_tmp = document.getElementById('h_tmp');
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

            let icon= "";
            switch (condition) {
                case 'Ensoleillé':
                  icon = `<div class="icon sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                          </div>
                          `;
                  break;
                case 'Nuit nuageuse':
                    icon = `<div class="icon cloudy">
                                <div class="cloud"></div>
                                <div class="cloud"></div>
                            </div>
                    	    `;
                  break;
                case 'Nuit claire':
                    icon = `<div class="icon cloudy">
                                <div class="cloud"></div>
                                <div class="cloud"></div>
                            </div>
                    	    `;
                  break;
                case 'Faibles passages nuageux':
                    icon = `<div class="icon cloudy">
                                <div class="cloud"></div>
                                <div class="cloud"></div>
                            </div>
                    	    `;
                  break;
                case 'Averses de pluie faible':
                    icon = `<div class="icon rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                  break;
                default:
                  icon = `<div class="icon cloudy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                        </div>
                        `;
            }

            h_condition.innerHTML = icon;
            h_tmp.innerHTML = tmp+"°C";
            h_date.innerHTML = date;
            h_city.innerHTML = city;



////////////////////////////////////////////////////////////////////////////////////////////
            let day1_name = temp.fcst_day_0.day_short;
            let day1_min = temp.fcst_day_0.tmin;
            let day1_max = temp.fcst_day_0.tmax;
            let dat1_condition = temp.current_condition.condition;


            let day2_name = temp.fcst_day_1.day_short;
            let day2_min = temp.fcst_day_1.tmin;
            let day2_max = temp.fcst_day_1.tmax;
            let dat2_condition = temp.current_condition.condition;


            let day3_name = temp.fcst_day_2.day_short;
            let day3_min = temp.fcst_day_2.tmin;
            let day3_max = temp.fcst_day_2.tmax;
            let dat3_condition = temp.current_condition.condition;


            let day4_name = temp.fcst_day_3.day_short;
            let day4_min = temp.fcst_day_3.tmin;
            let day4_max = temp.fcst_day_3.tmax;
            let dat4_condition = temp.current_condition.condition;


            let day5_name = temp.fcst_day_4.day_short;
            let day5_min = temp.fcst_day_4.tmin;
            let day5_max = temp.fcst_day_4.tmax;
            let dat5_condition = temp.current_condition.condition;


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
    
    console.log(lat, lng)
    
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


        }
      };//end of outer ajax
    xhttp.open("POST", url, true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    // }

    
    let searchBtn = document.getElementById("searchBtn").onclick = function() {
        event.preventDefault();
        let ville = document.getElementById("search").value;
        newCity(ville);
    }

})// geo location

