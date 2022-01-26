// https://rickandmortyapi.com/api/character

// para traer trabajando en Node
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (()=>{
            // tiene 5 estados
            if (xhttp.readyState === 4){ 
                //Se completó el estado
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('-> Error: ', url_api));
            }
        });
        xhttp.send();
    });
}


// para exporta la funcion
module.exports = fetchData;