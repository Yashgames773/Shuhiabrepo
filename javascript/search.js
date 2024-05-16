const products = [
    { id: 1, name: "Men's T-Shirt", category: "Clothing" },
    { id: 2, name: "Women's Shoes", category: "Footwear" },
    { id: 3, name: "Smartphone", category: "Electronics" },
    { id: 4, name: "Sunglasses", category: "Accessories" }
  ];
  
  function search() {
    const searchInput = document.getElementById("search-input");
    const resultsList = document.getElementById("results-list");
  
    // Clear previous search results
    resultsList.innerHTML = "";
  
    // Get search term from input
    const searchTerm = searchInput.value.trim().toLowerCase();
  
    // Search for products matching search term
    const searchResults = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm);
    });
  
    // Display search results
    if (searchResults.length > 0) {
      searchResults.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result.name;
        resultsList.appendChild(listItem);
      });
    } else {
      const message = document.createElement("p");
      message.textContent = "No results found";
      resultsList.appendChild(message);
    }
  }
  