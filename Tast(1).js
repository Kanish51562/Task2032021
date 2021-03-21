//Print odd numbers in an array
(function(arr){

    for(var i = 0 ; i < arr.length ; i++){
        if ([i] %2){
            console.log(i);
        }
    }
})([1,2,3,4,5,6,7]);