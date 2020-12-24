

function newCity(ville) {
    
    let url = 'https://www.prevision-meteo.ch/services/json/'+ville;
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let temp = JSON.parse(this.responseText);
            // console.log(temp);
            // console.log(temp.current_condition);
            // console.log(temp.current_condition.tmp);
            let yes = temp
            return yes;
    
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

    

})// geo location


let searchBtn = document.getElementById("searchBtn").onclick = function() {
    event.preventDefault();
    let cityName = document.getElementById("search").value;
    console.log(cityName);
    var val = newCity(cityName);
    console.log(val);
    
}
