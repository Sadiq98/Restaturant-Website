




function populateCard(cardElement, productData) {
  const titleElement = cardElement.querySelector('.card-title');
  const priceElement = cardElement.querySelector('.price');
  const imageElement = cardElement.querySelector('.card-img-top');

  titleElement.innerHTML = productData.title;
  priceElement.innerHTML = productData.price;
  imageElement.src = productData.image;

}

function getProduct() {
  // Make API call
  fetch('https://dev.foodkit.io/api/v5/storefront/content/tenants/integer/menu')
      .then(response => response.json())
      .then(data => {
          console.log(data);

          // Find all card elements
          const cardElements = document.querySelectorAll('.card,.thumbnail');

          // Populate each card with data
          cardElements.forEach((cardElement, index) => {
              populateCard(cardElement, data[index]);
          });
      })
      .catch(error => {
          console.error('Error fetching products.', error);
      });
}

window.addEventListener('load', getProduct);



