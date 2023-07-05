// HANDLING REJECTED PROMISES  

let countriesContainer = document.querySelector('.countries')
function  displayCountry(data){
    let html =
        `<article class="country">
            <img  class="country_img" src="${data.flags.png}" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"> ${((data.population)/1000000).toFixed(2)} M Total population</p>
            </div>
        </article>`;
        countriesContainer.insertAdjacentHTML("beforeend",html)
}
 
function getCountry(){
    //MAKE AJAX request
     fetch('https://restcountries.com/v3.1/name/usa')
    .then(function(response){
        console.log(response)
        //json method returns a promise
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0])
        return fetch('https://restcountries.com/v3.1/name/brazil')
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0])
        return fetch('https://restcountries.com/v3.1/name/germany')
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        displayCountry(data[0])
    })
    .catch(function(error){
        console.log(error)
        countriesContainer.insertAdjacentText('beforeend',`Something went wrong. Error message: ${error.message }`)
    })
    // .finally(function(){
    //     console.log('Finally method called')
    // })
    
}

document.getElementById('btn-load')
.addEventListener('click',function(){
    getCountry()
})

// FINALLY METHOD 
// finally () method executes weather the promise is either resolved or rejected