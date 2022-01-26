// https://rickandmortyapi.com/api/character

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';


function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event){
        // tiene 5 estados
        if (xhttp.readyState === 4){ //Se completó el estado
            if(xhttp.status === 200){ 
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('-->Error (API): '+url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}


//
// Se debe evitar el Callback Hell
//

fetchData(API, function(error1, data1){
    if (error1) return console.error('1)-->' + error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if (error2) console.error('2)-->' + error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) console.error('3)-->' + error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    });
});