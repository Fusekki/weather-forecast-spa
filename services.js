//SERVICES

weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
                
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=bd44f6dd54a77de0c745f29c4f580df7", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    return weatherAPI.get({ q: city, cnt: days });
    };
  
}]);