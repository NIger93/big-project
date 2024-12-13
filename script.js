let API_KEY = "https://api.escuelajs.co/api/v1/products";
        let products = [];

        async function fetchProducts() {
            try {
                console.log("Fetching products...");
                let response = await fetch(API_KEY);
                products = await response.json();
                console.log("Products fetched:", products);
                renderProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        function renderProducts(products) {
            console.log("Rendering products...", products);
            let productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                let card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                <img src="${product.images?.[0] || 'https://via.placeholder.com/150'}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;
                productList.appendChild(card);
            });
        }

        document.addEventListener("DOMContentLoaded", fetchProducts);