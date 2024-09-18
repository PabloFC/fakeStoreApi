const div = document.getElementById("electronics");

function myFetch(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}

async function showElectronics() {
  try {
    const electronics = await myFetch(
      "https://fakestoreapi.com/products/category/electronics"
    );

    for (let i = 0; i < electronics.length; i++) {
      div.insertAdjacentHTML(
        "beforeend",
        `<div class="container py-2 mt-2">
        <div class="row justify-content-center mb-3">
          <div class="col-12">
            <div class="card rounded-3 border_cards" style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.09)">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 alinear_centro">
                    <div
                      class="bg-image hover-zoom ripple rounded ripple-surface"
                    >
                      <img
                        src="${electronics[i].image}"
                        class="img-fluid img-prducts"
                      />
                      <a href="#">
                        <div class="hover-overlay">
                          <div
                            class="mask"
                            style="background-color: rgba(253, 253, 253, 0.15)"
                          ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5 style="text-align:left;">${electronics[i].title}</h5>
                    <p class="mb-4 mb-md-0" style="text-align:left;">
                      ${truncateString(electronics[i].description, 150)}
                    </p>
                  </div>
                  <div
                    class="col-md-6 col-lg-3 col-xl-3"
                  >
                    <div class="d-flex justify-content-center align-items-center mb-1">
                      <h4 class="mb-1 me-1">${electronics[i].price}€</h4>
                    </div>
                    <div class="d-flex flex-column mt-2 ">
                      <button class="btn-primario" type="button">
                        Add to cart
                      </button>
                      <button
                        class="btn btn-ligth"
                        type="button" 
                      >
                        Add to wish list
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
      );
    }
  } catch (error) {
    console.log("Error " + error);
  }
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

showElectronics();
