let properties = [
  {
    id: "1",
    image: "https://i.postimg.cc/RV0GzSCX/Home1.jpg",
    title: "Luxury Home",
    type: "House",
    location: "96 Apple Street, Cape Town, 7802, Western Cape, South Africa",
    price: "R1 200 000",
    bedrooms: "5",
    bathrooms: "3",
    carspace: "4",
    population: "10",
  },
  {
    id: "2",
    image: "https://i.postimg.cc/MGnhZ0W3/Home2.jpg",
    title: "Luxury Home",
    type: "House",
    location: "27 Peach Street, Johannesburg, 5570, Gauteng, South Africa",
    price: "R1 300 000",
    bedrooms: "6",
    bathrooms: "3",
    carspace: "4",
    population: "12",
  },
  {
    id: "3",
    image: "https://i.postimg.cc/Zq6xL0jK/Home3.jpg",
    title: "Luxury Home",
    type: "House",
    location:
      "92 Strawberry Road, Bloemfontein, 8700, Free State, South Africa",
    price: "R800 000",
    bedrooms: "4",
    bathrooms: "2",
    carspace: "2",
    population: "8",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/zXMwZTcG/Home4.jpg",
    title: "Luxury Home",
    type: "House",
    location: "77 Bananna Ave, Pretoria, 5200, Gauteng, South Africa",
    price: "R950 000",
    bedrooms: "4",
    bathrooms: "2",
    carspace: "4",
    population: "8",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/T3wsQjW2/Apartment-1.jpg",
    title: "Apartment",
    type: "Apartment",
    location: "10 True Estate, Cape Town, 7800, Western Cape, South Africa",
    price: "R700 000",
    bedrooms: "2",
    bathrooms: "1",
    carspace: "1",
    population: "4",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/zvyL0c5S/Apartment-2.jpg",
    title: "Apartment",
    type: "Apartment",
    location: "11 Lucky Village, Bloemfontein, 8800, Freestate, South Africa",
    price: "R400 000",
    bedrooms: "1",
    bathrooms: "1",
    carspace: "1",
    population: "2",
  },
  {
    id: 7,
    image: "https://i.postimg.cc/L53WQNT5/Apartment-3.jpg",
    title: "Apartment",
    type: "Apartment",
    location:
      "47 Faithful Complex, Bloemfontein, 8800, Freestate, South Africa",
    price: "R550 000",
    bedrooms: "2",
    bathrooms: "1",
    carspace: "1",
    population: "4",
  },
  {
    id: 8,
    image: "https://i.postimg.cc/D00GRzQG/Studio-1.jpg",
    title: "Modern Day Studio",
    type: "Studio",
    location: "55 Tulip Village, Pretoria, 5100, Gauteng, South Africa",
    price: "R300 000",
    bedrooms: "1",
    bathrooms: "1",
    carspace: "1",
    population: "2",
  },
  {
    id: 9,
    image: "https://i.postimg.cc/CxTZs72k/Studio-2.jpg",
    title: "Musical Studio",
    type: "Studio",
    location: "78 Mellow Village, Johannesburg, 5800, Gauteng, South Africa",
    price: "R450 000",
    bedrooms: "1",
    bathrooms: "1",
    carspace: "1",
    population: "2",
  },
  {
    id: 10,
    image: "https://i.postimg.cc/4NKt5mxk/office1.jpg",
    title: "Modern Day Office",
    type: "Office",
    location:
      "124 Green Point Village, Cape Town, 7500, Western Cape, South Africa",
    price: "R800 000",
    bedrooms: "1",
    bathrooms: "1",
    carspace: "1",
    population: "2",
  },
];

const forSaleContainer = document.getElementById("boxes");
function showProperties(properties) {
  forSaleContainer.innerHTML = "";
  properties.forEach((property) => {
    forSaleContainer.innerHTML += `
        <div class="card shadow mb-4">
          <img src=${property.image} class="car-img mb-4 img-fluid" alt="Picture of Property" />
          <h5 class="text-black">${property.title}</h5>
          <p class="text-secondary">
            ${property.location}
          </p>
          <p>${property.price}</p>
          <div class="d-flex flex-row justify-content-center">
            <i class="fa-solid fa-bed me-2"></i>${property.bedrooms}
            <i class="fa-solid fa-shower me-2 ms-2"></i>${property.bathrooms}
            <i class="fa-solid fa-car me-2 ms-2"></i>${property.carspace}
            <i class="fa-solid fa-person me-2 ms-2"></i>${property.population}
          </div>
          <p class="mt-2">${property.type}</p>
            `;
  });
}
showProperties(properties);
