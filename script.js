var request = new XMLHttpRequest();
request.open('get','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
        for(var i in data){
            console.log(data[i].name);
        }
}
