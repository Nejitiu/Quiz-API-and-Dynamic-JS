const apiUrl = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('market-items');
    const firstProduct = data[0];

    for (let i = 0; i < 8; i++) {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `
        <strong>${firstProduct.name.toUpperCase()}</strong><br>
        <span>$${firstProduct.price.toFixed(2)}</span><br>
        ${firstProduct.type}
      `;
      container.appendChild(item);
    }
  });
