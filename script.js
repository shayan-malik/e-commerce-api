fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let allCards = "";

    for(let i = 0; i < data.length; i++){
        allCards += `<div class="card">
                <div class="card-div">
                    <img src="${data[i].image}" alt="">
                </div>

                <div class="price">
                    <p>${data[i].name}</p>
                    <h3>$${data[i].priceCents}</h3>
                </div>

            </div>`
    }

    document.getElementById("cards").innerHTML = allCards
    
})
.catch(function(error){
    console.log(error);
    
})





