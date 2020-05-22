fetch('http://api.openweathermap.org/data/2.5/weather?id=2741623&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function(resp) { return resp.json()}) 
    .then(function(data){
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        Canada = Math.round(data.main.temp - 285);
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 285) + '&deg;';
        HCanada = Math.round(data.main.humidity);
        document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer').textContent = data.weather[0] ['description'];
        document.getElementById('li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        
})

fetch('http://api.openweathermap.org/data/2.5/weather?id=6087575&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name2').textContent = data.name;
        Germany = Math.round(data.main.temp - 262);
        document.querySelector('.price2').innerHTML = Math.round(data.main.temp - 262) + '&deg;';
        HGermany = Math.round(data.main.humidity);
        document.querySelector('.humidity2').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer2').textContent = data.weather[0]['description'];
        document.getElementById('li2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })

fetch('http://api.openweathermap.org/data/2.5/weather?id=2510769&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        document.querySelector('.package-name3').textContent = data.name;
        Spain = Math.round(data.main.temp - 276);
        document.querySelector('.price3').innerHTML = Math.round(data.main.temp - 276) + '&deg;';
        HSpain = Math.round(data.main.humidity);
        document.querySelector('.humidity3').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer3').textContent = data.weather[0]['description'];
        document.getElementById('li3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})

/*var term = (Canada + Germany + Spain) / 3;
document.getElementById("term").innerHTML = Math.round(term) + '&deg;';*/
/*var maxHumidity = (HCanada + HGermany + HSpain) / 3;
document.getElementById("maxHumidity").innerHTML = Math.round(maxHumidity) + '%'; */










