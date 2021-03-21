//1.Create ann instance of XMLHttpRequest
var request = new XMLHttpRequest();
//2.create a connections (or) open a connection
request.open('get','https://restcountries.eu/rest/v2/all',true);
//3.send the request
request.send();
//4.Load the response this function is triggered only when the data is retrived
request.onload = function(){
    var data = JSON.parse(this.response);
        for(var i in data){
            console.log(data[i].name);
        }
}