var products;
var url = "https://dummyjson.com/products"


// second function
GetDataFrom_Url(url)
.then(data =>{
    products = data.products;
    createCards();
})
.catch(error => {
    console.log(error);
});


// third function
function createCards(){
    var cards = document.getElementById('ProductContainer');

    for ( i=0 ; i<= products.length ;i++)
    {
     const product = products[i];
     const appendcards = ` 
    <div class= "col-md-4 mb-5 " >
    <div class="card" style="width: 18rem;">
    <img width="100%" height="100px" src="${product.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <a href="./singleProduct.html" class="btn btn-primary">Buy Now</a>
    </div>
  </div> 
</div>
`
 cards.innerHTML += appendcards; 
    }
}
// first function
function GetDataFrom_Url(){

    return fetch(url)
    .then(response =>{
      if(!response.ok)
      {
        throw console.error("Something Went Wrong");
      } 
      return response.json() 
    })

}