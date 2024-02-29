const div = document.querySelector(".top_products");

function myFetch(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}

async function showProducts() {
  try {
    const products = await myFetch("https://fakestoreapi.com/products?limit=9");

    for (let i = 0; i < products.length; i++) {
      div.insertAdjacentHTML(
        "beforeend",
        `<div class="col-12 col-sm-3 ">
                    <div class="card text-black d-flex justify-content-center align-items-center mt-2 py-2 opacidad" style="border:0; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); min-height:300px">
                        <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                        <img class='img-fluid' style='max-height:100px; max-width:100px; text-align:center' src="${
                          products[i].image
                        } "
                        class="card-img-top" alt="#" />
                        <div class="card-body">
                            <div class="text-center">
                                <h5 class="card-title py-3">${truncateString(
                                  products[i].title,
                                  24
                                )}</h5>
                                <p class="text-muted mb-4">${
                                  products[i].price
                                } €</p>
                                <a class="btn-primario">Add to cart</a>
                            </div>  
                        </div>
                    </div>
                </div>
        </div>`
      );

      function truncateString(str, maxLength) {
        if (str.length > maxLength) {
          return str.substring(0, maxLength) + " ";
        } else {
          return str;
        }
      }
    }
  } catch (error) {
    console.log("Error " + error);
  }
}

showProducts();
