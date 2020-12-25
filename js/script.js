
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
                case 'Nuit claire':
                  icon = `<div class="icon sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                          </div>
                          `;
                    break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="rain"></div>
                            </div>
                    	    `;
                  break;
                case 'Averses de pluie modérée':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="rain"></div>
                            </div>
                    	    `;
                  break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit légèrement voilée':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Faibles passages nuageux':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit bien dégagée':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Stratus':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Stratus se dissipant':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit claire et stratus':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Eclaircies':
                    icon = `<div class="icon sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Averses de pluie forte':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Couvert avec averses':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Faiblement orageux':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Nuit faiblement orageuse':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Orage modéré':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Fortement orageux':
                    icon = `<div class="icon thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Nuit avec averses de neige faible':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige faible':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige modérée':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige forte':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée faible':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée modérée':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée forte':
                    icon = `<div class="icon flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                    icon = `<div class="icon rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
                case 'Pluie modérée':
                    icon = `<div class="icon rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
                case 'Pluie faible':
                    icon = `<div class="icon rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                default:
                  icon = `<div class="icon cloudy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                        </div>
                        `;
            }
            
            
            
            ////////////////////////////////////////////////////////////////////////////////////////////
            let icon2= "";
            switch (day1_condition) {
                case 'Ensoleillé':
                  icon2 = `<div class="icon2 sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                          </div>
                          `;
                    break;
                case 'Nuit claire':
                  icon2 = `<div class="icon2 sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                          </div>
                          `;
                    break;
    /*--------------------------------------------------------------*/
                case 'Averses de pluie faible':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="rain"></div>
                            </div>
                    	    `;
                  break;
                case 'Averses de pluie modérée':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="rain"></div>
                            </div>
                    	    `;
                  break;
    /*--------------------------------------------------------------*/
                case 'Ciel voilé':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit légèrement voilée':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Faibles passages nuageux':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit bien dégagée':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Stratus':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Stratus se dissipant':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Nuit claire et stratus':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
                case 'Eclaircies':
                    icon2 = `<div class="icon2 sun-shower">
                            <div class="cloud"></div>
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            </div>
                    	    `;
                  break;
    /*--------------------------------------------------------------*/
                case 'Nuit avec averses':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Averses de pluie forte':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Couvert avec averses':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Faiblement orageux':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Nuit faiblement orageuse':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Orage modéré':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Fortement orageux':
                    icon2 = `<div class="icon2 thunder-storm">
                                <div class="cloud"></div>
                                <div class="lightning">
                                <div class="bolt"></div>
                                <div class="bolt"></div>
                                </div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                case 'Averses de neige faible':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Nuit avec averses de neige faible':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige faible':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige modérée':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Neige forte':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée faible':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée modérée':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
                case 'Pluie et neige mêlée forte':
                    icon2 = `<div class="icon2 flurries">
                                <div class="cloud"></div>
                                <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                                </div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                
                case 'Pluie forte':
                    icon2 = `<div class="icon2 rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
                case 'Pluie modérée':
                    icon2 = `<div class="icon2 rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
                case 'Pluie faible':
                    icon2 = `<div class="icon2 rainy">
                                <div class="cloud"></div>
                                <div class="rain"></div>
                            </div>
                    	    `;
                    break;
    /*--------------------------------------------------------------*/
                default:
                  icon2 = `<div class="icon2 cloudy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                        </div>
                        `;
            }
//////////////////////////////////////////////////////////////////////////////
let icon3= "";
switch (day2_condition) {
    case 'Ensoleillé':
      icon3 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
    case 'Nuit claire':
      icon3 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de pluie faible':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
    case 'Averses de pluie modérée':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Ciel voilé':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit légèrement voilée':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Faibles passages nuageux':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit bien dégagée':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus se dissipant':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit claire et stratus':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Eclaircies':
        icon3 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Nuit avec averses':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Averses de pluie forte':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Couvert avec averses':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Faiblement orageux':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit faiblement orageuse':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Orage modéré':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Fortement orageux':
        icon3 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de neige faible':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit avec averses de neige faible':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige faible':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige modérée':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige forte':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée faible':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée modérée':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée forte':
        icon3 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    
    case 'Pluie forte':
        icon3 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie modérée':
        icon3 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie faible':
        icon3 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    default:
      icon3 = `<div class="icon2 cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
            `;
            }
            

/////////////////////////////////////////////////////////////////////////////

