function searchPlaces() {
    const country = document.getElementById("search-input").value.trim();
    const placesContainer = document.getElementById("places-container");
    placesContainer.innerHTML = ""; 

    if (!country) {
        alert("Please enter a country name.");
        return;
    }

    // Sample data for demonstration
    const placesData = {
        // "France": [
        //     { name: "Eiffel Tower", image: "Assets/Eiffiel Tower.jpg", price: "$120" },
        //     { name: "Louvre Museum", image: "Assets/Lovure.jpg", price: "$80" },
        //     { name: "Mont Saint-Michel", image: "Assets/Mont.jpg", price: "$150" },
            
        // ],
        "France": [
            { name: "Eiffel Tower", image: "Assets/Eiffiel Tower.webp", price: "$120" },
            { name: "Louvre Museum", image: "Assets/Lovure.webp", price: "$80" },
            { name: "Mont Saint-Michel", image: "Assets/Mont.webp", price: "$150" },
            
        ],
        "Italy": [
            { name: "Colosseum", image: "https://source.unsplash.com/250x150/?colosseum", price: "$100" },
            { name: "Venice Canals", image: "https://source.unsplash.com/250x150/?venice", price: "$90" }
        ]
    };

    const places = placesData[country] || [];
    
    if (places.length === 0) {
        placesContainer.innerHTML = `<p style="text-align:center;">No places found for "${country}"</p>`;
        return;
    }

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("place-card");
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p class="price">${place.price}</p>
            <button class="book-btn">Book Now</button>
        `;
        placesContainer.appendChild(card);
    });
}