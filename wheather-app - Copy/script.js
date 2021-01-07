//Default city set as brussels
let name= "brussels";
weatherBalloon(name);

//First function : submit a city and run the function for this city
    document.getElementById("submit").addEventListener("click", () => {
             name= document.getElementById("city").value;
            weatherBalloon(name);
    });
//Second function: get information about a city from the API
    function weatherBalloon(name) {
        const key = 'b62a02d6293f4aed8aea1a05ad06be01';
        
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + name + '&key=' + key)  
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data);
                drawWeather(data);
        })
        .catch(function(e) {
            alert("Pleas check the spelling of the city");
            console.error(e);
        });
    }

   //FUnction to call a weather logo image, to be called in drawweather function     
     getLogo = (logo,weather) => {
            
        if(weather==="Mist"){logo.src = "img/wind.png";}
        else if(weather==="Broken clouds"){logo.src = "img/cloud-sun.png";}
        else if(weather==="Scattered clouds"){logo.src = "img/cloud-sun.png";}
        else if(weather==="Overcast clouds"){logo.src = "img/cloud.png";}
        else if(weather.includes("snow")){logo.src = "img/snow.png";}
        else if(weather==="Shower rain"){logo.src = "img/rain.png";}
        else if(weather==="Light shower rain"){logo.src = "img/rain.png";}
        else if(weather==="Clear sky"){logo.src = "img/sun.png";}
        else if(weather==="Fog"){logo.src = "img/wind.png";}
        else if(weather==="Few clouds"){logo.src = "img/cloud-sun.png";}
        else if(weather==="Light shower rain"){logo.src = "img/rain.png";}
        else if(weather==="Moderate rain"){logo.src = "img/rain.png";}
        else if(weather==="Mix snow/rain"){logo.src = "img/snow.png";}
        else if(weather==="Light rain"){logo.src = "img/rain.png";}

    } 
    //Funciton to place weather information on the screen
     drawWeather = ( data ) => {

    
        
        document.getElementById('description').innerHTML = data.data[0].weather.description;
        document.getElementById('temp').innerHTML = data.data[0].temp + '&deg;';
        document.getElementById('location').innerHTML = data.city_name;

        document.getElementById('descriptionday1').innerHTML = data.data[1].weather.description;
        document.getElementById('descriptionday2').innerHTML = data.data[2].weather.description;
        document.getElementById('descriptionday3').innerHTML = data.data[3].weather.description;
        document.getElementById('descriptionday4').innerHTML = data.data[4].weather.description;
        document.getElementById('descriptionday5').innerHTML = data.data[5].weather.description;

        document.getElementById('tempday1').innerHTML = data.data[1].temp + '&deg;';
        document.getElementById('tempday2').innerHTML = data.data[2].temp + '&deg;';
        document.getElementById('tempday3').innerHTML = data.data[3].temp + '&deg;';
        document.getElementById('tempday4').innerHTML = data.data[4].temp + '&deg;';
        document.getElementById('tempday5').innerHTML = data.data[5].temp + '&deg;';
        
        getLogo(document.getElementById("logo"),document.getElementById("description").innerHTML);
        getLogo(document.getElementById("logoday1"),document.getElementById("descriptionday1").innerHTML);
        getLogo(document.getElementById("logoday2"),document.getElementById("descriptionday2").innerHTML);
        getLogo(document.getElementById("logoday3"),document.getElementById("descriptionday3").innerHTML);
        getLogo(document.getElementById("logoday4"),document.getElementById("descriptionday4").innerHTML);
        getLogo(document.getElementById("logoday5"),document.getElementById("descriptionday5").innerHTML);
              
    }



//Copy paste of the first function to have a comparison with default city = paris
 (secondCity= () => {

    let name1= "paris";
    weatherBalloon1(name1);
    
    document.getElementById("submit1").addEventListener("click",function(){
        let name1= document.getElementById("city1").value;
        weatherBalloon1(name1);
    });
    
    function weatherBalloon1(name1) {
        const key = 'b62a02d6293f4aed8aea1a05ad06be01';
        
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + name1 + '&key=' + key)  
        .then(function(resp1) { return resp1.json() }) // Convert data to json
        .then(function(data1) {
            console.log(data1);
            drawWeather(data1);
        })
        .catch(function(e) {
            alert("Pleas check the spelling of the city");
            console.error(e);
        });
    }
    
            
            
    
    function drawWeather( data1 ) {
        
        document.getElementById('description1').innerHTML =  data1.data[0].weather.description;
        document.getElementById('temp1').innerHTML =data1.data[0].temp  + '&deg;';
        document.getElementById('location1').innerHTML = data1.city_name;


        document.getElementById('descriptionday1-1').innerHTML = data1.data[1].weather.description;
        document.getElementById('descriptionday2-1').innerHTML = data1.data[2].weather.description;
        document.getElementById('descriptionday3-1').innerHTML = data1.data[3].weather.description;
        document.getElementById('descriptionday4-1').innerHTML = data1.data[4].weather.description;
        document.getElementById('descriptionday5-1').innerHTML = data1.data[5].weather.description;

        document.getElementById('tempday1-1').innerHTML = data1.data[1].temp + '&deg;';
        document.getElementById('tempday2-1').innerHTML = data1.data[2].temp + '&deg;';
        document.getElementById('tempday3-1').innerHTML = data1.data[3].temp + '&deg;';
        document.getElementById('tempday4-1').innerHTML = data1.data[4].temp + '&deg;';
        document.getElementById('tempday5-1').innerHTML = data1.data[5].temp + '&deg;';

            

        getLogo(document.getElementById("logo1"),document.getElementById("description1").innerHTML);
        getLogo(document.getElementById("logoday1-1"),document.getElementById("descriptionday1-1").innerHTML);
        getLogo(document.getElementById("logoday2-1"),document.getElementById("descriptionday2-1").innerHTML);
        getLogo(document.getElementById("logoday3-1"),document.getElementById("descriptionday3-1").innerHTML);
        getLogo(document.getElementById("logoday4-1"),document.getElementById("descriptionday4-1").innerHTML);
        getLogo(document.getElementById("logoday5-1"),document.getElementById("descriptionday5-1").innerHTML);
       
    }

})();

document.getElementById("more").addEventListener("click",() => {
    
    if (document.getElementById("fivedays").style.display == "grid") {document.getElementById("fivedays").style.display = "none";}
    else if  (document.getElementById("fivedays").style.display = "none") {document.getElementById("fivedays").style.display = "grid";}
        
    if (document.getElementById("more").innerHTML=== "Hide") {document.getElementById("more").innerHTML= "5 days forecast"}
    else if (document.getElementById("more").innerHTML= "5 days forecast") {document.getElementById("more").innerHTML= "Hide"}

});


document.getElementById("more-1").addEventListener("click",() => {
    
     let display=document.getElementById("fivedays-1").style.display;
    
    if (display == "grid") {document.getElementById("fivedays-1").style.display = "none";}
    else if  (display = "none") {document.getElementById("fivedays-1").style.display = "grid";}
        
    if (document.getElementById("more-1").innerHTML=== "Hide") {document.getElementById("more-1").innerHTML= "Display 5 days forecast"}
    else if (document.getElementById("more-1").innerHTML= "Display 5 days forecast") {document.getElementById("more-1").innerHTML= "Hide"}
});

    