let icon4= "";
switch (day3_condition) {
    case 'Ensoleillé':
      icon4 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
    case 'Nuit claire':
      icon4 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de pluie faible':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
    case 'Averses de pluie modérée':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Ciel voilé':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit légèrement voilée':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Faibles passages nuageux':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit bien dégagée':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus se dissipant':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit claire et stratus':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Eclaircies':
        icon4 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Nuit avec averses':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Averses de pluie forte':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Couvert avec averses':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Faiblement orageux':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit faiblement orageuse':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Orage modéré':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Fortement orageux':
        icon4 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de neige faible':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit avec averses de neige faible':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige faible':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige modérée':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige forte':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée faible':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée modérée':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée forte':
        icon4 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    
    case 'Pluie forte':
        icon4 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie modérée':
        icon4 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie faible':
        icon4 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    default:
      icon4 = `<div class="icon2 cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
            `;
}
/////////////////////////////////////////////////////////////////////////
            
    
let icon5= "";
switch (day4_condition) {
    case 'Ensoleillé':
      icon5 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
    case 'Nuit claire':
      icon5 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de pluie faible':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
    case 'Averses de pluie modérée':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Ciel voilé':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit légèrement voilée':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Faibles passages nuageux':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit bien dégagée':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus se dissipant':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit claire et stratus':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Eclaircies':
        icon5 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Nuit avec averses':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Averses de pluie forte':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Couvert avec averses':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Faiblement orageux':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit faiblement orageuse':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Orage modéré':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Fortement orageux':
        icon5 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de neige faible':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit avec averses de neige faible':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige faible':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige modérée':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige forte':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée faible':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée modérée':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée forte':
        icon5 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    
    case 'Pluie forte':
        icon5 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie modérée':
        icon5 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie faible':
        icon5 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    default:
      icon5 = `<div class="icon2 cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
            `;
}
/////////////////////////////////////////////////////////////////////////
           
            
let icon6= "";
switch (day5_condition) {
    case 'Ensoleillé':
      icon6 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
    case 'Nuit claire':
      icon6 = `<div class="icon2 sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
              </div>
              `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de pluie faible':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
    case 'Averses de pluie modérée':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                <div class="rain"></div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Ciel voilé':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit légèrement voilée':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Faibles passages nuageux':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit bien dégagée':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Stratus se dissipant':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Nuit claire et stratus':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
    case 'Eclaircies':
        icon6 = `<div class="icon2 sun-shower">
                <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                </div>
                `;
      break;
/*--------------------------------------------------------------*/
    case 'Nuit avec averses':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Averses de pluie forte':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Couvert avec averses':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Faiblement orageux':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit faiblement orageuse':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Orage modéré':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
    case 'Fortement orageux':
        icon6 = `<div class="icon2 thunder-storm">
                    <div class="cloud"></div>
                    <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    case 'Averses de neige faible':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Nuit avec averses de neige faible':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige faible':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige modérée':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Neige forte':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée faible':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée modérée':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
    case 'Pluie et neige mêlée forte':
        icon6 = `<div class="icon2 flurries">
                    <div class="cloud"></div>
                    <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                    </div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    
    case 'Pluie forte':
        icon6 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie modérée':
        icon6 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
    case 'Pluie faible':
        icon6 = `<div class="icon2 rainy">
                    <div class="cloud"></div>
                    <div class="rain"></div>
                </div>
                `;
        break;
/*--------------------------------------------------------------*/
    default:
      icon6 = `<div class="icon2 cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
            `;
}
/////////////////////////////////////////////////////////////////////////
            
            
            h_condition.innerHTML = icon;
            h_tmp.innerHTML = tmp+"°C";
            h_co.innerHTML = condition;
            h_date.innerHTML = date;
            h_city.innerHTML = city;
            





            
            let day1 = [temp.fcst_day_0.day_short, icon2, "Max "+temp.fcst_day_0.tmax, "Min "+temp.fcst_day_0.tmin];
            let day2 = [temp.fcst_day_1.day_short, icon3, "Max "+temp.fcst_day_1.tmax, "Min "+temp.fcst_day_1.tmin];
            let day3 = [temp.fcst_day_2.day_short, icon4, "Max "+temp.fcst_day_2.tmax, "Min "+temp.fcst_day_2.tmin];
            let day4 = [temp.fcst_day_3.day_short, icon5, "Max "+temp.fcst_day_3.tmax, "Min "+temp.fcst_day_3.tmin];
            let day5 = [temp.fcst_day_4.day_short, icon6, "Max "+temp.fcst_day_4.tmax, "Min "+temp.fcst_day_4.tmin];
            // console.log(day1);


            for (let i = 0; i < 4; i++){
                const children = document.getElementsByClassName('days')[0].children;
                const children2 = document.getElementsByClassName('days')[1].children;
                const children3 = document.getElementsByClassName('days')[2].children;
                const children4 = document.getElementsByClassName('days')[3].children;
                const children5 = document.getElementsByClassName('days')[4].children;
    	        console.log(children[i]);
                children[i].innerHTML = day1[i];
                children2[i].innerHTML = day2[i];
                children3[i].innerHTML = day3[i];
                children4[i].innerHTML = day4[i];
                children5[i].innerHTML = day5[i];
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
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() { console.log("Service Worker Registered"); });
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

 $('#btnAdd').removeClass('d-none');

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