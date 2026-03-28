fetch(`https://fakestoreapi.com/products`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    for(let i = 0; i < data.length; i++){
        document.getElementById("cards").innerHTML +=
        `<div class="card">
            <div class="card-div">
                <img src="${data[i].image}" alt="">
            </div>

            <div class="price">
                <p>${data[i].title}</p>
                <h3>$${data[i].price}</h3>
            </div>


        </div>`
    }
    
    
})